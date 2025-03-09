"use client";

import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useRouter } from "next/navigation";

interface Occupation {
  title: string;
  description: string;
  category?: string;
  onetsoc_code: string;
}

const INITIAL_CARDS = 6; // Initial number of cards to show per section
const LOAD_INCREMENT = 6; // Number of cards to load each time "Load More" is clicked

const OccupationsList = () => {
  const router = useRouter();
  const [occupations, setOccupations] = useState<Occupation[]>([]); // State for API data
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeLetter, setActiveLetter] = useState<string>("A");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [visibleCards, setVisibleCards] = useState<Record<string, number>>({});

  // Group occupations by first letter
  const groupedOccupations = occupations.reduce((acc, occupation) => {
    const firstLetter = occupation.title[0].toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(occupation);
    return acc;
  }, {} as Record<string, Occupation[]>);

  // Filter occupations based on search and category
  const filteredOccupations = Object.entries(groupedOccupations).reduce(
    (acc, [letter, occupations]) => {
      const filtered = occupations.filter((occupation) => {
        const matchesSearch = occupation.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesCategory =
          selectedCategory === "All" ||
          occupation.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });
      if (filtered.length > 0) acc[letter] = filtered;
      return acc;
    },
    {} as Record<string, Occupation[]>
  );

  useEffect(() => {
    let isMounted = true; // Prevent state updates after unmount

    const fetchRedisData = async () => {
      if (!isMounted) return;

      try {
        setIsLoading(true);
        const response = await fetch("/api/occupations-redis");
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();

        if (isMounted) {
          setOccupations(result);
        }
      } catch (err) {
        setError("Failed to load occupations. Please try again later.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchRedisData();

    return () => {
      isMounted = false; // Cleanup to prevent memory leaks
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0; // Height of sticky header
      const scrollPosition = window.scrollY + headerHeight + 20; // Offset to match scrollToLetter

      let closestLetter = activeLetter;
      let minDistance = Infinity;

      Object.keys(filteredOccupations)
        .sort()
        .forEach((letter) => {
          const element = document.getElementById(`letter-${letter}`);
          if (element) {
            const elementTop =
              element.getBoundingClientRect().top + window.scrollY;
            const elementBottom = elementTop + element.offsetHeight;

            // Check if the section is in or near the viewport
            if (
              elementBottom >= scrollPosition &&
              elementTop <= scrollPosition + window.innerHeight
            ) {
              // Find the section closest to the top of the visible area (after header)
              const distance = Math.abs(scrollPosition - elementTop);
              if (distance < minDistance) {
                minDistance = distance;
                closestLetter = letter;
              }
            }
          }
        });

      if (closestLetter !== activeLetter) {
        setActiveLetter(closestLetter);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active letter
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filteredOccupations, activeLetter]); // Include activeLetter to ensure state comparison

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/occupations-redis");
      if (!response.ok) throw new Error("Failed to fetch");
      const result = await response.json();

      setOccupations(result);
    } catch (err) {
      setError("Failed to load occupations. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    const header = document.querySelector("header"); // Select the sticky header
    if (element && header) {
      const headerHeight = header.offsetHeight; // Get the height of the sticky header
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight - 20; // Add a small buffer (20px)

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveLetter(letter); // Update the active letter
    }
  };

  const loadMore = (letter: string) => {
    setVisibleCards((prev) => ({
      ...prev,
      [letter]: (prev[letter] || INITIAL_CARDS) + LOAD_INCREMENT,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex">
      {!isLoading && (
        <div className="relative w-16 flex-shrink-0">
          <aside
            className="w-16 sticky top-0 flex flex-col items-center py-8 bg-white/80 backdrop-blur-md shadow-sm z-20 overflow-y-auto custom-scrollbar"
            style={{ maxHeight: "100vh" }}
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
        <header className="mb-2 sticky top-[56px] bg-gray-50/90 backdrop-blur-md py-6 border-b border-gray-200/30 z-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-medium text-[#00B24B] tracking-wide">
              Occupations
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Discover professions with a clean, modern twist.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              <input
                type="text"
                placeholder="Search occupations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#3FA1D8] focus:border-[#00B24B]/20 text-base text-gray-800 placeholder-gray-400 transition-all duration-200"
              />
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto">
          <TooltipProvider>
            {isLoading ? (
              <div className="absolute inset-0 bg-opacity-80 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 border-2 border-[#3FA1D8] border-t-transparent mx-auto mb-4"></div>
                  <p className="text-[#3FA1D8] text-base sm:text-lg md:text-xl">
                    Loading Occupations...
                  </p>
                </div>
              </div>
            ) : error ? (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center">
                  <p className="text-red-400 text-base sm:text-lg mb-4">
                    {error}
                  </p>
                  <button
                    onClick={fetchData}
                    className="px-4 sm:px-6 py-2 bg-[#3FA1D8] text-white rounded-full font-medium hover:bg-[#2F8BCF] transition-all duration-200"
                  >
                    Retry Loading
                  </button>
                </div>
              </div>
            ) : Object.keys(filteredOccupations).length > 0 ? (
              Object.keys(filteredOccupations)
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
                      id={`letter-${letter}`}
                      className="mb-6"
                    >
                      <h2 className="text-2xl font-medium text-[#00B24B] mb-6 sticky top-20 bg-gray-50/90 py-3 border-b border-gray-200/20">
                        {letter} ({totalCards})
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
                              {occupation.title.length > 30 && ( // Adjust threshold based on when truncation occurs
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
                            className="px-6 py-2 bg-[#00B24B] text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-out border-none text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00B24B]/20"
                          >
                            Load More ({visibleCount}/{totalCards})
                          </button>
                        </div>
                      )}
                    </section>
                  );
                })
            ) : (
              <p className="text-gray-500 text-center mt-8 text-lg">
                No occupations found.
              </p>
            )}
          </TooltipProvider>
        </main>
      </div>
    </div>
  );
};

export default OccupationsList;
