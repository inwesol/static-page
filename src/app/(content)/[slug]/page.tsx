"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NotFound from "@/app/not-found";

const availableFeatures = {
  explorer: {
    heading: "Explorer",
    description:
      "Explorer lets you discover a wide range of career options, offering valuable insights into the skills, abilities, and knowledge required for each course and occupation. It serves as a helpful tool for preliminary information and awareness. Whether you’re exploring new opportunities or refining your goals, Explorer is your first step toward clarity on your career path.",
    redirectUrl: "",
    oneLiner:
      "Explorer helps you find different career options and understand what skills and knowledge you need.",
    slug: "explorer",
    image: "/explorer.svg",
  },
  coco: {
    heading: "CoCo",
    description:
      "Coco is your personal AI agent, designed to help you access career information, make informed decisions about your day-to-day career activities, and maintain your overall wellbeing. With Coco by your side, you can continuously monitor and evaluate your choices, ensuring a balanced approach to career growth and personal wellbeing.",
    redirectUrl: "",
    oneLiner:
      "Coco is your personal AI Agent that provides career information, helps with decisions, and supports your overall wellbeing.",
    slug: "coco",
    image: "/coco.svg",
  },
  coaching: {
    heading: "Coaching",
    description:
      "The 1:1 Personalised Career coaching with a psychologist will assist you in realising strengths, interests, and abilities. Through this process, we help you gain clarity about your personal story, rewrite it with confidence, and align your career path with your goals, all while prioritising your wellbeing.",
    redirectUrl: "",
    oneLiner:
      "1:1 personalized career coaching with a psychologist will assist you in understanding your purpose and strengths, setting goals, and taking action.",
    slug: "coaching",
    image: "/coaching.svg",
  },
  "behavioural-tools": {
    heading: "Behavioural Tools",
    description:
      "Behavioural Tools help individuals stay productive, calm, and focused while evaluating daily progress and learning key career strategies. Designed for behavioural change, these tools support you throughout your self-discovery journey and keep you on track afterwards.",
    redirectUrl: "",
    oneLiner:
      "Behavioural Tools help you stay productive, focused, and on track, supporting your self-discovery journey and career progress.",
    slug: "behavioural-tools",
    image: "/b-tools.svg",
  },
};

const capitalizeFirstChar = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export default function ComingSoon({ params }: { params: { slug: string } }) {
  const isValidSlug = (
    slug: string
  ): slug is keyof typeof availableFeatures => {
    return slug in availableFeatures;
  };

  const getDescription = () => {
    if (isValidSlug(params.slug)) {
      return (
        <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
          {availableFeatures[params.slug].description}
        </p>
      );
    }
    return (
      <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
        We are working hard to bring you this exciting feature. Stay tuned for
        updates and be the first to experience the new possibilities{" "}
        <span className="whitespace-nowrap">
          with{" "}
          <span className="text-primary1 font-bold underline">
            {capitalizeFirstChar(params?.slug ?? "")}
          </span>
        </span>
      </p>
    );
  };

  if(!availableFeatures[params.slug as keyof typeof availableFeatures]){
    return <NotFound />
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-h-screen bg-[#F8F4EB] px-6 md:px-12 py-12 text-center">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Coming Soon
        </h1>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md mb-6"
      >
        <Image
          src={
            availableFeatures[params.slug as keyof typeof availableFeatures]
              ?.image || "/coming-soon.svg"
          }
          alt="Coming Soon"
          width={500}
          height={500}
          className="w-full"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        {getDescription()}
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-[#3FA1D8] text-white rounded-xl font-semibold shadow-lg hover:bg-[#00B24B] transition-all"
        >
          Notify Me!
        </motion.button> */}
        <Link href="/">
          <Button className="px-6 py-3 bg-[#3FA1D8] text-white rounded-xl font-semibold shadow-lg hover:bg-[#00B24B] transition-all">
            Back to homepage
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
