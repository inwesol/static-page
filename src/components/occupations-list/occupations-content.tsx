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
}: {
  occupations: Occupation[];
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

  useEffect(() => {
    // Initialize filtered occupations on mount
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

  // Expanded scroll to letter function with better handling
  const scrollToLetter = useCallback(
    (letter: string) => {
      const targetElement = document.getElementById(`letter-${letter}`);
      if (!targetElement) return;

      const { headerHeight } = measurements;

      // Get all section elements and their current visibility states
      const sectionsBeforeTarget = Object.keys(filteredOccupations)
        .sort()
        .filter((l) => l < letter)
        .map((l) => document.getElementById(`letter-${l}`))
        .filter((el): el is HTMLElement => el !== null);

      // Check if target section is already visible in the viewport
      const targetRect = targetElement.getBoundingClientRect();
      const isTargetVisible =
        targetRect.top >= headerHeight &&
        targetRect.bottom <= window.innerHeight;

      // If target is already well-positioned, just update the active letter
      if (isTargetVisible) {
        setActiveLetter(letter);
        return;
      }

      // Calculate scroll position accounting for any collapsed/expanded content
      let scrollPosition =
        window.scrollY + targetRect.top - (headerHeight + HEADER_OFFSET);

      // Check if sections before this one have "Load More" content expanded
      // This helps adjust the scroll position based on real content height
      const expandedSections = sectionsBeforeTarget.filter((section) => {
        const visibleCards = section ? getElementVisibleHeight(section) : 0;
        // Consider a section expanded if it has significant visible height
        return visibleCards > 100; // Arbitrary threshold to detect expanded content
      });

      // Add slight adjustment for expanded sections to improve accuracy
      if (expandedSections.length > 0) {
        // Small adjustment per expanded section to account for content variations
        scrollPosition += expandedSections.length * 10;
      }

      // Smooth scroll to position
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });

      // Set active letter after scrolling
      setActiveLetter(letter);

      // Add a slight delay and re-check scroll position to ensure accuracy
      setTimeout(() => {
        const newTargetRect = targetElement.getBoundingClientRect();
        const isNowVisible =
          newTargetRect.top >= headerHeight &&
          newTargetRect.top < headerHeight + 100;

        // If the target is still not positioned optimally, make a small adjustment
        if (!isNowVisible) {
          window.scrollTo({
            top:
              window.scrollY +
              newTargetRect.top -
              (headerHeight + HEADER_OFFSET),
            behavior: "smooth",
          });
        }
      }, 600); // Wait for initial scroll to complete
    },
    [filteredOccupations, measurements]
  );

  // Update loadMore function to recalculate positions after loading more content
  const loadMore = (letter: string) => {
    setVisibleCards((prev) => ({
      ...prev,
      [letter]: (prev[letter] || INITIAL_CARDS) + LOAD_INCREMENT,
    }));

    // After content expands, recalculate measurements and scroll position
    setTimeout(() => {
      if (activeLetter === letter) {
        const element = document.getElementById(`letter-${letter}`);
        if (element) {
          const { headerHeight } = measurements;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: elementPosition - (headerHeight + HEADER_OFFSET),
            behavior: "smooth",
          });
        }
      }
    }, 100); // Short delay to allow DOM to update
  };

  return (
    <>
      {Object.keys(filteredOccupations).length > 0 && (
        <div className="relative w-16 flex-shrink-0">
          <aside
            className="w-16 sticky flex flex-col items-center py-8 bg-white/80 backdrop-blur-md shadow-sm z-10 overflow-y-auto custom-scrollbar"
            style={{
              top: `${measurements.headerHeight}px`,
              maxHeight: `calc(100vh - ${measurements.headerHeight}px)`,
            }}
          >
            {Object.keys(filteredOccupations)
              .sort()
              .map((letter) => (
                <button
                  key={letter}
                  onClick={() => scrollToLetter(letter)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg my-1 text-sm font-medium transition-all duration-200 ${
                    activeLetter === letter
                      ? "bg-[#00B24B] text-white shadow-sm scale-105"
                      : "text-gray-500 hover:text-[#3FA1D8] hover:bg-[#3FA1D8]/10"
                  }`}
                >
                  {letter}
                </button>
              ))}
          </aside>
        </div>
      )}

      <div className="flex-1 ml-0 px-8">
        <header
          className="mb-2 sticky top-0 bg-gray-50/90 backdrop-blur-md py-6 border-b border-gray-200/30 z-20"
          id="sticky-header"
        >
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-medium text-[#00B24B] tracking-wide">
              Career Explorer
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Explore opportunities that align with your passions and ambitions.
            </p>

            <OccupationsListSearch
              occupations={occupations}
              onFilteredOccupationsChange={setFilteredOccupations}
            />
          </div>
        </header>

        <main className="max-w-6xl mx-auto h-full">
          <TooltipProvider>
            {error ? (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center">
                  <p className="text-red-400 text-base sm:text-lg mb-4">
                    {error}
                  </p>
                </div>
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
                          className="text-2xl font-medium text-[#00B24B] mb-6 sticky bg-gray-50/90 py-3 border-b border-gray-200/20 z-10"
                          style={{ top: `${measurements.headerHeight}px` }}
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
                                {occupation.description.length > 100 && (
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
    </>
  );
}
