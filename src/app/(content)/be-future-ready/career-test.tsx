"use client";
import React from "react";
import { motion } from "framer-motion";
import CareerTestDescription from "./career-test-description";
import Guides from "./guides";
import FeaturedBlogs from "@/components/featured-blogs/featured-blogs";

const CareerTest: React.FC = () => {
  return (
    <motion.div
      className="px-4 py-4 mx-auto sm:py-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <CareerTestDescription />
      <Guides />
      <FeaturedBlogs />
    </motion.div>
  );
};

export default CareerTest;
