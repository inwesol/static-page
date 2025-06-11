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
import { ArrowRight, Book, Briefcase, PieChart, Sparkles } from "lucide-react";
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
        "Discover occupations based on your personal interests and passions",
      path: "/explorer/interest",
      color: "border-blue-500 hover:border-blue-600",
      bgHover: "hover:bg-blue-50/80",
      iconColor: "text-blue-600",
      icon: Book,
    },
    {
      title: "Browse by Abilities",
      description: "Discover key abilities that influence job performance across occupations. Explore by category to view detailed insights and ratings",
      path: "/explorer/ability",
      color: "border-green-500 hover:border-green-600",
      bgHover: "hover:bg-green-50/80",
      iconColor: "text-green-600",
      icon: PieChart,
    },
    {
      title: "Browse by Basic Skills",
      description: "Explore core skills that support learning and quick knowledge acquisition. Browse categories for detailed insights and job-specific ratings",
      path: "/explorer/skills",
      color: "border-teal-400 hover:border-teal-500",
      bgHover: "hover:bg-teal-50/80",
      iconColor: "text-teal-500",
      icon: Sparkles,
    },
    {
      title: "Browse by Knowledge",
      description: "Explore essential knowledge areas that apply across jobs. Browse by category to access detailed insights and occupation-specific ratings",
      path: "/explorer/knowledge",
      color: "border-purple-400 hover:border-purple-500",
      bgHover: "hover:bg-purple-50/80",
      iconColor:  "text-purple-500",
      icon: BookOpen ,
    },
    {
      title: "Browse All Occupations",
      description: "View a complete list of all available occupations",
      path: "/explorer/all",
      color: "border-gray-400 hover:border-gray-500",
      bgHover:  "hover:bg-gray-50/80",
      iconColor:  "text-gray-500",
      icon: Briefcase,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 sm:py-12 py-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center sm:mb-8 text-primary-green-600 mb-4">
          Explore Occupations
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Discover various career paths through different browsing methods to
          find the perfect occupation for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {browseOptions.map((option, index) => {
            const Icon = option.icon;

            return (
              <Link href={option.path} key={index} className="block group">
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
      </main>
      <Footer />
    </>
  );
};

export default ExplorerPage;
