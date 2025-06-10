"use client";

import {
  ChevronDownIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  Workflow,
  BookOpenCheck,
} from "lucide-react";
import type { SkillsCategory } from "./types";
import { useState } from "react";

interface SkillsFilterProps {
  onSearch: (selectedId: string | null) => void;
  setShowPlaceholder:(value: boolean) => void;
}
// Skills categories structure
export const skillCategories: SkillsCategory[] = [
  {
    id: "Content",
    name: "Content",
    icon: BookOpenCheck,
    color: "from-indigo-400 to-indigo-600",
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
    icon: Workflow,
    color: "from-amber-400 to-amber-600",
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

export function SkillsFilter({ onSearch ,setShowPlaceholder}: SkillsFilterProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [expandedSteps, setExpandedSteps] = useState({
    step1: true,
    step2: false,
  });

  const handleSkillSelect = (id: string) => {
    const newActiveKnowledge = activeSkill === id ? null : id;
    setActiveSkill(newActiveKnowledge);
    setSelected(null);
    setShowPlaceholder(true);

    if (newActiveKnowledge) {
      setExpandedSteps((prev) => ({
        ...prev,
        step1: false,
        step2: true,
      }));
    } else {
      setExpandedSteps((prev) => ({ ...prev, step2: false }));
    }
  };

  const handleSubSkillSelect = (id: string) => {
    const newSelected = selected === id ? null : id;
    if (newSelected) {
      setSelected(newSelected);
      handleSearch(newSelected);
      setExpandedSteps((prev) => ({ ...prev, step2: false }));
    }
  };

  const handleSearch = (id: string) => {
    onSearch(id);
    setShowPlaceholder(false);
  };

  const toggleStep = (step: "step1" | "step2") => {
    setExpandedSteps((prev) => ({
      ...prev,
      [step]: !prev[step],
    }));
  };

  const selectedSkillData = skillCategories.find((k) => k.id === activeSkill);
  const selectedData = selectedSkillData?.subSkills.find(
    (s) => s.id === selected
  );

  return (
    <div className="max-w-6xl mx-auto pt-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-medium text-primary-green-600 mb-2">
          Browse by Skills
        </h1>
        <p className="text-gray-600 text-sm">
          Select your strongest Skill to find matching career opportunities
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-start mb-4">
        <div className="flex items-center justify-start">
          <div
            className={`flex items-center ${
              activeSkill ? "text-primary-blue-600" : "text-gray-400"
            }`}
          >
            <span className="text-sm font-medium md:text-base ">Skill</span>
          </div>
          <ChevronRightIcon className="text-gray-400" size={20} />
          <div
            className={`flex items-center ${
              selected ? "text-primary-blue-600" : "text-gray-400"
            }`}
          >
            <span className="font-medium text-sm md:text-base ">Sub-Skill</span>
          </div>
        </div>
      </div>

      {/* Step 1: Knowledges */}
      <div
        className={`mb-4 md:mb-6 border-1 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border-gray-200 overflow-hidden bg-blue-50/50`}
      >
        <button
          onClick={() => toggleStep("step1")}
          className={`w-full flex items-center justify-between p-2 md:p-4 text-left transition-all duration-200 
            bg-gradient-to-r from-primary-blue-50 to-primary-green-50   hover:from-primary-blue-100 hover:to-primary-green-100`}
        >
          <h2 className="md:text-lg text-base font-semibold text-primary-blue-800 ">
            1️⃣ Choose your primary skill
          </h2>
          <div
            className={`transition-transform duration-200 ${
              expandedSteps.step1 ? "rotate-180" : "rotate-0"
            }`}
          >
            <ChevronDownIcon className="text-gray-500" size={20} />
          </div>
        </button>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            expandedSteps.step1
              ? "max-h-[2000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillCategories.map((skill) => {
                const Icon = skill.icon;
                const isSelected = activeSkill === skill.id;

                return (
                  <button
                    key={skill.id}
                    onClick={() => handleSkillSelect(skill.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-lg ${
                      isSelected
                        ? "border-primary-blue-500 bg-primary-blue-50 shadow-md transform scale-[1.01]"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-full bg-gradient-to-br ${skill.color} text-white`}
                      >
                        <Icon size={24} className="flex-shrink-0" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {skill.name}
                        </h3>
                        <p className="text-gray-600 text-xs">
                          {skill.description}
                        </p>
                      </div>
                      {isSelected && (
                        <CheckCircleIcon
                          className="text-primary-blue-500 absolute top-2 right-2"
                          size={20}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Step 2: Skills */}
      {selectedSkillData && (
        <div
          className={`mb-4 md:mb-6 border-1 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border-gray-200 overflow-hidden bg-blue-50/50`}
        >
          <button
            onClick={() => toggleStep("step2")}
            className={`w-full flex items-center justify-between p-2 md:p-4 text-left transition-all duration-200 bg-gradient-to-r
          from-primary-blue-50 to-primary-green-50   hover:from-primary-blue-100 hover:to-primary-green-100`}
          >
            <h2 className="md:text-lg text-base font-semibold text-primary-blue-800">
              2️⃣ Select your specific skill
            </h2>
            <div
              className={`transition-transform duration-200 ${
                expandedSteps.step2 ? "rotate-180" : "rotate-0"
              }`}
            >
              <ChevronDownIcon className="text-gray-500" size={20} />
            </div>
          </button>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              expandedSteps.step2
                ? "max-h-[2000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {selectedSkillData.subSkills.map((ss) => {
                  const isSelected = selected === ss.id;

                  return (
                    <button
                      key={ss.id}
                      onClick={() => handleSubSkillSelect(ss.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-lg ${
                        isSelected
                          ? "border-primary-green-500 bg-primary-green-50 shadow-md transform scale-[1.01]"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {ss.name}
                        </h3>
                        <p className="text-gray-600 text-xs">
                          {ss.description}
                        </p>
                        {isSelected && (
                          <CheckCircleIcon
                            className="text-green-500 absolute top-2 right-2"
                            size={18}
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
