import { Footer, Navbar } from "@/components";
import OccupationsList from "@/components/occupations-list/occupations-list";
import React from "react";

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
