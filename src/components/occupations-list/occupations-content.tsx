"use client";
import React from "react";
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
import { interestsList } from "./interests-list";
import { InterestFilter } from "./interest-filter";
import { AbilityFilter } from "./ability-filter";
import { abilityCategories } from "./ability-category-constant";
import { SkillsFilter } from "./skills-filter";
import { skillCategories } from "./skill-category-constant";
import { KnowledgeFilter } from "./knowledge-filter";
import { knowledgeCategories } from "./knowledge-category-constant";
import { content } from "googleapis/build/src/apis/content";
import { TargetIcon } from "lucide-react";
import { DialogContent } from "@/components/ui/dialog";
import Modal from "@/components/ui/modal";
import { ArrowRight, Sparkles } from "lucide-react";

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

const INITIAL_CARDS = 6;
const LOAD_INCREMENT = 6;
const HEADER_OFFSET = 56;
const DEBOUNCE_DELAY = 100;

const getElementVisibleHeight = (element: HTMLElement): number => {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  if (rect.bottom < 0 || rect.top > viewportHeight) {
    return 0;
  }
  if (rect.top < 0) {
    return Math.min(rect.height + rect.top, viewportHeight);
  }
  if (rect.bottom > viewportHeight) {
    return Math.min(viewportHeight - rect.top, rect.height);
  }
  return rect.height;
};

// Custom Modal Component - only Coco
const CustomModalCTA: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden !rounded-2xl">
        <div className="bg-gradient-to-br from-primary-blue-50 to-primary-green-50 p-8 ">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Continue Your Journey
          </h2>
          <p className="text-gray-600 text-sm">
            Explore these tools to help you grow and succeed
          </p>
        </div>
        
        <div className="p-6 flex flex-col gap-3">
          <a
            href="https://coco.inwesol.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4 p-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900 text-lg group-hover:text-primary-blue-600 transition-colors">
                    Coco Mindset Coach
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Visit Coco AI Mindset Coach for personalized guidance.
                </p>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
          </a>
        </div>
        
        <div className="px-6 pb-6 pt-2">
          <p className="text-xs text-center text-gray-500">
            Choose an option to continue exploring your potential
          </p>
        </div>
      </DialogContent>
    </Modal>
  );
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
  const [measurements, setMeasurements] = useState({
    headerHeight: 0,
    windowWidth: 0,
    windowHeight: 0,
  });
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);
  const isMounted = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const grouped = occupations.reduce((acc, occupation) => {
      const firstLetter = occupation.title[0].toUpperCase();
      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(occupation);
      return acc;
    }, {} as Record<string, Occupation[]>);
    setFilteredOccupations(grouped);
    
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [occupations]);

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
    updateMeasurements();
    const debouncedResize = debounce(updateMeasurements, DEBOUNCE_DELAY);
    window.addEventListener("resize", debouncedResize);
    return () => {
      isMounted.current = false;
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  useEffect(() => {
    const debouncedHandleScroll = debounce(() => {
      const { headerHeight, windowHeight } = measurements;
      const viewportOffset = headerHeight + HEADER_OFFSET;
      const scrollPosition = window.scrollY;
      const viewportMidpoint =
        scrollPosition + viewportOffset + windowHeight / 4;
      const letterSections = Object.keys(filteredOccupations)
        .sort()
        .map((letter) => ({
          letter,
          element: document.getElementById(`letter-${letter}`),
        }))
        .filter((item) => item.element);
      if (letterSections.length === 0) return;
      let activeSection = letterSections[0].letter;
      for (const { letter, element } of letterSections) {
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        const absoluteTop = rect.top + scrollPosition;
        if (absoluteTop <= viewportMidpoint) {
          activeSection = letter;
        } else {
          break;
        }
      }
      if (activeSection !== activeLetter) {
        setActiveLetter(activeSection);
      }
    }, DEBOUNCE_DELAY);
    window.addEventListener("scroll", debouncedHandleScroll);
    if (measurements.headerHeight > 0) {
      debouncedHandleScroll();
    }
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [filteredOccupations, activeLetter, measurements]);

  const handleInterestSearch = (interests: string[]) => {
    const result: string = interests.sort().join("");
    const interestsPart = interestsList[result as keyof typeof interestsList];
    const interestsPartSet = new Set(
      interestsPart.map((item) => item.onetsoc_code)
    );
    const filtered = occupations.filter((item) =>
      interestsPartSet.has(item.onetsoc_code)
    );
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

  const handleAbilitySearch = (selectedSubsubId: string | null) => {
    if (!selectedSubsubId) {
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
    const filtered = occupations.filter((occ) =>
      occupationIds.includes(occ.onetsoc_code)
    );
    const grouped = filtered.reduce((acc, occupation) => {
      const firstLetter = occupation.title[0].toUpperCase();
      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(occupation);
      return { ...acc };
    }, {} as Record<string, Occupation[]>);
    setFilteredOccupations(grouped);
    setError(
      filtered.length === 0
        ? "No occupations found matching the selected ability. Try a different one."
        : null
    );
  };

  const handleSkillSearch = useCallback(
    (selectedId: string | null) => {
      if (!selectedId) {
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
      let occupationIds: string[] = [];
      skillCategories.forEach((category) =>
        category.subSkills.forEach((subSkill) => {
          if (subSkill.id === selectedId) {
            occupationIds = subSkill.occupationIds;
          }
        })
      );
      const filtered = occupations.filter((occ) =>
        occupationIds.includes(occ.onetsoc_code)
      );
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

  const handleKnowldegSearch = useCallback(
    (selectedId: string | null) => {
      if (!selectedId) {
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
      let occupationIds: string[] = [];
      knowledgeCategories.forEach((category) =>
        category.subKnowledges.forEach((subKnowledge) => {
          if (subKnowledge.id === selectedId) {
            occupationIds = subKnowledge.occupationIds;
          }
        })
      );
      const filtered = occupations.filter((occ) =>
        occupationIds.includes(occ.onetsoc_code)
      );
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

  const loadMore = (letter: string) => {
    setVisibleCards((prev) => ({
      ...prev,
      [letter]: (prev[letter] || INITIAL_CARDS) + LOAD_INCREMENT,
    }));
  };

  const renderHeader = () => {
    if (browseBy === "interest") {
      return (
        <div className="flex-shrink-0 w-full">
          <InterestFilter
            onSearch={handleInterestSearch}
            setShowPlaceholder={setShowPlaceholder}
          />
        </div>
      );
    } else if (browseBy === "ability") {
      return (
        <>
          <div className="flex-shrink-0 w-full">
            <AbilityFilter
              onSearch={handleAbilitySearch}
              setShowPlaceholder={setShowPlaceholder}
            />
          </div>
        </>
      );
    } else if (browseBy === "skills") {
      return (
        <>
          <div className="flex-shrink-0 w-full">
            <SkillsFilter
              onSearch={handleSkillSearch}
              setShowPlaceholder={setShowPlaceholder}
            />
          </div>
        </>
      );
    } else if (browseBy === "knowledge") {
      return (
        <>
          <div className="flex-shrink-0 w-full">
            <KnowledgeFilter
              onSearch={handleKnowldegSearch}
              setShowPlaceholder={setShowPlaceholder}
            />
          </div>
        </>
      );
    }
    return (
      <>
        <div className="max-w-6xl mx-auto flex gap-3 py-4 flex-col lg:flex-row">
          <div className="lg:flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-medium text-primary-green-600 tracking-wide">
              Career Explorer
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Explore opportunities that align with your passions and ambitions.
            </p>
          </div>
          <div className="lg:w-full lg:mt-2">
            <OccupationsListSearch
              occupations={occupations}
              onFilteredOccupationsChange={setFilteredOccupations}
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="w-full sm:px-8 px-4">
      {renderHeader()}
      <CustomModalCTA 
        isOpen={isModalOpen} 
        setIsOpen={setIsModalOpen}
      />
      {showPlaceholder && browseBy !== "all" ? (
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
              <TargetIcon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-xl font-bold text-primary-blue-600 mb-4">
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
                "Turn your passions into professions. Our system matches your personal interests with careers that will keep you engaged and motivated. Choose your interest to discover the professions that align with what you truly enjoy."}
            </p>
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
                                  `/explorer/${browseBy}/${occupation.onetsoc_code}`
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