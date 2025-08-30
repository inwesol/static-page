"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils";

const features = [
  {
    step: "Step 0",
    title: "Start with Future Readiness",
    content:
      "Future Readiness introduces self-assessment tools, resources, and activities that build awareness of strengths, interests, and values, forming the foundation for clarity.",
    image: "/future-readiness.svg",
  },
  {
    step: "Step 1",
    title: "Venture into Explorer",
    content:
      "Explore a wide range of career options and become aware of the knowledge, skills, and abilities required for any occupation.",
    image: "/explorer.svg",
  },
  {
    step: "Step 2",
    title: "Evaluate through CoCo",
    content:
      "Coco assists in evaluating each choice by revealing its consequences. It supports you in understanding and identifying suitable courses, colleges, jobs, work contexts, and environments.",
    image: "/coco.svg",
  },
  {
    step: "Step 3",
    title: "Resolve by Coaching",
    content:
      "Career Coaching guides you in finding your “why,” setting goals, resolving dilemmas, rewriting your story, making decisions, and crafting a clear road map.",
    image: "/coaching.svg",
  },
  {
    step: "Step 4",
    title: "Change with Behavioural Tools",
    content:
      "Through Behavioural Tools, you can bring positive change within yourself while effectively managing wellbeing, sustaining new habits, and achieving your goals.",
    image: "/b-tools.svg",
  },
  {
    step: "Step 5",
    title: "Grow with Community",
    content:
      "Community connects students with peers, mentors, and educators, fostering shared learning, collaboration, and belonging while offering continuous support for growth.",
    image: "/community.svg",
  },
];

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

interface FeatureStepsProps {
  className?: string;
  autoPlayInterval?: number;
}

function FeatureSteps({
  className,
  autoPlayInterval = 3000,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className={cn("p-8 md:p-12 lg:py-16", className)}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          <div
            className={cn(
              "order-1 md:order-2 relative rounded-lg flex items-center justify-center h-[300px] sm:h-[350px] md:h-auto"
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className="object-contain object-center"
                        fill
                        priority
                      />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          <div className="order-2 md:order-1 space-y-6 md:space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 md:gap-6"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
                    index === currentFeature
                      ? "bg-primary border-primary text-primary-foreground scale-110"
                      : "bg-muted border-muted-foreground"
                  )}
                >
                  <span className="text-base md:text-lg font-semibold">
                    {index}
                  </span>
                </motion.div>

                <div className="flex-1 space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold leading-snug">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSteps;
