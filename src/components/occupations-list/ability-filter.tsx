import type { AbilityCategory } from "./types";
import {
  Brain,
  CheckCircleIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  Eye,
  Heart,
  Zap,
  Target,
} from "lucide-react";
import { useState } from "react";

interface AbilityFilterProps {
  onSearch: (selectedId: string | null) => void;
  setShowPlaceholder:(value: boolean) => void;
}

// Ability categories structure
export const abilityCategories: AbilityCategory[] = [
  {
    id: "cognitive",
    name: "Cognitive Abilities",
    icon: Brain,
    color: "from-primary-blue-500 to-primary-blue-600",
    description:
      "Abilities that influence the acquisition and application of knowledge in problem solving.",
    // icon:Brain,
    subAbilities: [
      {
        id: "attentiveness",
        name: "Attentiveness",
        description: "Abilities related to application of attention.",
        subsubAbilities: [
          {
            id: "selective attention",
            name: "Selective Attention",
            description:
              "The ability to concentrate on a task over a period of time without being distracted.",
            occupationIds: ["15-1252.00", "27-1024.00"],
          },
          {
            id: "time sharing",
            name: "Time Sharing",
            description:
              "The ability to shift back and forth between two or more activities or sources of information (such as speech, sounds, touch, or other sources).",
            occupationIds: ["29-1141.00", "13-2011.00"],
          },
        ],
      },
      {
        id: "idea generation and reasoning abilities",
        name: "Idea Generation and Reasoning Abilities",
        description:
          "Abilities that influence the application and manipulation of information in problem solving.",
        subsubAbilities: [
          {
            id: "category flexibility",
            name: "Category Flexibility",
            description:
              "The ability to generate or use different sets of rules for combining or grouping things in different ways.",
            occupationIds: ["15-1252.00", "27-1024.00"],
          },
          {
            id: "deductive reasoning",
            name: "Deductive Reasoning",
            description:
              "The ability to apply general rules to specific problems to produce answers that make sense.",
            occupationIds: ["25-2021.00", "13-2052.00"],
          },
          {
            id: "fluency of ideas",
            name: "Fluency of Ideas",
            description:
              "The ability to come up with a number of ideas about a topic (the number of ideas is important, not their quality, correctness, or creativity).",
            occupationIds: ["25-2021.00", "13-2052.00"],
          },
          {
            id: "inductive reasoning",
            name: "Inductive Reasoning",
            description:
              "The ability to combine pieces of information to form general rules or conclusions (includes finding a relationship among seemingly unrelated events).",
            occupationIds: ["25-2021.00", "13-2052.00"],
          },
          {
            id: "information ordering",
            name: "Information Ordering",
            description:
              "The ability to arrange things or actions in a certain order or pattern according to a specific rule or set of rules (e.g., patterns of numbers, letters, words, pictures, mathematical operations).",
            occupationIds: ["25-2021.00", "13-2052.00"],
          },
          {
            id: "originality",
            name: "Originality",
            description:
              "The ability to come up with unusual or clever ideas about a given topic or situation, or to develop creative ways to solve a problem.",
            occupationIds: ["25-2021.00", "13-2052.00"],
          },
          {
            id: "problem sensitivity",
            name: "Problem Sensitivity",
            description:
              "The ability to tell when something is wrong or is likely to go wrong. It does not involve solving the problem, only recognizing that there is a problem.",
            occupationIds: ["25-2021.00", "13-2052.00"],
          },
        ],
      },
      {
        id: "memory",
        name: "Memory",
        description: "Abilities related to the recall of available information",
        subsubAbilities: [
          {
            id: "Memorization",
            name: "Memorization",
            description:
              "The ability to remember information such as words, numbers, pictures, and procedures.",
            occupationIds: ["15-1252.00", "27-1024.00"],
          },
        ],
      },
      {
        id: "perceptual",
        name: "Perceptual Abilities",
        description:
          "Abilities related to the acquisition and organization of visual information.",
        subsubAbilities: [
          {
            id: "Flexibility of Closure",
            name: "Flexibility of Closure",
            description:
              "The ability to identify or detect a known pattern (a figure, object, word, or sound) that is hidden in other distracting material.",
            occupationIds: ["15-1252.00", "27-1024.00"],
          },
          {
            id: "Perceptual Speed",
            name: "Perceptual Speed",
            description:
              "The ability to quickly and accurately compare similarities and differences among sets of letters, numbers, objects, pictures, or patterns. The things to be compared may be presented at the same time or one after the other. This ability also includes comparing a presented object with a remembered object.",
            occupationIds: ["25-2021.00", "13-2052.00"],
          },
          {
            id: "Speed of Closure",
            name: "Speed of Closure",
            description:
              "The ability to quickly make sense of, combine, and organize information into meaningful patterns.",
            occupationIds: ["25-2021.00", "13-2052.00"],
          },
        ],
      },
      {
        id: "quantitative",
        name: "Quantitative Abilities",
        description:
          "Abilities that influence the solution of problems involving mathematical relationships.",
        subsubAbilities: [
          {
            id: "Mathematical Reasoning",
            name: "Mathematical Reasoning",
            description:
              "The ability to choose the right mathematical methods or formulas to solve a problem.",
            occupationIds: ["15-1252.00", "27-1024.00"],
          },
          {
            id: "Number Facility",
            name: "Number Facility",
            description:
              "The ability to add, subtract, multiply, or divide quickly and correctly.",
            occupationIds: ["25-2021.00", "13-2052.00"],
          },
        ],
      },
      {
        id: "spatial",
        name: "Spatial Abilities",
        description:
          "Abilities related to the manipulation and organization of spatial information.",
        subsubAbilities: [
          {
            id: "Spatial Orientation",
            name: "Spatial Orientation",
            description:
              "The ability to know your location in relation to the environment or to know where other objects are in relation to you.",
            occupationIds: ["15-1252.00", "27-1024.00"],
          },
          {
            id: "Visualization",
            name: "Visualization",
            description:
              "The ability to imagine how something will look after it is moved around or when its parts are moved or rearranged.",
            occupationIds: ["25-2021.00", "13-2052.00"],
          },
        ],
      },
      {
        id: "verbal",
        name: "Verbal Abilities",
        description:
          "Abilities that influence the acquisition and application of verbal information in problem solving.",
        subsubAbilities: [
          {
            id: "Oral Comprehension",
            name: "Oral Comprehension",
            description:
              "The ability to listen to and understand information and ideas presented through spoken words and sentences.",
            occupationIds: ["15-1252.00", "27-1024.00"],
          },
          {
            id: "Oral Expression",
            name: "Oral Expression",
            description:
              "The ability to communicate information and ideas in writing so others will understand.",
            occupationIds: ["25-2021.00", "13-2052.00"],
          },
          {
            id: "Written Comprehension",
            name: "Written Comprehension",
            description:
              "The ability to read and understand information and ideas presented in writing.",
            occupationIds: ["25-2021.00", "13-2052.00"],
          },
          {
            id: "Written Expression",
            name: "Written Expression",
            description:
              "The ability to communicate information and ideas in writing so others will understand.",
            occupationIds: ["25-2021.00", "13-2052.00"],
          },
        ],
      },
    ],
  },
  {
    id: "psychomotor",
    name: "Psychomotor Abilities",
    icon: Heart,
    color: "from-rose-500 to-rose-600",
    description:
      "Abilities that influence strength, endurance, flexibility, balance and coordination.",
    subAbilities: [
      {
        id: "control movement abilities",
        name: "Control Movement Abilities",
        description:
          "Abilities related to the control and manipulation of objects in time and space.",
        subsubAbilities: [
          {
            id: "Control Precision",
            name: "Control Precision",
            description:
              "The ability to quickly and repeatedly adjust the controls of a machine or a vehicle to exact positions.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Multilimb Coordination",
            name: "Multilimb Coordination",
            description:
              "The ability to coordinate two or more limbs (for example, two arms, two legs, or one leg and one arm) while sitting, standing, or lying down. It does not involve performing the activities while the whole body is in motion.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Rate Control",
            name: "Rate Control",
            description:
              "The ability to time your movements or the movement of a piece of equipment in anticipation of changes in the speed and/or direction of a moving object or scene.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Response Orientation",
            name: "Response Orientation",
            description:
              "The ability to choose quickly between two or more movements in response to two or more different signals (lights, sounds, pictures). It includes the speed with which the correct response is started with the hand, foot, or other body part.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
        ],
      },
      {
        id: "fine manipulative abilities",
        name: "Fine Manipulative Abilities",
        description: "Abilities related to the manipulation of objects.",
        subsubAbilities: [
          {
            id: "Arm-Hand Steadiness",
            name: "Arm-Hand Steadiness",
            description:
              "The ability to keep your hand and arm steady while moving your arm or while holding your arm and hand in one position.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Finger Dexterity",
            name: "Finger Dexterity",
            description:
              "The ability to make precisely coordinated movements of the fingers of one or both hands to grasp, manipulate, or assemble very small objects.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Manual Dexterity",
            name: "Manual Dexterity",
            description:
              "The ability to quickly move your hand, your hand together with your arm, or your two hands to grasp, manipulate, or assemble objects.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
        ],
      },
      {
        id: "reaction time and speed abilities",
        name: "Reaction Time and Speed Abilities",
        description: "Abilities related to speed of manipulation of objects.",
        subsubAbilities: [
          {
            id: "Reaction Time",
            name: "Reaction Time",
            description:
              "The ability to quickly respond (with the hand, finger, or foot) to a signal (sound, light, picture) when it appears.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Speed of Limb Movement",
            name: "Speed of Limb Movement",
            description: "The ability to quickly move the arms and legs.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Wrist-Finger Speed",
            name: "Wrist-Finger Speed",
            description:
              "The ability to make fast, simple, repeated movements of the fingers, hands, and wrists.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
        ],
      },
    ],
  },
  {
    id: "physical",
    name: "Physical Abilities",
    description:
      "Abilities that influence the capacity to manipulate and control objects.",
    icon: Zap,
    color: "from-green-500 to-green-600",
    subAbilities: [
      {
        id: "Endurance",
        name: "Endurance",
        description:
          "The ability to exert oneself physically over long periods without getting out of breath.",
        subsubAbilities: [
          {
            id: "Stamina",
            name: "Stamina",
            description:
              "The ability to exert yourself physically over long periods of time without getting winded or out of breath.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
        ],
      },
      {
        id: "Flexibility, Balance, and Coordination",
        name: "Flexibility, Balance, and Coordination",
        description:
          "Abilities related to the control of gross body movements.",
        subsubAbilities: [
          {
            id: "Dynamic Flexibility",
            name: "Dynamic Flexibility",
            description:
              "The ability to quickly and repeatedly bend, stretch, twist, or reach out with your body, arms, and/or legs.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Extent Flexibility",
            name: "Extent Flexibility",
            description:
              "The ability to bend, stretch, twist, or reach with your body, arms, and/or legs.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Gross Body Coordination",
            name: "Gross Body Coordination",
            description:
              "The ability to coordinate the movement of your arms, legs, and torso together when the whole body is in motion.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Gross Body Equilibrium",
            name: "Gross Body Equilibrium",
            description:
              "The ability to keep or regain your body balance or stay upright when in an unstable position.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
        ],
      },
      {
        id: "Physical Strength Abilities",
        name: "Physical Strength Abilities",
        description: "Abilities related to the capacity to exert force.",
        subsubAbilities: [
          {
            id: "Dynamic Strength",
            name: "Dynamic Strength",
            description:
              "The ability to exert muscle force repeatedly or continuously over time. This involves muscular endurance and resistance to muscle fatigue.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Explosive Strength",
            name: "Explosive Strength",
            description:
              "The ability to use short bursts of muscle force to propel oneself (as in jumping or sprinting), or to throw an object.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Static Strength",
            name: "Static Strength",
            description:
              "The ability to exert maximum muscle force to lift, push, pull, or carry objects.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Trunk Strength",
            name: "Trunk Strength",
            description:
              'The ability to use your abdominal and lower back muscles to support part of the body repeatedly or continuously over time without "giving out" or fatiguing.',
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
        ],
      },
    ],
  },
  {
    id: "sensory",
    name: "Sensory Abilities",
    description:
      "Abilities that influence visual, auditory and speech perception.",
    icon: Eye,
    color: "from-purple-500 to-purple-600",
    subAbilities: [
      {
        id: "Auditory and Speech Abilities",
        name: "Auditory and Speech Abilities",
        description: "Abilities related to auditory and oral input.",
        subsubAbilities: [
          {
            id: "Auditory Attention",
            name: "Auditory Attention",
            description:
              "The ability to focus on a single source of sound in the presence of other distracting sounds.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Hearing Sensitivity",
            name: "Hearing Sensitivity",
            description:
              "The ability to detect or tell the differences between sounds that vary in pitch and loudness.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Sound Localization",
            name: "Sound Localization",
            description:
              "The ability to tell the direction from which a sound originated.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Speech Clarity",
            name: "Speech Clarity",
            description:
              "The ability to speak clearly so others can understand you.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Speech Recognition",
            name: "Speech Recognition",
            description:
              "The ability to identify and understand the speech of another person.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
        ],
      },
      {
        id: "Visual Abilities",
        name: "Visual Abilities",
        description: "Abilities related to visual sensory input.",
        subsubAbilities: [
          {
            id: "Depth Perception",
            name: "Depth Perception",
            description:
              "The ability to judge which of several objects is closer or farther away from you, or to judge the distance between you and an object.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Far Vision",
            name: "Far Vision",
            description: "The ability to see details at a distance.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Glare Sensitivity",
            name: "Glare Sensitivity",
            description:
              "The ability to see objects in the presence of a glare or bright lighting.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Near Vision",
            name: "Near Vision",
            description:
              "The ability to see details at close range (within a few feet of the observer).",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Night Vision",
            name: "Night Vision",
            description: "The ability to see under low-light conditions.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Peripheral Vision",
            name: "Peripheral Vision",
            description:
              "The ability to see objects or movement of objects to one's side when the eyes are looking ahead.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
          {
            id: "Visual Color Discrimination",
            name: "Visual Color Discrimination",
            description:
              "The ability to match or detect differences between colors, including shades of color and brightness.",
            occupationIds: ["29-1141.00", "47-2111.00"],
          },
        ],
      },
    ],
  },
];

export function AbilityFilter({ onSearch ,setShowPlaceholder}: AbilityFilterProps) {
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
            1️⃣ Choose your primary ability
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
              2️⃣ Select your secondary ability
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
              3️⃣ Choose your specific skill
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
