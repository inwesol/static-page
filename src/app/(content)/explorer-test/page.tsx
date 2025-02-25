"use client";

import React from "react";
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import {
  CheckCircle,
  Clock,
  Star,
  TrendingUp,
  Video,
  Globe,
} from "lucide-react";
import { BentoGrid, type BentoItem } from "./bento-grid";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useCallback } from "react";

const itemsSample: BentoItem[] = [
  {
    title: "Analytics Dashboard",
    meta: "v2.4.1",
    description:
      "Real-time metrics with AI-powered insights and predictive analytics",
    icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
    status: "Live",
    tags: ["Statistics", "Reports", "AI"],
    colSpan: 2,
    hasPersistentHover: false,
  },
  {
    title: "Task Manager",
    meta: "84 completed",
    description: "Automated workflow management with priority scheduling",
    icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
    status: "Updated",
    tags: ["Productivity", "Automation"],
  },
  {
    title: "Media Library",
    meta: "12GB used",
    description: "Cloud storage with intelligent content processing",
    icon: <Video className="w-4 h-4 text-purple-500" />,
    tags: ["Storage", "CDN"],
  },
  {
    title: "Global Network",
    meta: "6 regions",
    description: "Multi-region deployment with edge computing",
    icon: <Globe className="w-4 h-4 text-sky-500" />,
    status: "Beta",
    tags: ["Infrastructure", "Edge"],
    colSpan: 2,
  },
];

interface Occupation {
  onetsoc_code: string;
  title: string;
  description: string;
}

const OccupationList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [occupationList, setOccupationList] = useState<Occupation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getOccupations = useCallback(async (): Promise<Occupation[]> => {
    try {
      const response = await fetch("/api/occupation-list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        return result as Occupation[];
      } else {
        throw new Error("Fetch failed");
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }, []);

  const getSortedOccupations = useCallback(async (): Promise<Occupation[]> => {
    const occupations = await getOccupations();
    return occupations.sort((a, b) => a.title.localeCompare(b.title));
  }, [getOccupations]);

  // Fetch occupations only once when component mounts
  useEffect(() => {
    const fetchOccupations = async () => {
      try {
        setLoading(true);
        const sortedOccupations = await getSortedOccupations();
        setOccupationList(sortedOccupations);
        setError(null);
      } catch (err) {
        setError("Failed to load occupations");
        console.error("Failed to load occupations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOccupations();
  }, [getSortedOccupations]);

  const filteredOccupations = occupationList.filter((occupation) =>
    occupation.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedOccupations = filteredOccupations.reduce<
    Record<string, BentoItem[]>
  >((acc, occupation) => {
    const firstLetter = occupation.title[0].toUpperCase();

    const occupationItem: BentoItem = {
      title: occupation.title,
      meta: "84 completed", // You might want to get this from the occupation data
      description:
        occupation.description || "Description about the occupation.",
      icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
      status: "Updated",
      tags: ["Productivity", "Automation"],
    };

    // Add colSpan property if title length is more than 18 characters
    // if (occupation.title.length > 18) {
    //   occupationItem.colSpan = 2;
    // }

    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }

    acc[firstLetter].push(occupationItem);
    return acc;
  }, {});

  return (
    <MaxWidthWrapper className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 mb-40 overflow-hidden">
      <AnimationContainer delay={0.1} className="w-full">
        <div className="flex flex-col space-y-4">
          <h1 className="text-6xl md:text-7xl font-extrabold mt-14 mb-10 text-center text-gray-900">
            Explorer
          </h1>
          <Input
            placeholder="Search occupations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        {loading && <div>Loading occupations...</div>}

        {error && <div className="text-red-500">{error}</div>}

        {!loading && !error && (
          <div className="space-y-8 my-6">
            {Object.entries(groupedOccupations).length > 0 ? (
              Object.entries(groupedOccupations).map(
                ([letter, occupationItems]) => (
                  <div key={letter} className="space-y-4 border-b">
                    <h3 className="text-lg font-semibold text-muted-foreground">
                      {letter}
                    </h3>
                    <BentoGrid items={occupationItems} />
                  </div>
                )
              )
            ) : (
              <div className="text-center py-8">
                No matching occupations found
              </div>
            )}
          </div>
        )}
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};

export default OccupationList;
