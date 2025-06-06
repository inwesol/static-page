"use client";

import {
  ChevronDownIcon,
  FolderClosedIcon,
  FolderOpenIcon,
  ChevronRightIcon,
  InfoIcon,
} from "lucide-react";
import type { SkillsCategory } from "./types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useRef, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface SkillsFilterProps {
  onSearch: (selectedId: string | null) => void;
}
// Skills categories structure
export const skillCategories: SkillsCategory[] = [
  {
    id: "Content",
    name: "Content",
    description:
      "Background structures needed to work with and acquire more specific skills in a variety of different domains.",
    subSkills: [
      {
        id: "Active Listening",
        name: "Active Listening",
        description:
          "Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
        occupationIds: ["15-1252.00", "27-1024.00"],
      },
      {
        id: "Mathematics",
        name: "Mathematics",
        description: "Using mathematics to solve problems.",
        occupationIds: ["15-1252.00", "15-1241.00"],
      },
      {
        id: "Reading Comprehension",
        name: "Reading Comprehension",
        description:
          "Understanding written sentences and paragraphs in work-related documents.",
        occupationIds: ["25-1099.00", "23-1011.00"],
      },
      {
        id: "Science",
        name: "Science",
        description: "Using scientific rules and methods to solve problems.",
        occupationIds: ["19-1042.00", "19-2031.00"],
      },
      {
        id: "Speaking",
        name: "Speaking",
        description: "Talking to others to convey information effectively.",
        occupationIds: ["11-1021.00", "41-2031.00"],
      },
      {
        id: "Writing",
        name: "Writing",
        description:
          "Communicating effectively in writing as appropriate for the needs of the audience.",
        occupationIds: ["27-3043.05", "15-1252.00"],
      },
    ],
  },
  {
    id: "Process",
    name: "Process",
    description:
      "Procedures that contribute to the more rapid acquisition of knowledge and skill across a variety of domains.",
    subSkills: [
      {
        id: "Active Learning",
        name: "Active Learning",
        description:
          "Understanding the implications of new information for both current and future problem-solving and decision-making.",
        occupationIds: ["11-9039.00", "25-9031.00"],
      },
      {
        id: "Critical Thinking",
        name: "Critical Thinking",
        description:
          "Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
        occupationIds: ["13-1111.00", "15-2041.00"],
      },
      {
        id: "Learning Strategies",
        name: "Learning Strategies",
        description:
          "Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things.",
        occupationIds: ["25-9021.00", "21-1012.00"],
      },
      {
        id: "Monitoring",
        name: "Monitoring",
        description:
          "Monitoring/Assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action.",
        occupationIds: ["43-1011.00", "29-1141.00"],
      },
    ],
  },
];

export function SkillsFilter({ onSearch }: SkillsFilterProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(true);

  // to scroll the selected Skill into view
  const skillRef = useRef<HTMLDivElement>(null);
  const subSkillRef = useRef<HTMLSpanElement>(null);

  // Scroll the selected crumb into view when selection changes
  useEffect(() => {
    if (selected && subSkillRef.current) {
      subSkillRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    } else if (activeSkill && skillRef.current) {
      skillRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeSkill, selected]);

  const handleSkillSelect = (id: string) => {
    // handles selection and sets to null if we click on the same button
    setActiveSkill((prev) => (prev === id ? null : id));
    // choosing any ability results in disselection of other sub and subsubabilities
    setSelected(null);
  };

  const handleSubSkillSelect = (id: string) => {
      setSelected((prev) => (prev === id ? null : id));
  };

  const handleSearch = () => {
    onSearch(selected);
  };

  useEffect(() => {
    setCollapsed(false);
    setActiveSkill(skillCategories[0].id);
    setSelected(skillCategories[0].subSkills[0].id);
    console.log(skillCategories[0].subSkills[0].id);
    setTimeout(() => {
      onSearch(skillCategories[0].subSkills[0].id);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto rounded-2xl bg-white overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
      {/* Collapsible Header */}
      <button
        className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-[#F8FFF9] via-[#F2F9FF] to-[#F8FFF9] transition-all duration-300 hover:from-[#F0FFF2] hover:via-[#E8F6FF] hover:to-[#F0FFF2]"
        onClick={() => setCollapsed(!collapsed)}
        aria-expanded={!collapsed}
        aria-controls="skills-collapsible-content"
      >
        <div className="flex items-center gap-1 md:gap-3 flex-1 min-w-0">
          <div className="relative w-6 h-6 flex">
            <FolderClosedIcon
              className={`
      absolute inset-0 w-4 h-4 text-primary-green-600
      transition-all duration-300 self-center md:w-5 md:h-5
      ${collapsed ? "opacity-100 scale-100" : "opacity-0 scale-90"}
    `}
              aria-hidden={!collapsed}
            />
            <FolderOpenIcon
              className={`
      absolute inset-0 w-4 h-4 text-primary-green-600
      transition-all duration-300 self-center md:w-5 md:h-5
      ${collapsed ? "opacity-0 scale-90" : "opacity-100 scale-100"}
    `}
              aria-hidden={collapsed}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="w-full overflow-x-auto scrollbar-hide text-left">
              {activeSkill ? (
                <Breadcrumb>
                  <ol className="flex items-center flex-nowrap list-none p-0 m-0">
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        asChild
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected(null);
                        }}
                      >
                        <div
                          className="text-primary-green-700 font-medium hover:underline whitespace-nowrap hover:text-primary-green-800 text-sm"
                          ref={skillRef}
                        >
                          {
                            skillCategories.find((a) => a.id === activeSkill)
                              ?.name
                          }
                        </div>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {selected && (
                      <>
                        <BreadcrumbSeparator className="mx-1 text-gray-400">
                          <ChevronRightIcon className="w-4 h-4" />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                          <span
                            className="text-purple-700 font-medium whitespace-nowrap text-sm"
                            ref={subSkillRef}
                          >
                            {
                              skillCategories
                                .find((a) => a.id === activeSkill)
                                ?.subSkills.find((ssa) => ssa.id === selected)
                                ?.name
                            }
                          </span>
                        </BreadcrumbItem>
                      </>
                    )}
                  </ol>
                </Breadcrumb>
              ) : (
                <span className="text-lg font-semibold bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text text-transparent">
                  Select Skills
                </span>
              )}
            </div>
          </div>
        </div>
        <ChevronDownIcon
          className={`text-primary-green-600 text-base transition-all w-4 h-4
            ${collapsed ? "rotate-0" : "rotate-180"} duration-300`}
        />
      </button>

      {/* Collapsible Content */}
      <div
        id="skills-collapsible-content"
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          collapsed ? "max-h-0" : "max-h-[800px]"
        }`}
      >
        {/* Skills Row */}
        <div className="px-6 py-6 relative bg-primary-green-50">
          <div className="absolute right-5 top-2">
            <Sheet>
              <SheetTrigger asChild>
                <InfoIcon
                  className="text-primary-green-400 absolute cursor-pointer hover:text-primary-green-500 transition-colors"
                  width="16"
                  height="16"
                />
              </SheetTrigger>
              <SheetContent className="bg-gradient-to-r from-primary-green-200 to-primary-green-50 sm:w-96 w-full">
                <SheetHeader>
                  <SheetTitle className="text-primary-green-600 text-xl font-medium tracking-wide">
                    {"Skills".toUpperCase()}
                  </SheetTitle>
                  <SheetDescription>
                    <p className="text-gray-700 text-sm">
                      Select the skill that best suits for you
                    </p>
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col justify-between gap-4 mt-4">
                  {skillCategories.map((skill) => (
                    <div
                      className="rounded-xl shadow-sm hover:shadow-md border border-gray-200 bg-white p-2"
                      key={skill.id}
                    >
                      <h1 className="text-primary-green-600">{skill.name}</h1>
                      <p className="text-gray-600 text-sm">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {skillCategories.map((skill) => (
              <button
                key={skill.id}
                onClick={() => handleSkillSelect(skill.id)}
                className={`inline-flex items-center px-2 py-1 rounded-full border-2 font-medium transition-all text-sm sm:text-base
              ${
                activeSkill === skill.id
                  ? "bg-primary-green-600 text-white border-primary-green-600"
                  : "bg-white text-primary-green-700 border-primary-green-200 hover:bg-primary-green-100"
              }`}
                aria-pressed={activeSkill === skill.id}
                style={{ minWidth: "max-content" }}
              >
                {skill.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sub-Skills Row (Capsules, horizontally scrollable) */}
        {activeSkill && (
          <div className="px-6 py-6 border-t border-primary-blue-100 transition-all duration-500 relative bg-purple-50">
            <div className="absolute right-5 top-2">
              <Sheet>
                <SheetTrigger asChild>
                  <InfoIcon
                    className="text-purple-400 absolute cursor-pointer hover:text-purple-500 transition-colors"
                    width="16"
                    height="16"
                  />
                </SheetTrigger>
                <SheetContent className="bg-gradient-to-r from-purple-200 to-purple-50 sm:w-96 overflow-y-auto scrollbar-hide w-full">
                  <SheetHeader>
                    <SheetTitle className="text-purple-600 text-xl font-medium tracking-wide">
                      {activeSkill.toUpperCase()}
                    </SheetTitle>
                    <SheetDescription>
                      <p className="text-gray-700 text-sm">
                        {
                          skillCategories.find(
                            (skill) => activeSkill === skill.id
                          )?.description
                        }
                      </p>
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col justify-between gap-4 mt-4">
                    {skillCategories
                      .find((skill) => skill.id === activeSkill)
                      ?.subSkills?.map((ssa) => (
                        <div
                          className="rounded-xl shadow-sm hover:shadow-md border border-gray-200 bg-white p-2"
                          key={ssa.id}
                        >
                          <h1 className="text-purple-600">{ssa.name}</h1>
                          <p className="text-gray-600 text-sm">
                            {ssa.description}
                          </p>
                        </div>
                      ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {skillCategories
                .find((a) => a.id === activeSkill)
                ?.subSkills?.map((sub) => (
                  <div
                    key={sub.id}
                    role="button"
                    tabIndex={0}
                    aria-pressed={selected === sub.id}
                    onClick={() => handleSubSkillSelect(sub.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        handleSubSkillSelect(sub.id);
                    }}
                    className={`inline-flex items-center px-2 py-1 rounded-full border-2 font-medium cursor-pointer transition-all text-sm sm:text-base
          ${
            selected === sub.id
              ? "bg-purple-600 text-white border-purple-600"
              : "bg-white text-purple-700 border-purple-200 hover:bg-purple-100"
          }`}
                    style={{ minWidth: "max-content" }}
                  >
                    {sub.name}
                  </div>
                ))}
            </div>
          </div>
        )}
        {/* Find button */}
        {selected && (
          <div className="px-6 py-6 border-t border-purple-100 flex justify-end">
            <button
              className="px-4 py-2 text-white bg-primary-green-600 hover:bg-primary-green-700 rounded-xl text-sm font-medium transition-all shadow-sm hover:shadow-md active:scale-95"
              onClick={handleSearch}
            >
              Find Occupations
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
