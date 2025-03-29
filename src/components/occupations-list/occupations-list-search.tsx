"use client";

import { useState, useEffect, useCallback } from "react";
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

  // Memoize the filter function to prevent unnecessary recalculations
  const updateFilteredOccupations = useCallback(() => {
    // Group occupations by first letter (outside of the effect to avoid repetitive calculations)
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
  }, [searchQuery, selectedCategory, occupations, onFilteredOccupationsChange]);

  // Use a debounced effect to prevent rapid state updates
  useEffect(() => {
    const timer = setTimeout(() => {
      updateFilteredOccupations();
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [updateFilteredOccupations]);

  return (
    <div className="mt-4 flex flex-col gap-6">
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
