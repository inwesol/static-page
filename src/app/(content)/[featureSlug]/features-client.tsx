"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NotFound from "@/app/not-found";

import { availableFeatures } from "./features";
import { Footer, Navbar } from "@/components";

const capitalizeFirstChar = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export default function Features({
  params,
}: {
  params: { featureSlug: string };
}) {
  const isValidSlug = (
    featureSlug: string
  ): featureSlug is keyof typeof availableFeatures => {
    return featureSlug in availableFeatures;
  };

  const getDescription = () => {
    if (isValidSlug(params.featureSlug)) {
      return (
        <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
          {availableFeatures[params.featureSlug].description}
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
            {capitalizeFirstChar(params?.featureSlug ?? "")}
          </span>
        </span>
      </p>
    );
  };

  if (
    !availableFeatures[params.featureSlug as keyof typeof availableFeatures]
  ) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center max-h-screen bg-[#F8F4EB] px-6 md:px-12 py-12 text-center">
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
              availableFeatures[
                params.featureSlug as keyof typeof availableFeatures
              ]?.image || "/coming-soon.svg"
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
      <Footer />
    </>
  );
}
