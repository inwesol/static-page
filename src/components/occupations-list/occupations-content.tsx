"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { OccupationsListSearch } from "./occupations-list-search";
import { Occupation } from "./types";
import { InterestFilter } from "./interest-filter";
import { AbilityFilter, abilityCategories } from "./ability-filter";
import { skillCategories, SkillsFilter } from "./skills-filter";
import { knowledgeCategories, KnowledgeFilter } from "./knowledge-filter";

// Add a debounce utility function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function (...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

const INITIAL_CARDS = 6; // Initial number of cards to show per section
const LOAD_INCREMENT = 6; // Number of cards to load each time "Load More" is clicked

// Create a constant for consistent offset
const HEADER_OFFSET = 56;
const DEBOUNCE_DELAY = 100; // 100ms debounce for scroll events

// Add this utility function
const getElementVisibleHeight = (element: HTMLElement): number => {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // If element is not visible at all
  if (rect.bottom < 0 || rect.top > viewportHeight) {
    return 0;
  }

  // If element is partially visible
  if (rect.top < 0) {
    return Math.min(rect.height + rect.top, viewportHeight);
  }

  if (rect.bottom > viewportHeight) {
    return Math.min(viewportHeight - rect.top, rect.height);
  }

  // Element is fully visible
  return rect.height;
};

export function OccupationsContent({
  occupations,
  browseBy = "all",
}: {
  occupations: Occupation[];
  browseBy?: string;
}) {
  const router = useRouter();
  const [filteredOccupations, setFilteredOccupations] = useState<
    Record<string, Occupation[]>
  >({});
  const [activeLetter, setActiveLetter] = useState<string>("A");
  const [visibleCards, setVisibleCards] = useState<Record<string, number>>({});
  const [error, setError] = useState<string | null>(null);
  // Add new responsive measurements state
  const [measurements, setMeasurements] = useState({
    headerHeight: 0,
    windowWidth: 0,
    windowHeight: 0,
  });

  // Ref to track if component is mounted
  const isMounted = useRef(false);

  // Initialize filtered occupations on mount
  useEffect(() => {
    const grouped = occupations.reduce((acc, occupation) => {
      const firstLetter = occupation.title[0].toUpperCase();
      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(occupation);
      return acc;
    }, {} as Record<string, Occupation[]>);

    setFilteredOccupations(grouped);
  }, [occupations]);

  // testing re-render
  // console.log("re-rendering");

  // New effect to measure layout elements and handle resize
  useEffect(() => {
    isMounted.current = true;

    const updateMeasurements = () => {
      if (!isMounted.current) return;

      const header = document.getElementById("sticky-header");
      const headerHeight = header ? header.offsetHeight : 0;

      setMeasurements({
        headerHeight,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    // Initialize measurements
    updateMeasurements();

    // Create debounced resize handler
    const debouncedResize = debounce(updateMeasurements, DEBOUNCE_DELAY);

    // Listen for window resize events
    window.addEventListener("resize", debouncedResize);

    return () => {
      isMounted.current = false;
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  useEffect(() => {
    const debouncedHandleScroll = debounce(() => {
      // Use measurements for calculations instead of recalculating every time
      const { headerHeight, windowHeight } = measurements;
      const viewportOffset = headerHeight + HEADER_OFFSET;
      const scrollPosition = window.scrollY;
      const viewportMidpoint =
        scrollPosition + viewportOffset + windowHeight / 4;

      // Get all letter section elements
      const letterSections = Object.keys(filteredOccupations)
        .sort()
        .map((letter) => ({
          letter,
          element: document.getElementById(`letter-${letter}`),
        }))
        .filter((item) => item.element); // Filter out any null elements

      if (letterSections.length === 0) return;

      // Find the first section that extends beyond the midpoint
      let activeSection = letterSections[0].letter;

      for (const { letter, element } of letterSections) {
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const absoluteTop = rect.top + scrollPosition;

        // If this section's top is above the midpoint, it's our new candidate
        if (absoluteTop <= viewportMidpoint) {
          activeSection = letter;
        } else {
          // We've gone past the viewport midpoint, so stop checking
          break;
        }
      }

      if (activeSection !== activeLetter) {
        setActiveLetter(activeSection);
      }
    }, DEBOUNCE_DELAY);

    window.addEventListener("scroll", debouncedHandleScroll);

    // Call once when measurements change
    if (measurements.headerHeight > 0) {
      debouncedHandleScroll();
    }

    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [filteredOccupations, activeLetter, measurements]);

  // Handle interest search
  // Handle interest search with AND logic
  const handleInterestSearch = (interests: string[]) => {
    // Filter occupations with code > 3 AND containing ALL selected interests
    const filtered = occupations.filter(
      (occupation) =>
        occupation.code > 3 &&
        interests.every((interest) => occupation.interest.includes(interest))
    );

    // Group filtered occupations by first letter of the title
    const grouped = filtered.reduce((acc, occupation) => {
      const firstLetter = occupation.title[0].toUpperCase();
      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(occupation);
      return acc;
    }, {} as Record<string, Occupation[]>);

    setFilteredOccupations(grouped);
    setVisibleCards({});
    setError(
      filtered.length === 0
        ? "No occupations found matching all selected interests. Try different combinations."
        : null
    );
  };

  // Hadle ability search
  const handleAbilitySearch = (selectedSubsubId: string | null) => {
    // console.log("running");
    // console.log("selection: ", selectedSubsubId);
    if (!selectedSubsubId) {
      // No filter, show all occupations grouped by first letter
      const grouped = occupations.reduce((acc, occupation) => {
        const firstLetter = occupation.title[0].toUpperCase();
        if (!acc[firstLetter]) acc[firstLetter] = [];
        acc[firstLetter].push(occupation);
        return acc;
      }, {} as Record<string, Occupation[]>);
      setFilteredOccupations(grouped);
      setError(null);
      // console.log("running with empty selectedId")
      return;
    }

    // Find the selected subsub-ability in abilities data
    let occupationIds: string[] = [];
    abilityCategories.forEach((ability) =>
      ability.subAbilities.forEach((sub) =>
        sub.subsubAbilities.forEach((subsub) => {
          if (subsub.id === selectedSubsubId) {
            occupationIds = subsub.occupationIds;
          }
        })
      )
    );

    // Filter occupations that match any occupationId in the subsub-ability
    const filtered = occupations.filter((occ) =>
      occupationIds.includes(occ.onetsoc_code)
    );

    // Group filtered occupations by first letter of the title
    const grouped = filtered.reduce((acc, occupation) => {
      const firstLetter = occupation.title[0].toUpperCase();
      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(occupation);
      return {...acc};
    }, {} as Record<string, Occupation[]>);
    // console.log("Grouped: ", grouped);
    setFilteredOccupations(grouped);
    setError(
      filtered.length === 0
        ? "No occupations found matching the selected ability. Try a different one."
        : null
    );
  };
  // Hadle skill search
  const handleSkillSearch = useCallback(
    (selectedId: string | null) => {
      // console.log("running")
      if (!selectedId) {
        // No filter, show all occupations grouped by first letter
        const grouped = occupations.reduce((acc, occupation) => {
          const firstLetter = occupation.title[0].toUpperCase();
          if (!acc[firstLetter]) acc[firstLetter] = [];
          acc[firstLetter].push(occupation);
          return acc;
        }, {} as Record<string, Occupation[]>);
        setFilteredOccupations(grouped);
        setError(null);
        return;
      }

      // Find selected subskill
      let occupationIds: string[] = [];
      skillCategories.forEach((category) =>
        category.subSkills.forEach((subSkill) => {
          if (subSkill.id === selectedId) {
            occupationIds = subSkill.occupationIds;
          }
        })
      );

      // Filter occupations that match any occupationId in the subsub-ability
      const filtered = occupations.filter((occ) =>
        occupationIds.includes(occ.onetsoc_code)
      );

      // Group filtered occupations by first letter of the title
      const grouped = filtered.reduce((acc, occupation) => {
        const firstLetter = occupation.title[0].toUpperCase();
        if (!acc[firstLetter]) acc[firstLetter] = [];
        acc[firstLetter].push(occupation);
        return acc;
      }, {} as Record<string, Occupation[]>);

      setFilteredOccupations(grouped);
      setError(
        filtered.length === 0
          ? "No occupations found matching the selected ability. Try a different one."
          : null
      );
    },
    [occupations]
  );
  // Handle knowledge search
  const handleKnowldegSearch = useCallback(
    (selectedId: string | null) => {
      // console.log("running")
      if (!selectedId) {
        // No filter, show all occupations grouped by first letter
        const grouped = occupations.reduce((acc, occupation) => {
          const firstLetter = occupation.title[0].toUpperCase();
          if (!acc[firstLetter]) acc[firstLetter] = [];
          acc[firstLetter].push(occupation);
          return acc;
        }, {} as Record<string, Occupation[]>);
        setFilteredOccupations(grouped);
        setError(null);
        return;
      }

      // Find selected subskill
      let occupationIds: string[] = [];
      knowledgeCategories.forEach((category) =>
        category.subKnowledges.forEach((subKnowledge) => {
          if (subKnowledge.id === selectedId) {
            occupationIds = subKnowledge.occupationIds;
          }
        })
      );

      // Filter occupations that match any occupationId in the subsub-ability
      const filtered = occupations.filter((occ) =>
        occupationIds.includes(occ.onetsoc_code)
      );

      // Group filtered occupations by first letter of the title
      const grouped = filtered.reduce((acc, occupation) => {
        const firstLetter = occupation.title[0].toUpperCase();
        if (!acc[firstLetter]) acc[firstLetter] = [];
        acc[firstLetter].push(occupation);
        return acc;
      }, {} as Record<string, Occupation[]>);

      setFilteredOccupations(grouped);
      setError(
        filtered.length === 0
          ? "No occupations found matching the selected ability. Try a different one."
          : null
      );
    },
    [occupations]
  );

  // Update loadMore function to recalculate positions after loading more content
  const loadMore = (letter: string) => {
    setVisibleCards((prev) => ({
      ...prev,
      [letter]: (prev[letter] || INITIAL_CARDS) + LOAD_INCREMENT,
    }));
  };

  // Render the appropriate header based on browseBy prop
  const renderHeader = () => {
    if (browseBy === "interest") {
      return (
        <div className="flex-shrink-0 w-full">
          <h1 className="text-2xl lg:text-3xl font-medium text-primary-green-600 tracking-wide mb-2">
            Browse by Interests
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Find careers that match your interests and skills using the Holland
            Code (RIASEC).
          </p>
          <InterestFilter onSearch={handleInterestSearch} />
        </div>
      );
    }
    // render the ability header if browseBy is ability
    else if (browseBy === "ability") {
      return (
        <>
          <div className="flex-shrink-0 w-full">
            {/* <h1 className="text-2xl lg:text-3xl font-medium text-primary-green-600 tracking-wide">
              Browse by Abilities
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Abilities are enduring attributes of the individual that influence
              performance. Open and explore the folders below to see the
              different categories and levels of information. Ratings on
              occupations are available at the most detailed level.
            </p> */}
            <AbilityFilter onSearch={handleAbilitySearch} />
          </div>
        </>
      );
    }
    // render the ability header if browseBy is skills
    else if (browseBy === "skills") {
      return (
        <>
          <div className="flex-shrink-0 w-full">
            {/* <h1 className="text-2xl lg:text-3xl font-medium text-primary-green-600 tracking-wide">
              Browse by Skills
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Basic skills are developed capacities that facilitate learning or
              the more rapid acquisition of knowledge. Open and explore the
              folders below to see the different categories and levels of
              information. Ratings on occupations are available at the most
              detailed level.
            </p> */}
            <SkillsFilter onSearch={handleSkillSearch} />
          </div>
        </>
      );
    }
    // render the ability header if browseBy is knowledge
    else if (browseBy === "knowledge") {
      return (
        <>
          <div className="flex-shrink-0 w-full">
            {/* <h1 className="text-2xl lg:text-3xl font-medium text-primary-green-600 tracking-wide">
              Browse by Knowledge
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Knowledge is organized sets of principles and facts applying in
              general domains. Open and explore the folders below to see the
              different categories and levels of information. Ratings on
              occupations are available at the most detailed level.
            </p> */}
            <KnowledgeFilter onSearch={handleKnowldegSearch} />
          </div>
        </>
      );
    }
    // Default header (browseBy === "all")
    return (
      <>
        <div className="flex-shrink-0">
          <h1 className="text-2xl lg:text-3xl font-medium text-primary-green-600 tracking-wide">
            Career Explorer
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Explore opportunities that align with your passions and ambitions.
          </p>
        </div>

        <div className="w-full lg:w-2/3">
          <OccupationsListSearch
            occupations={occupations}
            onFilteredOccupationsChange={setFilteredOccupations}
          />
        </div>
      </>
    );
  };
  return (
    <div className="w-full sm:px-8 px-4">
      <header
        className="mb-2 sticky top-0 bg-gray-50/90 backdrop-blur-md py-6 border-b border-gray-200/30 z-20"
        id="sticky-header"
        style={{ top: `${HEADER_OFFSET}px` }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-4">
            {renderHeader()}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto h-full">
        <TooltipProvider>
          {error ? (
            <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <p className="text-red-400 text-base sm:text-lg mb-4">{error}</p>
            </div>
            </div>
          ) : // </div>
          Object.keys(filteredOccupations).length > 0 ? (
            <div className="mb-24">
              {Object.keys(filteredOccupations)
                .sort()
                .map((letter) => {
                  const visibleCount = visibleCards[letter] || INITIAL_CARDS;
                  const totalCards = filteredOccupations[letter].length;
                  const displayedCards = filteredOccupations[letter].slice(
                    0,
                    visibleCount
                  );
                  // console.log("hi from occupaton-content component")
                  return (
                    <section
                      key={letter}
                      className={"mb-6"}
                      id={`letter-${letter}`}
                    >
                      <h2
                        className="text-2xl font-medium text-primary-green-600 mb-6 sticky bg-gray-50/90 py-3 border-b border-gray-200/20 z-10"
                        style={{
                          top: `${measurements.headerHeight + HEADER_OFFSET}px`,
                        }}
                      >
                        {letter}
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        {displayedCards.map((occupation) => (
                          <div
                            key={occupation.title}
                            className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 ease-out border-t border-[#3FA1D8]/30 cursor-pointer"
                            onClick={() =>
                              router.push(
                                `/explorer/${occupation.onetsoc_code}`
                              )
                            }
                          >
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <h3 className="text-base font-medium text-[#3FA1D8] mb-2 line-clamp-1">
                                  {occupation.title}
                                </h3>
                              </TooltipTrigger>
                              {occupation.title.length > 30 && (
                                <TooltipContent className="max-w-xs p-2 bg-gray-100 text-gray-800 rounded-md shadow-lg border border-gray-200 z-50">
                                  <p className="text-base font-medium">
                                    {occupation.title}
                                  </p>
                                </TooltipContent>
                              )}
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <p className="text-sm text-gray-500 group-hover:text-gray-600 line-clamp-2">
                                  {occupation.description}
                                </p>
                              </TooltipTrigger>
                              {occupation.description &&
                                occupation.description.length > 100 && (
                                  <TooltipContent className="max-w-xs p-2 bg-gray-100 text-gray-800 rounded-md shadow-lg border border-gray-200 z-50">
                                    <p className="text-sm">
                                      {occupation.description}
                                    </p>
                                  </TooltipContent>
                                )}
                            </Tooltip>
                          </div>
                        ))}
                      </div>

                      {visibleCount < totalCards && (
                        <div className="col-span-full flex justify-center md:col-span-2 lg:col-span-4 mt-6">
                          <button
                            onClick={() => loadMore(letter)}
                            className="px-6 py-2 bg-[#00B24B]/80 text-white shadow-md hover:shadow-lg transition-all duration-200 ease-out border-none text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00B24B]/20 rounded-xl"
                          >
                            Load More ({visibleCount}/{totalCards})
                          </button>
                        </div>
                      )}
                    </section>
                  );
                })}
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-8 text-lg">
              No occupations found.
            </p>
          )}
        </TooltipProvider>
      </main>
    </div>
  );
}
