"use client";
import React from "react";
import FeatureSteps from "@/components/ui/sticky-scroll-reveal";
import AnimationContainer from "@/components/global/animation-container";
import MagicBadge from "./magic-badge";



function StickyScrollRevealDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-green-50 via-white to-primary-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-accent-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <AnimationContainer delay={0.2}>
        <div className="relative z-10 flex flex-col items-center justify-center w-full py-4 sm:py-6 lg:py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MagicBadge title="Self-Discovery Journey" color="#3fa1d8" />

          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-green-700 via-primary-blue-600 to-primary-green-800 bg-clip-text text-transparent leading-tight mt-8 mb-6">
            Discover Your Path
          </h1>

          <p className="text-center text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl text-slate-600 font-medium">
            A comprehensive self-discovery journey designed to help you gain clarity, 
            build confidence, and reduce stress in your career path, ultimately leading 
            to a purpose-driven life.
          </p>
        </div>
      </AnimationContainer>
      
      <FeatureSteps />
    </div>
  );
}

export default StickyScrollRevealDemo;