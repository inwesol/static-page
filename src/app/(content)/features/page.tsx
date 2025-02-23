"use client";

import React from "react";

import { AnimationContainer, MaxWidthWrapper } from "@/components";
import MagicBadge from "@/components/ui/magic-badge";
import {
  ClipboardCheck,
  MessageCircle,
  Search,
  Sparkle,
  Sparkles,
  User,
  UserCheck,
} from "lucide-react";

// className={`p-6 rounded-xl border border-gray-300/50 h-[350px] shadow-sm ${
//   index == 1 || index == 2 ? "bg-[#F8F4EB]" : "bg-[#f2fff2]"
// }`}

const featureCardIconClassName =
  "h-12 w-12 origin-left text-accent transition-all ease-in-out duration-300 group-hover:scale-75";

const Features = () => {
  const availableFeatures = [
    {
      heading: "Explorer",
      description:
        "Explorer lets you discover a wide range of career options, offering valuable insights into the skills, abilities, and knowledge required for each course and occupation. It serves as a helpful tool for preliminary information and awareness. Whether you’re exploring new opportunities or refining your goals, Explorer is your first step toward clarity on your career path.",
      redirectUrl: "",
      oneLiner:
        "Explorer helps you find different career options and understand what skills and knowledge you need.",
      icon: <Search className={featureCardIconClassName} />,
      slug: "explorer",
    },
    {
      heading: "CoCo",
      description:
        "Coco is your personal AI agent, designed to help you access career information, make informed decisions about your day-to-day career activities, and maintain your overall wellbeing. With Coco by your side, you can continuously monitor and evaluate your choices, ensuring a balanced approach to career growth and personal wellbeing.",
      redirectUrl: "",
      oneLiner:
        "Coco is your personal AI Agent that provides career information, helps with decisions, and supports your overall wellbeing.",
      icon: <Sparkles className={featureCardIconClassName} />,
      slug: "coco",
    },
    {
      heading: "Coaching",
      description:
        "The 1:1 Personalised Career coaching with a psychologist will assist you in realising strengths, interests, and abilities. Through this process, we help you gain clarity about your personal story, rewrite it with confidence, and align your career path with your goals, all while prioritising your wellbeing.",
      redirectUrl: "",
      oneLiner:
        "1:1 personalized career coaching with a psychologist will assist you in understanding your purpose and strengths, setting goals, and taking action.",
      icon: (
        <div className="flex flex-row items-center justify-center text-5xl text-accent">
          <User className={`${featureCardIconClassName} h-10 w-10`} />
          :
          <User className={`${featureCardIconClassName} h-10 w-10`} />
        </div>
      ),
      slug: "coaching",
    },
    {
      heading: "Behavioural Tools",
      description:
        "Behavioural Tools help individuals stay productive, calm, and focused while evaluating daily progress and learning key career strategies. Designed for behavioural change, these tools support you throughout your self-discovery journey and keep you on track afterwards.",
      redirectUrl: "",
      oneLiner:
        "Behavioural Tools help you stay productive, focused, and on track, supporting your self-discovery journey and career progress.",
      icon: <ClipboardCheck className={featureCardIconClassName} />,
      slug: "behavioural-tools",
    },
  ];

  return (
    <div className="bg-[#f5fafd] pb-12">
      <AnimationContainer delay={0.2}>
        <div className="flex flex-col items-center justify-center w-full py-12 max-w-3xl mx-auto px-2 sm:px-6 lg:px-8">
          <MagicBadge title="Features" />

          {/* <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold font-heading leading-snug mt-6">
            <span className="text-primary1 font-bold whitespace-nowrap">
              Psychology
            </span>{" "}
            and{" "}
            <span className="text-accent font-bold whitespace-nowrap">AI</span>{" "}
            empower you to achieve career wellbeing.
          </h2> */}
          <h2 className="text-center text-2xl sm:text-3xl md:text-2xl font-semibold font-heading leading-snug mt-6">
            Resolve career dilemmas & manage well-being through{" "}
            <span className="text-transparent bg-gradient-to-r from-primary1 to-accent bg-clip-text inline-bloc">
              Psychology | Technology | Community
            </span>
          </h2>

          <p className="text-center text-base sm:text-md md:text-lg leading-relaxed max-w-xl mt-4 text-neutral-700">
            Inwesol integrates psychological evidence with GenAI&apos;s scale to
            democratize career information, provide personalized career
            coaching, and build wellbeing-enabled communities.
          </p>
        </div>
      </AnimationContainer>

      {/* <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 w-full max-w-[800px]">
          {availableFeatures.map((eachFeature, index) => {
            return (
              <div
                className={`p-6 rounded-xl border border-gray-300/50 h-[350px] shadow-sm ${
                  index == 1 || index == 2 ? "bg-[#F8F4EB]" : "bg-[#f2fff2]"
                }`}
                key={index}
              >
                <div className="flex flex-col justify-end h-full">
                  <div>
                    <AnimationContainer delay={0.3} key={index}>
                      <h2 className="text-2xl font-extrabold mb-2 text-onBackground">
                        {eachFeature.heading}
                      </h2>
                      <p className="text-base leading-5 text-gray-600">
                        {eachFeature.oneLiner}
                      </p>
                    </AnimationContainer>
                  </div>

                  <AnimationContainer delay={0.4} key={index}>
                    <button className="border-[1px] border-accent/10 m-0 h-8 w-28 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors duration-200 focus: outline-accent mt-4">
                      <div className="w-fit relative inline-flex rounded-full focus:outline-none">
                        <span className="text-accent inline-flex w-full cursor-pointer items-center justify-center rounded-full text-sm font-medium">
                          Learn More
                        </span>
                      </div>
                    </button>
                  </AnimationContainer>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}

      <div className="w-full flex justify-center items-center px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[1fr] max-w-[1000px] w-full">
          {availableFeatures.map((eachFeature, index) => {
            const isWiderCard = index === 1 || index === 2;
            const commonClassName =
              "h-full p-6 rounded-2xl shadow-md border bg-white flex flex-col justify-end";

            return (
              <div
                className={
                  isWiderCard
                    ? `sm:col-span-2 ${commonClassName}`
                    : `${commonClassName}`
                }
                key={index}
              >
                <AnimationContainer delay={(index + 1) * 0.2} key={index}>
                  <div className="flex flex-col gap-2 pt-4 justify-end items-start">
                    {eachFeature.icon}

                    <div className="transition-all duration-300 ease-in-out transform">
                      <h3 className="text-xl font-bold text-gray-900">
                        {eachFeature.heading}
                      </h3>
                      <p className="text-base text-gray-700 max-w-lg">
                        {eachFeature.oneLiner}
                      </p>

                      <a
                        href={`/${eachFeature.slug}`}
                        className="border-[1px] border-accent/10 m-0 h-8 w-28 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors duration-200 focus:outline-accent mt-4 flex items-center justify-center"
                      >
                        <span className="text-accent text-sm font-medium">
                          Learn More
                        </span>
                      </a>
                    </div>
                  </div>
                </AnimationContainer>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 gap-6 p-4 w-full max-w-[800px]">
          {availableFeatures.map((eachFeature, index) => {
            return (
              <FeatureCard
                heading={eachFeature.heading}
                oneLiner={eachFeature.oneLiner}
                icon={eachFeature.icon}
                key={index}
              />
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Features;
