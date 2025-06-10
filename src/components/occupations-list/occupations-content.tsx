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
import { content } from "googleapis/build/src/apis/content";
import { TargetIcon } from "lucide-react";

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
  // placeholder-content
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);

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
      return { ...acc };
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
          <InterestFilter onSearch={handleInterestSearch} setShowPlaceholder={setShowPlaceholder}/>
        </div>
      );
    }
    // render the ability header if browseBy is ability
    else if (browseBy === "ability") {
      return (
        <>
          <div className="flex-shrink-0 w-full">
            <AbilityFilter onSearch={handleAbilitySearch} setShowPlaceholder={setShowPlaceholder}/>
          </div>
        </>
      );
    }
    // render the ability header if browseBy is skills
    else if (browseBy === "skills") {
      return (
        <>
          <div className="flex-shrink-0 w-full">
            <SkillsFilter onSearch={handleSkillSearch} setShowPlaceholder={setShowPlaceholder}/>
          </div>
        </>
      );
    }
    // render the knowledge header if browseBy is knowledge
    else if (browseBy === "knowledge") {
      return (
        <>
          <div className="flex-shrink-0 w-full">
            <KnowledgeFilter onSearch={handleKnowldegSearch} setShowPlaceholder={setShowPlaceholder}/>
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
      {renderHeader()}
      {showPlaceholder && browseBy !== "all" ? (
        <div className="max-w-4xl mx-auto p-6">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
              <TargetIcon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {browseBy === "ability" &&
                "Discover Careers That Match Your Abilities"}
              {browseBy === "skills" && "Explore Careers That Fit Your Skills"}
              {browseBy === "knowledge" &&
                "Find Careers That Align With Your Knowledge"}
              {browseBy === "interest" &&
                "Match Your Interests With Ideal Careers"}
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              {browseBy === "ability" &&
                "Complete all steps to find careers that align with your natural abilities. Our comprehensive matching system will show you personalized career recommendations based on what you do best."}
              {browseBy === "skills" &&
                "Identify careers that perfectly utilize your developed skills. Our comprehensive matching system will help you find roles where your expertise shines."}
              {browseBy === "knowledge" &&
                "Connect your areas of knowledge with rewarding career paths. We'll help you discover professions that value your educational background and expertise."}
              {browseBy === "interest" &&
                "Turn your passions into professions. Our system matches your personal interests with careers that will keep you engaged and motivated."}
            </p>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">{browseBy === "interest" &&
                "Select any three , any two or anyone interest to view the careers that best suit your interest."}</p>
          </div>
        </div>
      ) : (
        <main className="max-w-6xl mx-auto">
          <TooltipProvider>
            {error ? (
              <div className="text-center">
                <p className="text-red-400 text-base sm:text-lg my-20">
                  {error}
                </p>
              </div>
            ) : Object.keys(filteredOccupations).length > 0 ? (
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
                    return (
                      <section
                        key={letter}
                        className={"mb-6"}
                        id={`letter-${letter}`}
                      >
                        <h2
                          className="text-2xl font-medium text-primary-green-600 mb-6 sticky bg-gray-50/90 py-3 border-b border-gray-200/20 z-10"
                          style={{
                            top: `${
                              measurements.headerHeight + HEADER_OFFSET
                            }px`,
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
      )}
    </div>
  );
}
