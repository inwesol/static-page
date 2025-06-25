import React from "react";

import { Footer, Navbar } from "@/components";
import OccupationDetails from "@/components/occupation-details/occupation-details";

const page = () => {
  return (
    <>
      <Navbar />
      <OccupationDetails />
      <Footer />
    </>
  );
};

export default page;
