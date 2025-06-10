"use client";

import { useState, useEffect, useCallback ,useRef} from "react";
import { PlaceholdersAndVanishInput } from "../input-animating-placeholder/input-animating-placeholder";
import { Occupation } from "./types";

interface OccupationsListSearchProps {
  occupations: Occupation[];
  onFilteredOccupationsChange: (
    filteredOccupations: Record<string, Occupation[]>
  ) => void;
}

export const OccupationsListSearch = ({
  occupations,
  onFilteredOccupationsChange,
}: OccupationsListSearchProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Create a stable reference for the debounce timer
  const timerRef = useRef<NodeJS.Timeout>();

  const updateFilteredOccupations = useCallback(() => {
    // Clear any pending debounce
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set new debounce
    timerRef.current = setTimeout(() => {
      // Group occupations by first letter
      const groupedOccupations = occupations.reduce((acc, occupation) => {
        const firstLetter = occupation.title[0].toUpperCase();
        if (!acc[firstLetter]) acc[firstLetter] = [];
        acc[firstLetter].push(occupation);
        return acc;
      }, {} as Record<string, Occupation[]>);

      // Filter occupations based on search and category
      const filteredOccupations = Object.entries(groupedOccupations).reduce(
        (acc, [letter, letterOccupations]) => {
          const filtered = letterOccupations.filter((occupation) => {
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

      onFilteredOccupationsChange(filteredOccupations);
    }, 300);

    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [searchQuery, selectedCategory, occupations, onFilteredOccupationsChange]);

  // Call the debounced function whenever dependencies change
  useEffect(() => {
    updateFilteredOccupations();
  }, [updateFilteredOccupations]);

  return (
    <div className="flex flex-col gap-6">
      <PlaceholdersAndVanishInput
        placeholders={[
          "Chief Executives",
          "Chief Sustainability Officers",
          "General and Operations Managers",
          "Legislators",
          "Advertising and Promotions Managers",
          "Marketing Managers",
          "Sales Managers",
          "Public Relations Managers",
          "Fundraising Managers",
          "Administrative Services Managers",
        ]}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSubmit={() => {}}
      />
    </div>
  );
};
