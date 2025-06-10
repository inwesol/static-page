import { Footer, Navbar } from "@/components";
import OccupationsList from "@/components/occupations-list/occupations-list";
import { notFound } from "next/navigation";
import React from "react";

type BrowseByParams = {
  params: Promise<{
    browserBy: string;
  }>;
};

const BrowseByPage = async ({ params }: BrowseByParams) => {
  const { browserBy } = await params;

  // Validate browseBy parameter to ensure it's one of the expected values
  const validBrowseTypes = [
    "interest",
    "ability",
    "skills",
    "knowledge",
    "all",
  ];
  if (!validBrowseTypes.includes(browserBy)) {
    notFound(); // Redirect to 404 page if invalid browse type
  }

  // Generate a title based on the browse type
  // const getTitleByBrowseType = () => {
  //   switch (browserBy) {
  //     case "interest":
  //       return "Browse Occupations by Interest";
  //     case "ability":
  //       return "Browse Occupations by Ability";
  //     case "all":
  //       return "All Occupations";
  //     default:
  //       return "Browse Occupations";
  //   }
  // };

  return (
    <>
      <Navbar />
      {/* <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{getTitleByBrowseType()}</h1>
        <OccupationsList browseBy={browserBy} />
      </div> */}
      <OccupationsList browseBy={browserBy} />
      <Footer />
    </>
  );
};

export default BrowseByPage;
