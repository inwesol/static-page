"use client";
import React, { useState } from "react";
// import { currentUser } from "@clerk/nextjs/server";

import { Footer } from "@/components";
import StickyScrollRevealDemo from "@/components/ui/process";
import ModalCTA from "@/components/modal-cta";

import HeroSection from "@/components/hero-section/hero-section";
import ExplorerCard from "@/components/explorer-card/explorer-card";
import FeaturesSection from "@/components/features-section/features-section";
import FeaturedBlogs from "@/components/featured-blogs/featured-blogs";
import Testimonials from "@/components/testimonials/testimonials";
import SchoolSection from "@/components/school-section/school-section";

const HomePage1 = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="h-full">
      {/* Global Modal with 4 second delay */}
      <ModalCTA isOpen={showModal} setIsOpen={setShowModal} delay={4000} />

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
