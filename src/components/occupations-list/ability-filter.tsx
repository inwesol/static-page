import { abilityCategories } from "./ability-category-constant";
import {
  CheckCircleIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "lucide-react";
import { useState } from "react";

interface AbilityFilterProps {
  onSearch: (selectedId: string | null) => void;
  setShowPlaceholder: (value: boolean) => void;
}

export function AbilityFilter({
  onSearch,
  setShowPlaceholder,
}: AbilityFilterProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeAbility, setActiveAbility] = useState<string | null>(null);
  const [activeSubAbility, setActiveSubAbility] = useState<string | null>(null);

  // State for controlling which steps are expanded
  const [expandedSteps, setExpandedSteps] = useState({
    step1: true,
    step2: false,
    step3: false,
  });

  const handleAbilitySelect = (id: string) => {
    // handles selection and sets to null if we click on the same button
    const newActiveAbility = activeAbility === id ? null : id;
    setActiveAbility(newActiveAbility);

    // choosing any ability results in disselection of other sub and subsubabilities
    setActiveSubAbility(null);
    setSelected(null);
    setShowPlaceholder(true);

    // Auto-expand step 2 when an ability is selected, collapse step 3
    if (newActiveAbility) {
      setExpandedSteps((prev) => ({
        ...prev,
        step1: false,
        step2: true,
        step3: false,
      }));
    } else {
      setExpandedSteps((prev) => ({ ...prev, step2: false, step3: false }));
    }
  };

  const handleSubAbilitySelect = (id: string) => {
    // handles selection and sets to null if we click on the same button
    const newActiveSubAbility = activeSubAbility === id ? null : id;
    setActiveSubAbility(newActiveSubAbility);
    setSelected(null);
    setShowPlaceholder(true);

    // Auto-expand step 3 when a sub-ability is selected
    if (newActiveSubAbility) {
      setExpandedSteps((prev) => ({ ...prev, step3: true, step2: false }));
    } else {
      setExpandedSteps((prev) => ({ ...prev, step3: false }));
    }
  };

  const handleSubsubAbilitySelect = (id: string) => {
    const newSelected = selected === id ? null : id;
    if (newSelected) {
      setSelected(newSelected);
      handleSearch(newSelected);
      setExpandedSteps((prev) => ({ ...prev, step3: false }));
    }
  };

  const handleSearch = (id: string) => {
    onSearch(id);
    setShowPlaceholder(false);
  };

  const toggleStep = (step: "step1" | "step2" | "step3") => {
    setExpandedSteps((prev) => ({
      ...prev,
      [step]: !prev[step],
    }));
  };

  const selectedAbilityData = abilityCategories.find(
    (a) => a.id === activeAbility
  );
  const selectedSubAbilityData = selectedAbilityData?.subAbilities.find(
    (sa) => sa.id === activeSubAbility
  );
  const selectedData = selectedSubAbilityData?.subsubAbilities.find(
    (s) => s.id === selected
  );

  return (
    <div className="max-w-6xl mx-auto pt-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-medium text-primary-green-600 mb-2">
          Browse by Abilities
        </h1>
        <p className="text-gray-600 text-sm">
          Select your strongest abilities to find matching career opportunities
        </p>
      </div>
      {/* Progress Steps */}
      <div className="flex items-center justify-start mb-4">
        <div className="flex items-center justify-start">
          <div
            className={`flex items-center ${
              activeAbility ? "text-primary-blue-600" : "text-gray-400"
            }`}
          >
            <span className="text-sm font-medium md:text-base ">Ability</span>
          </div>
          <ChevronRightIcon className="text-gray-400" size={20} />
          <div
            className={`flex items-center ${
              activeSubAbility ? "text-primary-blue-600" : "text-gray-400"
            }`}
          >
            <span className="ml-2 font-medium text-sm md:text-base ">
              Category
            </span>
          </div>
          <ChevronRightIcon className="text-gray-400" size={20} />
          <div
            className={`flex items-center ${
              selected ? "text-primary-blue-600" : "text-gray-400"
            }`}
          >
            <span className="ml-2 font-medium text-sm md:text-base ">
              Skill
            </span>
          </div>
        </div>
      </div>
      {/* Step 1: Abilities */}
      <div
        className={`mb-4 md:mb-6 border rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border-gray-200 overflow-hidden bg-blue-50/50`}
      >
        <button
          onClick={() => toggleStep("step1")}
          className={`w-full flex items-center justify-between p-2 md:p-4 text-left transition-all duration-200 bg-gradient-to-r
          from-primary-blue-50 to-primary-green-50   hover:from-primary-blue-100 hover:to-primary-green-100`}
        >
          <h2 className="md:text-lg text-base font-semibold text-primary-blue-800 flex items-center gap-1">
            1️⃣ Choose your Primary Ability
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
          className={`transition-all duration-300 ease-in-out overflow-hidden relative ${
            expandedSteps.step1
              ? "max-h-[2000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {abilityCategories.map((ability) => {
                const Icon = ability.icon;
                const isSelected = activeAbility === ability.id;

                return (
                  <button
                    key={ability.id}
                    onClick={() => handleAbilitySelect(ability.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-lg ${
                      isSelected
                        ? "border-primary-blue-500 bg-primary-blue-50 shadow-md transform scale-[1.01]"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-full bg-gradient-to-br ${ability.color} text-white`}
                      >
                        <Icon size={24} className="flex-shrink-0" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {ability.name}
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm">
                          {ability.description}
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
      {/* Step 2: Sub-abilities */}
      {selectedAbilityData && (
        <div
          className={`mb-4 md:mb-6 border-1 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border-gray-200 overflow-hidden bg-blue-50/50`}
        >
          <button
            onClick={() => toggleStep("step2")}
            className={`w-full flex items-center justify-between p-2 md:p-4 text-left transition-all duration-200 bg-gradient-to-r
          from-primary-blue-50 to-primary-green-50   hover:from-primary-blue-100 hover:to-primary-green-100`}
          >
            <h2 className="md:text-lg text-base font-semibold text-primary-blue-800">
              {`2️⃣ Choose from ${selectedAbilityData.name}`}
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
            className={`transition-all duration-300 ease-in-out overflow-hidden relative ${
              expandedSteps.step2
                ? "max-h-[2000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedAbilityData.subAbilities.map((subAbility) => {
                  const isSelected = activeSubAbility === subAbility.id;

                  return (
                    <button
                      key={subAbility.id}
                      onClick={() => handleSubAbilitySelect(subAbility.id)}
                      className={`p-4  rounded-xl border-2 transition-all duration-200 text-left hover:shadow-lg ${
                        isSelected
                          ? "border-primary-blue-500 bg-primary-blue-50 shadow-md transform scale-[1.01]"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {subAbility.name}
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm">
                          {subAbility.description}
                        </p>
                        {isSelected && (
                          <CheckCircleIcon
                            className="text-primary-blue-500 absolute top-2 right-2"
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
      {/* Step 3: Skills */}
      {selectedSubAbilityData && (
        <div
          className={`mb-4 md:mb-6 border-1 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border-gray-200 overflow-hidden bg-blue-50/50`}
        >
          <button
            onClick={() => toggleStep("step3")}
            className={`w-full flex items-center justify-between p-2 md:p-4 text-left transition-all duration-200 bg-gradient-to-r
          from-primary-blue-50 to-primary-green-50   hover:from-primary-blue-100 hover:to-primary-green-100`}
          >
            <h2 className="md:text-lg text-base font-semibold text-primary-blue-800">
              {`3️⃣ Choose from ${selectedSubAbilityData.name}`}
            </h2>
            <div
              className={`transition-transform duration-200 ${
                expandedSteps.step3 ? "rotate-180" : "rotate-0"
              }`}
            >
              <ChevronDownIcon className="text-gray-500" size={20} />
            </div>
          </button>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden relative ${
              expandedSteps.step3
                ? "max-h-[2000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {selectedSubAbilityData.subsubAbilities.map((ssa) => {
                  const isSelected = selected === ssa.id;

                  return (
                    <button
                      key={ssa.id}
                      onClick={() => handleSubsubAbilitySelect(ssa.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-lg ${
                        isSelected
                          ? "border-primary-green-500 bg-primary-green-50 shadow-md transform scale-[1.01]"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {ssa.name}
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm">
                          {ssa.description}
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
      {/* placeholder content */}
    </div>
  );
}
