import React from "react";
// import { currentUser } from "@clerk/nextjs/server";

import { Footer } from "@/components";
import StickyScrollRevealDemo from "@/components/ui/process";

import HeroSection from "@/components/hero-section/hero-section";
import ExplorerCard from "@/components/explorer-card/explorer-card";
import FeaturesSection from "@/components/features-section/features-section";
import FeaturedBlogs from "@/components/featured-blogs/featured-blogs";
import Testimonials from "@/components/testimonials/testimonials";
import SchoolSection from "@/components/school-section/school-section";

const HomePage1 = async () => {
  // const user = await currentUser();

  return (
    <div className="h-full">
      <HeroSection />
      <SchoolSection />
      <FeaturesSection />
      <StickyScrollRevealDemo />
      <ExplorerCard />
      <Testimonials />
      <FeaturedBlogs />
    </div>
  );
};

export default HomePage1;
