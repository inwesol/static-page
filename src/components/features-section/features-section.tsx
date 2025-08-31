"use client";

import React from "react";
import MagicBadge from "@/components/ui/magic-badge";
import {
  ClipboardCheck,
  Code,
  Handshake,
  Search,
  Sparkles,
  Trophy,
  User,
  Users,
  Wand,
} from "lucide-react";

import { AnimationContainer } from "@/components";

const featureCardIconClassName =
  "h-12 w-12 origin-left text-accent transition-all ease-in-out duration-300 group-hover:scale-75";

const FeaturesSection = () => {
  const availableFeatures = [
    {
      heading: "Be Future Ready",
      description:
        "Future Readiness helps students understand themselves through assessments, resources, and activities, preparing them for the future with greater self-awareness.",
      redirectUrl: "",
      oneLiner:
        "Future Readiness helps students understand themselves through assessments, resources, and activities, preparing them for the future with greater self-awareness.",
      icon: <Trophy className={featureCardIconClassName} />,
      slug: "career-test",
    },
    {
      heading: "Explorer",
      description:
        "Explorer lets you discover a wide range of career options, offering valuable insights into the skills, abilities, and knowledge required for each course and occupation. It serves as a helpful tool for preliminary information and awareness. Whether you're exploring new opportunities or refining your goals, Explorer is your first step toward clarity on your career path.",
      redirectUrl: "",
      oneLiner:
        "Explorer helps students find different career options and understand what skills and knowledge they need.",
      icon: <Search className={featureCardIconClassName} />,
      slug: "explorer",
    },
    {
      heading: "CoCo",
      description:
        "Coco is your personal AI agent, designed to help you access career information, make informed decisions about your day-to-day career activities, and maintain your overall wellbeing. With Coco by your side, you can continuously monitor and evaluate your choices, ensuring a balanced approach to career growth and personal wellbeing.",
      redirectUrl: "",
      oneLiner:
        "Coco is an AI Mindset Coach that provides career information, helps with decisions, and supports students in managing stress.",
      icon: <Sparkles className={featureCardIconClassName} />,
      slug: "coco",
    },
    {
      heading: "Coaching",
      description:
        "The 1:1 Personalised Career coaching with a psychologist will assist you in realising strengths, interests, and abilities. Through this process, we help you gain clarity about your personal story, rewrite it with confidence, and align your career path with your goals, all while prioritising your wellbeing.",
      redirectUrl: "",
      oneLiner:
        "1:1 psychology-based coaching with a trained psychologist that helps students understand their purpose and strengths, set goals, and take action.",
      icon: (
        <div className="flex flex-row items-center justify-center text-5xl text-accent">
          <User className={`${featureCardIconClassName} h-10 w-10`} />
          <Code className={`${featureCardIconClassName} h-6 w-6`} />
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
        "Behaviour Tools help students stay productive, focused, and on track, supporting their self-discovery journey and career progress.",
      icon: <ClipboardCheck className={featureCardIconClassName} />,
      slug: "behavioural-tools",
    },
    {
      heading: "Community",
      description:
        "Community connects students with peers, mentors, and educators, providing support, guidance, and inspiration throughout their journey.",
      redirectUrl: "",
      oneLiner:
        "Community connects students with peers, mentors, and educators, providing support, guidance, and inspiration throughout their journey.",
      icon: <Handshake className={featureCardIconClassName} />,
      slug: "story",
    },
  ];

  return (
    <div className="bg-[#f5fafd] pb-12">
      <AnimationContainer delay={0.2}>
        <div className="flex flex-col items-center justify-center w-full py-12 max-w-3xl mx-auto px-2 sm:px-6 lg:px-8">
          <MagicBadge title="Features" />

          <h2 className="text-center text-2xl sm:text-3xl md:text-2xl font-semibold font-heading leading-snug mt-6">
            Transforming Student Outcomes Through <br />
            <span className="text-transparent bg-gradient-to-r from-primary1 to-accent bg-clip-text inline-bloc">
              Psychology | Technology | Community
            </span>
          </h2>

          <p className="text-center text-base sm:text-md md:text-lg leading-relaxed max-w-xl mt-4 text-neutral-700">
            Inwesol integrates psychological evidence with the scale of GenAI to
            build a learning mindset ecosystem in schools. This helps students
            manage academic pressure, resolve career confusion, and tackle
            behavioural challenges through self-discovery journey.
          </p>
        </div>
      </AnimationContainer>

      <div className="w-full flex justify-center items-center px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[1fr] max-w-[1000px] w-full">
          {availableFeatures.map((eachFeature, index) => {
            const isWiderCard = index === 0 || index === 3 || index === 4;
            const commonClassName =
              "h-full p-6 rounded-2xl shadow-md border bg-white flex flex-col justify-end group relative transition-all duration-300 hover:shadow-lg cursor-pointer";

            return (
              <a
                href={`/${eachFeature.slug}/`}
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

                      <div className="border-[1px] border-accent/10 m-0 h-8 w-28 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-200 mt-4 flex items-center justify-center">
                        <span className="text-accent text-sm font-medium">
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimationContainer>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
