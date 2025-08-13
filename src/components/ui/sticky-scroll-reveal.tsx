"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils";
import { Play, Pause, CheckCircle, Circle } from "lucide-react";

const features = [
  {
    step: "Step 1",
    title: "Venture into Explorer",
    content:
      "Explore a wide range of career options and become aware of the knowledge, skills, and abilities required for any occupation.",
    image: "/explorer.svg",
    color: "primary-green",
    accent: "accent-amber",
  },
  {
    step: "Step 2",
    title: "Evaluate through Coco",
    content:
      "Coco assists in evaluating each choice by revealing its consequences. It supports you in understanding and identifying suitable courses, colleges, jobs, work contexts, and environments.",
    image: "/coco.svg",
    color: "primary-blue",
    accent: "accent-coral",
  },
  {
    step: "Step 3",
    title: "Resolve by Coaching",
    content: `Career Coaching guides you in finding your "why," setting goals, resolving dilemmas, rewriting your story, making decisions, and crafting a clear road map.`,
    image: "/coaching.svg",
    color: "primary-green",
    accent: "accent-amber",
  },
  {
    step: "Step 4",
    title: "Change with Behavioural Tools",
    content:
      "Through Behavioural Tools, you can bring positive change within yourself while effectively managing wellbeing, sustaining new habits, and achieving your goals.",
    image: "/b-tools.svg",
    color: "primary-blue",
    accent: "accent-coral",
  },
];

interface FeatureStepsProps {
  className?: string;
  autoPlayInterval?: number;
}

function FeatureSteps({
  className,
  autoPlayInterval = 4000,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval, isPlaying]);

  const handleStepClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  //   const togglePlayPause = () => {
  //     setIsPlaying(!isPlaying);
  //   };

  const currentColor = features[currentFeature].color;
  const currentAccent = features[currentFeature].accent;

  return (
    <div className={cn("relative py-4 lg:py-8", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 lg:mb-12">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-primary-green-600 via-primary-blue-600 to-primary-green-600 bg-clip-text text-transparent">
              Your Journey in 4 Steps
            </h2>
            <p className="text-lg text-gray-600">
              Follow our guided process to unlock your potential
            </p>
          </div>

          {/* <div className="flex items-center gap-4">
            <button
              onClick={togglePlayPause}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                currentColor === "primary-green"
                  ? "border-primary-green-500 text-primary-green-700 hover:bg-primary-green-50"
                  : "border-primary-blue-500 text-primary-blue-700 hover:bg-primary-blue-50"
              }`}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span className="text-sm font-medium">
                {isPlaying ? "Pause" : "Play"}
              </span>
            </button>
          </div> */}
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Steps */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const isActive = index === currentFeature;
              const isCompleted = index < currentFeature;
              const stepColor = feature.color;
              const stepAccent = feature.accent;

              return (
                <motion.div
                  key={index}
                  className={`relative cursor-pointer group ${
                    isActive ? "scale-105" : "hover:scale-102"
                  }`}
                  onClick={() => handleStepClick(index)}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Connection line */}
                  {index < features.length - 1 && (
                    <div className="absolute left-12 top-16 w-0.5 h-20 bg-gradient-to-b from-gray-300 to-transparent"></div>
                  )}
                  {/* for tailwind to include shades of blue in the final bundle */}
                  <div
                    className="hidden 
  bg-primary-blue-25 
  text-primary-blue-200 
  border-primary-blue-400 
  shadow-primary-blue-100 
"
                  ></div>
                  <div
                    className="hidden 
  bg-primary-blue-25 
  text-accent-amber-400 sm:text-accent-coral-400 accent-amber-400
  border-primary-blue-200 
  shadow-primary-blue-100 
"
                  ></div>
                  <div
                    className="hidden 
  bg-primary-green-25 
  text-primary-green-200 
  border-primary-green-400 
  shadow-primary-green-100 
"
                  ></div>
                  <div
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-500 ${
                      isActive
                        ? `border-${stepColor}-400 bg-gradient-to-br from-${stepColor}-50 to-white shadow-xl shadow-${stepColor}-100`
                        : isCompleted
                        ? `border-${stepColor}-200 bg-${stepColor}-25`
                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* step indicator */}
                      <div
                        className={`relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive
                            ? `bg-${stepColor}-500 text-white shadow-lg shadow-${stepColor}-200`
                            : isCompleted
                            ? `bg-${stepColor}-500 text-white`
                            : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle size={20} />
                        ) : (
                          <span className="font-bold text-lg">{index + 1}</span>
                        )}

                        {/* progress ring for active step */}
                        {isActive && (
                            <svg className="absolute inset-0 w-12 h-12 -rotate-90">
                              <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                className={`text-${stepColor}-200`}
                              />
                              <circle
                                cx="24"
                                cy="24"
                                r="22"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray={`${2 * Math.PI * 22}`}
                                strokeDashoffset={`${
                                  2 * Math.PI * 22 * (1 - progress / 100)
                                }`}
                                className={`text-${stepAccent}-400 transition-all duration-100`}
                              />
                            </svg>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`text-sm font-semibold px-2 py-1 rounded-full ${
                              isActive
                                ? `bg-${stepColor}-100 text-${stepColor}-700`
                                : `text-gray-500`
                            }`}
                          >
                            {feature.step}
                          </span>
                        </div>

                        <h3
                          className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                            isActive
                              ? `text-${stepColor}-900`
                              : "text-gray-800 group-hover:text-gray-900"
                          }`}
                        >
                          {feature.title}
                        </h3>

                        <p
                          className={`text-sm sm:text-base  transition-colors duration-300 ${
                            isActive
                              ? "text-gray-700"
                              : "text-gray-600 group-hover:text-gray-700"
                          }`}
                        >
                          {feature.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="relative">
            <div
              className={`relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${
                currentColor === "primary-green"
                  ? "shadow-primary-green-200"
                  : "shadow-primary-blue-200"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br transition-all duration-700 ${
                  currentColor === "primary-green"
                    ? "from-primary-green-100 via-primary-green-50 to-accent-amber-50"
                    : "from-primary-blue-100 via-primary-blue-50 to-accent-coral-50"
                }`}
              ></div>

              <div
                className={`absolute top-4 right-4 w-20 h-20 rounded-full opacity-20 transition-all duration-700 ${
                  currentColor === "primary-green"
                    ? "bg-primary-green-300"
                    : "bg-primary-blue-300"
                }`}
              ></div>
              <div
                className={`absolute bottom-4 left-4 w-16 h-16 rounded-full opacity-20 transition-all duration-700 ${
                  currentAccent === "accent-amber"
                    ? "bg-accent-amber-300"
                    : "bg-accent-coral-300"
                }`}
              ></div>

              <AnimatePresence mode="wait">
                <motion.div
                  layout
                  key={currentFeature}
                  className="absolute inset-0 flex items-center justify-center p-8"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={features[currentFeature].image}
                      alt={features[currentFeature].title}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-6 gap-3">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFeature
                      ? currentColor === "primary-green"
                        ? "bg-primary-green-500 scale-125"
                        : "bg-primary-blue-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSteps;
