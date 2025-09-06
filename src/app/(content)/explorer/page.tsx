import { Footer, Navbar } from "@/components";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Book,
  Briefcase,
  GitFork,
  PieChart,
  Sparkles,
} from "lucide-react";
import { BookOpen } from "lucide-react";

import { generateMetadata } from "@/utils";

export const metadata = generateMetadata({
  title: "Career Explorer",
  description:
    "Explore your career options with our interactive career explorer. Discover your strengths, interests, and career paths to make informed decisions and achieve your goals.",
  path: "/explorer",
});

const ExplorerPage = () => {
  const browseOptions = [
    {
      title: "Browse by Interests",
      description:
        "Explore based on your interest. Whether it’s writing, coding, or helping others, discover the careers that excite you and see how your interests can shape your future.",
      path: "/explorer/interest",
      color: "border-blue-500 hover:border-blue-600",
      bgHover: "hover:bg-blue-50/80",
      iconColor: "text-blue-600",
      icon: Book,
    },
    {
      title: "Browse by Abilities",
      description:
        "Explore based on your abilities. Learn about careers where different abilities like problem-solving, focusing, or remembering details are applied.",
      path: "/explorer/ability",
      color: "border-green-500 hover:border-green-600",
      bgHover: "hover:bg-green-50/80",
      iconColor: "text-green-600",
      icon: PieChart,
    },
    {
      title: "Browse by Skills",
      description:
        "Explore based on your skills. Learn about careers that use skills you have or want to build. Be it writing, coding, or working with people, discover the ways these skills are applied.",
      path: "/explorer/skills",
      color: "border-teal-400 hover:border-teal-500",
      bgHover: "hover:bg-teal-50/80",
      iconColor: "text-teal-500",
      icon: Sparkles,
    },
    {
      title: "Browse by Knowledge",
      description:
        "Explore based on your knowledge. Learn about careers connected to subjects you enjoy. Math, history, or biology, see the possibilities they can lead to.",
      path: "/explorer/knowledge",
      color: "border-purple-400 hover:border-purple-500",
      bgHover: "hover:bg-purple-50/80",
      iconColor: "text-purple-500",
      icon: BookOpen,
    },
    {
      title: "Browse All Occupations",
      description:
        "Explore freely. See all careers in one place and discover paths that spark your curiosity and interest.",
      path: "/explorer/all",
      color: "border-gray-400 hover:border-gray-500",
      bgHover: "hover:bg-gray-50/80",
      iconColor: "text-gray-500",
      icon: Briefcase,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 sm:py-12 py-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center sm:mb-8 text-primary-green-600 mb-2">
          Explore Possibilities
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Begin your journey on Explorer to learn about different careers,
          understand their paths, and plan your next steps with clarity.
          <br />
          <span className="font-bold text-accent">
            “Curiosity opens doors you didn&apos;t know existed.”
          </span>
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {browseOptions.map((option, index) => {
            const Icon = option.icon;

            return (
              <Link
                href={option.path}
                key={index}
                className="block group w-full max-w-lg"
              >
                <Card
                  className={`transition-all duration-300 ${option.color} border-2 rounded-xl ${option.bgHover} 
                  shadow-md group-hover:shadow-lg h-full cursor-pointer relative overflow-hidden`}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl group-hover:text-gray-900">
                        {option.title}
                      </CardTitle>
                      <Icon className={`h-8 w-8 ${option.iconColor}`} />
                    </div>
                    <CardDescription className="text-base">
                      {option.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-11">
                    {/* Space for content if needed */}
                  </CardContent>
                  <div className="absolute bottom-4 right-4 flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                    <span className={option.iconColor}>Explore</span>
                    <ArrowRight
                      className={`ml-1 h-4 w-4 ${option.iconColor}`}
                    />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Career Map Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-8 mt-10 rounded-3xl">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="mb-6">
              <GitFork className={`w-12 h-12 mx-auto text-white`} />
            </div>

            {/* Title */}
            <h2 className="text-4xl font-bold mb-4">Career Map</h2>

            {/* Description */}
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Visualize your career journey with our interactive flow chart
              diagram.
            </p>

            {/* CTA Button */}
            <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105">
              Flowchart Coming Soon
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ExplorerPage;
