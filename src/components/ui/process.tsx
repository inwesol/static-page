"use client";
import React from "react";
import FeatureSteps from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import AnimationContainer from "../global/animation-container";
import MagicBadge from "./magic-badge";

function StickyScrollRevealDemo() {
  return (
    <div className="bg-white">
      <AnimationContainer delay={0.2}>
        <div className="flex flex-col items-center justify-center w-full py-12 max-w-3xl mx-auto px-4 pb-0 sm:py-6 lg:py-8 sm:px-6 lg:px-8">
          <MagicBadge title="Self-Discovery Journey" color="#3fa1d8" />

          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold font-heading leading-snug mt-6">
            How to use all features
          </h2>

          <p className="text-center text-base sm:text-md md:text-lg leading-relaxed max-w-2xl mt-4 text-neutral-700">
            A guided self-discovery journey designed to help individuals gain
            clarity, build confidence, and reduce stress in their career paths,
            ultimately leading to purpose-driven lives.
          </p>
        </div>
      </AnimationContainer>
      
      <FeatureSteps />
    </div>
  );
}

export default StickyScrollRevealDemo;
