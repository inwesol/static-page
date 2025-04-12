import { Footer, Navbar } from "@/components";
import OccupationsList from "@/components/occupations-list/occupations-list";
import React from "react";
import { generateMetadata } from "@/utils";

export const metadata = generateMetadata({
  title: "Career Explorer",
  description:
    "Explore your career options with our interactive career explorer. Discover your strengths, interests, and career paths to make informed decisions and achieve your goals.",
  path: "/explorer",
});

const page = () => {
  return (
    <>
      <Navbar />
      <OccupationsList />
      <Footer />
    </>
  );
};

export default page;
