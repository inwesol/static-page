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
import { useState } from "react";
import { title } from "process";

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

const occupations = [
  "Accountant",
  "Actor",
  "Architect",
  "Artist",
  "Baker",
  "Biologist",
  "Chef",
  "Data Scientist",
  "Dentist",
  "Designer",
  "Developer",
  "Doctor",
  "Editor",
  "Engineer",
  "Farmer",
  "Financial Analyst",
  "Graphic Designer",
  "HR Manager",
  "Interior Designer",
  "Journalist",
  "Lawyer",
  "Librarian",
  "Marketing Manager",
  "Mechanic",
  "Nurse",
  "Optometrist",
  "Pharmacist",
  "Photographer",
  "Pilot",
  "Police Officer",
  "Professor",
  "Psychologist",
  "Real Estate Agent",
  "Research Scientist",
  "Sales Manager",
  "Social Worker",
  "Software Engineer",
  "Teacher",
  "Therapist",
  "UX Designer",
  "Veterinarian",
  "Web Developer",
  "Writer",
  "Yoga Instructor",
  "Zoologist",
].sort();

const Waitlist = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOccupations = occupations.filter((occupation) =>
    occupation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedOccupations = filteredOccupations.reduce((acc, occupation) => {
    const firstLetter = occupation[0].toUpperCase();
    const occupationSample = {
      title: "Task Manager",
      meta: "84 completed",
      description: "Automated workflow management with priority scheduling",
      icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
      status: "Updated",
      tags: ["Productivity", "Automation"],
    };

    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    occupationSample.title = occupation;
    // acc[firstLetter].push(occupation);
    acc[firstLetter].push(occupationSample);
    return acc;
  }, {} as Record<string, BentoItem[]>);

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

        <div className="space-y-8 my-6">
          {Object.entries(groupedOccupations).map(
            ([letter, occupationSample]) => (
              <div key={letter} className="space-y-4 border-b">
                <h3 className="text-lg font-semibold text-muted-foreground">
                  {letter}
                </h3>
                <BentoGrid items={occupationSample} />

                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
                {occupations.map((occupation) => (
                  <div
                    key={occupation}
                    className="p-4 rounded-lg border bg-card hover:bg-accent/50 cursor-pointer transition-colors"
                  >
                    {occupation}
                  </div>
                ))}
              </div> */}
              </div>
            )
          )}
        </div>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};

export default Waitlist;
