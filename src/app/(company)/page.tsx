import React from "react";
// import { currentUser } from "@clerk/nextjs/server";

import { Footer } from "@/components";
import StickyScrollRevealDemo from "@/components/ui/process";

import HeroSection from "@/components/hero-section/hero-section";
import ExplorerCard from "@/components/explorer-card/explorer-card";
import FeaturesSection from "@/components/features-section/features-section";
import FeaturedBlogs from "@/components/featured-blogs/featured-blogs";

const HomePage = async () => {
  // const user = await currentUser();

  return (
    <div className="h-full">
      <HeroSection />

      <FeaturesSection />

      <StickyScrollRevealDemo />

      <FeaturedBlogs />

      <ExplorerCard />
    </div>
  );
};

export default HomePage;
