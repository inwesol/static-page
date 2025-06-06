"use client";

import {
  ChevronDownIcon,
  FolderClosedIcon,
  FolderOpenIcon,
  ChevronRightIcon,
  InfoIcon,
} from "lucide-react";
import type { AbilityCategory } from "./types";
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
interface AbilityAccordionProps {
  onSearch: (selectedId: string | null) => void;
}
// Ability categories structure
export const abilityCategories: AbilityCategory[] = [
  {
    id: "cognitive",
    name: "Cognitive Abilities",
    description:
      "Abilities that influence the acquisition and application of knowledge in problem solving.",
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

// export function AbilityAccordion({ onSearch }: AbilityAccordionProps) {
//   // Single selection state (stores selected subsubAbility ID)
//   const [selected, setSelected] = useState<string | null>(null);
//   const [activeAbility, setActiveAbility] = useState(abilityCategories[0]?.id);
//   const [activeSubAbility, setActiveSubAbility] = useState(
//     abilityCategories[0]?.subAbilities[0]?.id
//   );
//   // Collapsed state for mobile
//   const [collapsed, setCollapsed] = useState(true);

//   // For animation
//   // const contentRef = useRef<HTMLDivElement>(null);
//   // const [contentHeight, setContentHeight] = useState(0);

//   // useEffect(() => {
//   //   if (!collapsed && contentRef.current) {
//   //     setContentHeight(contentRef.current.scrollHeight);
//   //   } else {
//   //     setContentHeight(0);
//   //   }
//   // }, [collapsed, activeAbility, activeSubAbility]);

//   const currentAbility = abilityCategories.find((a) => a.id === activeAbility);
//   const currentSubAbilities = currentAbility?.subAbilities || [];
//   const currentSubAbility =
//     currentSubAbilities.find((sa) => sa.id === activeSubAbility) ||
//     currentSubAbilities[0];
//   const currentSubsubAbilities = currentSubAbility?.subsubAbilities || [];

//   // Sync selection changes with parent
//   useEffect(() => {
//     onSearch(selected);
//   }, [selected, onSearch]);

//   // Handle radio button selection
//   const handleRadioChange = (id: string) => {
//     setSelected((prev) => (prev === id ? null : id));
//   };

//   // Get selection details for display
//   const getSelectedDetails = () => {
//     if (!selected) return null;

//     for (const ability of abilityCategories) {
//       for (const sub of ability.subAbilities) {
//         const subsub = sub.subsubAbilities.find((ssa) => ssa.id === selected);
//         if (subsub) return { ability, sub, subsub };
//       }
//     }
//     return null;
//   };

//   return (
//     <div className="max-w-6xl mx-auto">
//       {/* new mobile header */}
//       <div className="md:hidden mb-4">
//         <button
//           className="w-full flex items-center justify-between gap-2 px-5 py-4 rounded-xl bg-gradient-to-r from-primary-green-50 to-primary-green-100 shadow transition hover:shadow-md active:scale-[0.98] border border-primary-green-100"
//           onClick={() => setCollapsed((c) => !c)}
//           aria-expanded={!collapsed}
//           style={{ minHeight: 56 }}
//         >
//           <div className="flex items-center gap-3">
//             {/*an icon */}
//             {collapsed ? (
//               <span className="text-2xl text-primary-green-600">
//                 <FolderClosedIcon />
//               </span>
//             ) : (
//               <span className="text-2xl text-primary-green-600">
//                 <FolderOpenIcon />
//               </span>
//             )}
//             <span className="text-base font-semibold text-primary-green-600 tracking-wide">
//               Select Ability
//             </span>
//           </div>
//           <span
//             className={`transition-transform duration-200 ${
//               !collapsed ? "rotate-180" : ""
//             }`}
//           >
//             <ChevronDownIcon size={24} className="text-primary-green-600" />
//           </span>
//         </button>
//       </div>

//       {/* Animated collapse/expand */}
//       {/* <div
//         ref={contentRef}
//         style={{
//           maxHeight: collapsed ? 0 : contentHeight,
//           opacity: collapsed ? 0 : 1,
//           transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s",
//           overflow: "hidden",
//         }}
//         className="md:block"
//       > */}
//       {/* Main content */}
//       <div className={`${collapsed ? "hidden" : ""} md:block`}>
//         {/* Ability categories */}
//         <nav
//           className="flex overflow-x-auto gap-2 mb-4 scrollbar-hide"
//           aria-label="Ability categories"
//         >
//           {abilityCategories.map((ability) => (
//             <button
//               key={ability.id}
//               className={`whitespace-nowrap sm:px-4 sm:py-2 rounded-full font-medium transition border px-2 py-1
//                 ${
//                   activeAbility === ability.id
//                     ? "bg-primary-green-600 text-white border-primary-green-700 shadow"
//                     : "bg-white text-primary-green-700 border-gray-200 hover:bg-primary-green-50"
//                 }`}
//               onClick={() => {
//                 setActiveAbility(ability.id);
//                 setActiveSubAbility(ability.subAbilities?.[0]?.id || "");
//               }}
//               aria-current={activeAbility === ability.id ? "page" : undefined}
//             >
//               {ability.name}
//             </button>
//           ))}
//         </nav>

//         {/* Sub-abilities */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//           {currentSubAbilities.map((sub) => (
//             <button
//               key={sub.id}
//               className={`w-full text-left rounded-xl border px-4 py-4 transition shadow-sm
//                 ${
//                   activeSubAbility === sub.id
//                     ? "border-primary-blue-600 bg-primary-blue-50 shadow"
//                     : "border-gray-200 bg-white hover:bg-primary-blue-50"
//                 }`}
//               onClick={() => setActiveSubAbility(sub.id)}
//               aria-pressed={activeSubAbility === sub.id}
//             >
//               <div className="font-semibold text-primary-blue-700">
//                 {sub.name}
//               </div>
//               {sub.description && (
//                 <div className="text-xs text-gray-500 mt-1">
//                   {sub.description}
//                 </div>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Subsub-abilities */}
//         {currentSubsubAbilities.length > 0 && (
//           <div className="mb-6">
//             <h2 className="text-lg font-semibold text-primary-green-700 mb-2">
//               Select an ability:
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
//               {currentSubsubAbilities.map((subsub) => (
//                 <label
//                   key={subsub.id}
//                   className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer border transition
//                     ${
//                       selected === subsub.id
//                         ? "border-primary-green-600 bg-primary-green-50"
//                         : "border-gray-200 bg-white hover:bg-primary-green-50"
//                     }`}
//                 >
//                   <input
//                     type="radio"
//                     name="ability-selection"
//                     checked={selected === subsub.id}
//                     onChange={() => handleRadioChange(subsub.id)}
//                     className="h-4 w-4 text-primary-green-600 focus:ring-primary-green-500"
//                     aria-label={`Select ${subsub.name}`}
//                   />
//                   <div className="flex flex-col">
//                     <span className="font-medium text-primary-blue-800">
//                       {subsub.name}
//                     </span>
//                     {subsub.description && (
//                       <span className="text-xs text-gray-500">
//                         {subsub.description}
//                       </span>
//                     )}
//                   </div>
//                 </label>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       {/* </div> */}
//       {/* Selection display */}
//       {selected && (
//         <div className="mt-6 p-4 bg-primary-green-50 rounded-lg">
//           <h3 className="font-semibold text-primary-green-700 mb-2">
//             Selected Ability:
//           </h3>
//           <div className="text-sm text-gray-700">
//             {getSelectedDetails() ? (
//               <>
//                 <span className="font-medium">
//                   {getSelectedDetails()!.ability.name}
//                 </span>
//                 {" → "}
//                 <span className="font-medium">
//                   {getSelectedDetails()!.sub.name}
//                 </span>
//                 {" → "}
//                 <span className="text-primary-blue-700">
//                   {getSelectedDetails()!.subsub.name}
//                 </span>
//               </>
//             ) : (
//               "No selection made"
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
export function AbilityFilter({ onSearch }: AbilityAccordionProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeAbility, setActiveAbility] = useState<string | null>(null);
  const [activeSubAbility, setActiveSubAbility] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(true);

  // to scroll the selected ability into view
  const abilityRef = useRef<HTMLDivElement>(null);
  const subAbilityRef = useRef<HTMLDivElement>(null);
  const subsubAbilityRef = useRef<HTMLSpanElement>(null);

  // Scroll the selected crumb into view when selection changes
  useEffect(() => {
    if (selected && subsubAbilityRef.current) {
      subsubAbilityRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    } else if (activeSubAbility && subAbilityRef.current) {
      subAbilityRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    } else if (activeAbility && abilityRef.current) {
      abilityRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeAbility, activeSubAbility, selected]);

  const handleAbilitySelect = (id: string) => {
    // handles selection and sets to null if we click on the same button
    setActiveAbility((prev) => (prev === id ? null : id));
    // choosing any ability results in disselection of other sub and subsubabilities
    setActiveSubAbility(null);
    setSelected(null);
  };

  const handleSubAbilitySelect = (id: string) => {
    // handles selection and sets to null if we click on the same button
    setActiveSubAbility((prev) => (prev === id ? null : id));
    setSelected(null);
  };

  const handleSubsubAbilitySelect = (id: string) => {
    // if user chooses the previous option(means disselects the option) then fallback all occupations will be displayed
    setSelected((prev) => (prev === id ? null : id));
  };

  const handleSearch = () => {
    onSearch(selected);
  };

  // console.log("activeAbility: ",activeAbility);

  useEffect(() => {
    setCollapsed(false);
    setActiveAbility(abilityCategories[0].id);
    setActiveSubAbility(abilityCategories[0].subAbilities[0].id);
    setSelected(abilityCategories[0].subAbilities[0].subsubAbilities[0].id);
    // console.log(abilityCategories[0].subAbilities[0].subsubAbilities[0].id);
    const initialSelectedId =
      abilityCategories[0].subAbilities[0].subsubAbilities[0].id;
    setTimeout(() => {
      onSearch(initialSelectedId);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto rounded-2xl bg-white overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
      {/* Collapsible Header */}
      <button
        className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-[#F8FFF9] via-[#F2F9FF] to-[#F8FFF9] transition-all duration-300 hover:from-[#F0FFF2] hover:via-[#E8F6FF] hover:to-[#F0FFF2]"
        onClick={() => setCollapsed(!collapsed)}
        aria-expanded={!collapsed}
        aria-controls="abilities-collapsible-content"
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
              {activeAbility ? (
                <Breadcrumb>
                  <ol className="flex items-center flex-nowrap list-none p-0 m-0">
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        asChild
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSubAbility(null);
                          setSelected(null);
                        }}
                      >
                        <div
                          className="text-primary-green-700 font-medium hover:underline whitespace-nowrap hover:text-primary-green-800 text-sm"
                          ref={abilityRef}
                        >
                          {
                            abilityCategories.find(
                              (a) => a.id === activeAbility
                            )?.name
                          }
                        </div>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {activeSubAbility && (
                      <>
                        <BreadcrumbSeparator className="mx-1 text-gray-400">
                          <ChevronRightIcon className="w-4 h-4" />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                          <BreadcrumbLink
                            asChild
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelected(null);
                            }}
                          >
                            <div
                              className="text-primary-blue-700 font-medium  hover:underline whitespace-nowrap hover:text-primary-blue-800 text-sm"
                              ref={subAbilityRef}
                            >
                              {
                                abilityCategories
                                  .find((a) => a.id === activeAbility)
                                  ?.subAbilities.find(
                                    (sa) => sa.id === activeSubAbility
                                  )?.name
                              }
                            </div>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                      </>
                    )}
                    {selected && (
                      <>
                        <BreadcrumbSeparator className="mx-1 text-gray-400">
                          <ChevronRightIcon className="w-4 h-4" />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                          <span
                            className="text-purple-700 font-medium whitespace-nowrap text-sm"
                            ref={subsubAbilityRef}
                          >
                            {
                              abilityCategories
                                .find((a) => a.id === activeAbility)
                                ?.subAbilities.find(
                                  (sa) => sa.id === activeSubAbility
                                )
                                ?.subsubAbilities.find(
                                  (ssa) => ssa.id === selected
                                )?.name
                            }
                          </span>
                        </BreadcrumbItem>
                      </>
                    )}
                  </ol>
                </Breadcrumb>
              ) : (
                <span className="text-lg font-semibold bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text text-transparent">
                  Select Abilities
                </span>
              )}
            </div>
          </div>
        </div>
        <ChevronDownIcon
          className={`text-primary-green-600 text-base transition-all w-4 h-4 ml-1
            ${collapsed ? "rotate-0" : "rotate-180"} duration-300`}
        />
      </button>

      {/* Collapsible Content */}
      <div
        id="abilities-collapsible-content"
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          collapsed ? "max-h-0" : "max-h-[800px]"
        }`}
      >
        {/* Abilities Row */}
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
                    {"Abilities".toUpperCase()}
                  </SheetTitle>
                  <SheetDescription>
                    <p className="text-gray-700 text-sm">
                      Select the ability that best suits for you
                    </p>
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col justify-between gap-4 mt-4">
                  {abilityCategories.map((ability) => (
                    <div
                      className="rounded-xl shadow-sm hover:shadow-md border border-gray-200 bg-white p-2"
                      key={ability.id}
                    >
                      <h1 className="text-primary-green-600">{ability.name}</h1>
                      <p className="text-gray-600 text-sm">
                        {ability.description}
                      </p>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {abilityCategories.map((ability) => (
              <button
                key={ability.id}
                onClick={() => handleAbilitySelect(ability.id)}
                className={`inline-flex items-center px-2 py-1 rounded-full border-2 font-medium transition-all text-sm sm:text-base
              ${
                activeAbility === ability.id
                  ? "bg-primary-green-600 text-white border-primary-green-600"
                  : "bg-white text-primary-green-700 border-primary-green-200 hover:bg-primary-green-100"
              }`}
                aria-pressed={activeAbility === ability.id}
                style={{ minWidth: "max-content" }}
              >
                {ability.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sub-Abilities Row */}
        {activeAbility && (
          <div className="px-6 py-6 border-t border-primary-green-100 transition-all duration-500 relative bg-primary-blue-50">
            <div className="absolute right-5 top-2">
              <Sheet>
                <SheetTrigger asChild>
                  <InfoIcon
                    className="text-primary-blue-400 absolute cursor-pointer hover:text-primary-blue-500 transition-colors"
                    width="16"
                    height="16"
                  />
                </SheetTrigger>
                <SheetContent className="bg-gradient-to-r from-primary-blue-200 to-primary-blue-50 sm:w-96 overflow-y-auto scrollbar-hide w-full">
                  <SheetHeader>
                    <SheetTitle className="text-primary-blue-600 text-xl font-medium tracking-wide">
                      {activeAbility.toUpperCase()}
                    </SheetTitle>
                    <SheetDescription>
                      <p className="text-gray-700 text-sm">
                        {
                          abilityCategories.find(
                            (ability) => activeAbility === ability.id
                          )?.description
                        }
                      </p>
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col justify-between gap-4 mt-4">
                    {abilityCategories
                      .find((ability) => ability.id === activeAbility)
                      ?.subAbilities.map((subAbility) => (
                        <div
                          className="rounded-xl shadow-sm hover:shadow-md border border-gray-200 bg-white p-2"
                          key={subAbility.id}
                        >
                          <h1 className="text-primary-blue-600">
                            {subAbility.name}
                          </h1>
                          <p className="text-gray-600 text-sm">
                            {subAbility.description}
                          </p>
                        </div>
                      ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {abilityCategories
                .find((a) => a.id === activeAbility)
                ?.subAbilities.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => handleSubAbilitySelect(sub.id)}
                    className={`inline-flex items-center px-2 py-1 rounded-full border-2 font-medium transition-all text-sm sm:text-base
                  ${
                    activeSubAbility === sub.id
                      ? "bg-primary-blue-600 text-white  border-primary-blue-600"
                      : "bg-white text-primary-blue-700 border-primary-blue-200 hover:bg-primary-blue-100"
                  }`}
                    aria-pressed={activeSubAbility === sub.id}
                    style={{ minWidth: "max-content" }}
                  >
                    {sub.name}
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* Subsub-Abilities Row (Capsules, horizontally scrollable) */}
        {activeSubAbility && (
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
                      {activeSubAbility.toUpperCase()}
                    </SheetTitle>
                    <SheetDescription>
                      <p className="text-gray-700 text-sm">
                        {
                          abilityCategories
                            .find((ability) => activeAbility === ability.id)
                            ?.subAbilities.find(
                              (sa) => sa.id === activeSubAbility
                            )?.description
                        }
                      </p>
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col justify-between gap-4 mt-4">
                    {abilityCategories
                      .find((ability) => ability.id === activeAbility)
                      ?.subAbilities?.find(
                        (subAbility) => subAbility.id === activeSubAbility
                      )
                      ?.subsubAbilities?.map((ssa) => (
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
              {abilityCategories
                .find((a) => a.id === activeAbility)
                ?.subAbilities.find((s) => s.id === activeSubAbility)
                ?.subsubAbilities.map((subsub) => (
                  <div
                    key={subsub.id}
                    role="button"
                    tabIndex={0}
                    aria-pressed={selected === subsub.id}
                    onClick={() => handleSubsubAbilitySelect(subsub.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        handleSubsubAbilitySelect(subsub.id);
                    }}
                    className={`inline-flex items-center px-2 py-1 rounded-full border-2 font-medium cursor-pointer transition-all text-sm sm:text-base
          ${
            selected === subsub.id
              ? "bg-purple-600 text-white border-purple-600"
              : "bg-white text-purple-700 border-purple-200 hover:bg-purple-100"
          }`}
                    style={{ minWidth: "max-content" }}
                  >
                    {subsub.name}
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
