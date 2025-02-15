"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { cn } from "@/utils";
import Image from "next/image";

const content = [
  {
    title: "Venture into Explorer",
    description:
      "Explore a wide range of career options and become aware of the knowledge, skills, and abilities required for any occupation.",
    // content: (
    //   <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#00B24B,#3FA1D8)] flex items-center justify-center text-white font-bold">
    //     Guided Career Exploration
    //   </div>
    // ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/explorer.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Evaluate through Coco",
    description:
      "Coco assists in evaluating each choice by revealing its consequences. It supports you in understanding and identifying suitable courses, colleges, jobs, work contexts, and environments.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/coco.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Resolve by Coaching",
    description:
      "Career Coaching guides you in finding your “why,” setting goals, resolving dilemmas, rewriting your story, making decisions, and crafting a clear road map.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/coaching.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Coaching"
        />
      </div>
    ),
  },
  {
    title: "Change with Behavioural Tools",
    description:
      "Through Behavioural Tools, you can bring positive change within yourself while effectively managing wellbeing, sustaining new habits, and achieving your goals.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/b-tools.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="B-Tools"
        />
      </div>
    ),
  },
];

export const StickyScroll = ({
  contentClassName,
}: {
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "rgb(15 23 42)", // slate-900
    "rgb(0 0 0)", // black
    "rgb(23 23 23)", // neutral-900
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, rgb(6 182 212), rgb(16 185 129))", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, rgb(236 72 153), rgb(99 102 241))", // pink-500 to indigo-500
    "linear-gradient(to bottom right, rgb(249 115 22), rgb(234 179 8))", // orange-500 to yellow-500
  ];

  // const [backgroundGradient, setBackgroundGradient] = useState(
  //   linearGradients[0]
  // );

  // useEffect(() => {
  //   setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  // }, [activeCard]);

  return (
    <motion.div
      animate={
        {
          // backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }
      }
      className="h-[30rem] relative space-x-10 rounded-md p-10 w-full flex justify-center items-center"
    >
      <div
        className="h-full flex max-w-[1000px] w-full relative overflow-y-auto justify-between"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-gray-800"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg text-gray-600 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          // style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </div>
    </motion.div>
  );
};

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/utils";

// const content = [
//   {
//     title: "Venture into Explorer",
//     description:
//       "Explore a wide range of career options and become aware of the knowledge, skills, and abilities required for any occupation.",
//     content: "Guided Career Exploration",
//   },
//   {
//     title: "Evaluate through Coco",
//     description:
//       "Coco assists in evaluating each choice by revealing its consequences. It supports you in understanding and identifying suitable courses, colleges, jobs, work contexts, and environments.",
//     content: "AI-Powered Insights",
//   },
//   {
//     title: "Resolve by Coaching",
//     description:
//       "Career Coaching guides you in finding your “why,” setting goals, resolving dilemmas, rewriting your story, making decisions, and crafting a clear road map.",
//     content: "Seamless Collaboration",
//   },
//   {
//     title: "Change with Behavioural Tools",
//     description:
//       "Through Behavioural Tools, you can bring positive change within yourself while effectively managing wellbeing, sustaining new habits, and achieving your goals.",
//     content: "Holistic Wellbeing",
//   },
// ];

// export const StickyScroll = ({ contentClassName }: { contentClassName?: string }) => {
//   const [activeCard, setActiveCard] = useState(0);
//   const refs = useRef<(HTMLElement | null)[]>([]);

//   useEffect(() => {
//     const observers: IntersectionObserver[] = [];

//     refs.current.forEach((section, index) => {
//       if (!section) return;
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) setActiveCard(index);
//         },
//         { threshold: 0.5 }
//       );
//       observer.observe(section);
//       observers.push(observer);
//     });

//     return () => observers.forEach((observer) => observer.disconnect());
//   }, []);

//   return (
//     <div className="relative w-full flex flex-col lg:flex-row items-center lg:items-start justify-center px-6 lg:px-20 py-16 space-y-12 lg:space-y-0 lg:space-x-16">
//       {/* Left Content Section */}
//       <div className="max-w-2xl w-full">
//         {content.map((item, index) => (
//           <motion.div
//             key={index}
//             ref={(el) => (refs.current[index] = el) as any}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: activeCard === index ? 1 : 0.4 }}
//             transition={{ duration: 0.4 }}
//             className="mb-16"
//           >
//             <h2 className="text-3xl font-bold text-gray-900">{item.title}</h2>
//             <p className="text-lg text-gray-700 mt-4">{item.description}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Right Sticky Card */}
//       <div className="hidden lg:flex flex-col items-center justify-center">
//         <motion.div
//           className={cn(
//             "w-80 h-60 rounded-xl p-6 flex items-center justify-center text-white text-lg font-semibold",
//             contentClassName
//           )}
//           style={{
//             background:
//               activeCard === 3
//                 ? "linear-gradient(to bottom right, #F8F4EB, #00B24B)"
//                 : "linear-gradient(to bottom right, #00B24B, #3FA1D8)",
//             color: activeCard === 3 ? "#333" : "#fff",
//           }}
//         >
//           {content[activeCard].content}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/utils";

// const content = [
//   {
//     title: "Venture into Explorer",
//     description:
//       "Explore a wide range of career options and become aware of the knowledge, skills, and abilities required for any occupation.",
//     content: "Guided Career Exploration",
//   },
//   {
//     title: "Evaluate through Coco",
//     description:
//       "Coco assists in evaluating each choice by revealing its consequences. It supports you in understanding and identifying suitable courses, colleges, jobs, work contexts, and environments.",
//     content: "AI-Powered Insights",
//   },
//   {
//     title: "Resolve by Coaching",
//     description:
//       "Career Coaching guides you in finding your “why,” setting goals, resolving dilemmas, rewriting your story, making decisions, and crafting a clear road map.",
//     content: "Seamless Collaboration",
//   },
//   {
//     title: "Change with Behavioural Tools",
//     description:
//       "Through Behavioural Tools, you can bring positive change within yourself while effectively managing wellbeing, sustaining new habits, and achieving your goals.",
//     content: "Holistic Wellbeing",
//   },
// ];

// export const StickyScroll = ({
//   contentClassName,
// }: {
//   contentClassName?: string;
// }) => {
//   const [activeCard, setActiveCard] = useState(0);
//   const refs = useRef<(HTMLElement | null)[]>([]);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;
//       const sections = refs.current;
//       let activeIndex = 0;

//       for (let i = 0; i < sections.length; i++) {
//         if (!sections[i]) continue;
//         const rect = sections[i]!.getBoundingClientRect();
//         if (rect.top <= window.innerHeight / 2) {
//           activeIndex = i;
//         }
//       }
//       setActiveCard(activeIndex);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative w-full flex flex-col lg:flex-row items-start justify-center px-6 lg:px-20 py-16 space-y-12 lg:space-y-0 lg:space-x-16 h-full">
//       {/* Left Content Section - Scrollable */}
//       <div ref={containerRef} className="max-w-2xl w-full space-y-16">
//         {content.map((item, index) => (
//           <motion.div
//             key={index}
//             ref={(el) => (refs.current[index] = el) as any}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{
//               opacity: activeCard === index ? 1 : 0.5,
//               x: activeCard === index ? 0 : -20,
//             }}
//             transition={{ duration: 0.4 }}
//             className="border-l-4 pl-4 transition-all duration-300 ease-in-out"
//             style={{
//               borderColor: activeCard === index ? "#00B24B" : "#E5E7EB",
//             }}
//           >
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
//               {item.title}
//             </h2>
//             <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-2 sm:mt-4">
//               {item.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Right Sticky Container (Fixed Properly) */}

//       <div className="sticky top-20 w-full max-w-[300px] hidden lg:block">
//         <motion.div
//           className={cn(
//             "w-full h-64 rounded-xl p-6 flex items-center justify-center text-white text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out",
//             contentClassName
//           )}
//           style={{
//             background:
//               activeCard === 3
//                 ? "linear-gradient(to bottom right, #F8F4EB, #00B24B)"
//                 : "linear-gradient(to bottom right, #00B24B, #3FA1D8)",
//             color: activeCard === 3 ? "#333" : "#fff",
//           }}
//           animate={{ scale: activeCard === 3 ? 1.05 : 1 }}
//         >
//           {content[activeCard].content}
//         </motion.div>
//       </div>
//     </div>
//   );
// };
