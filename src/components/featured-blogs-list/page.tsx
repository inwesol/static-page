"use client";

import { Navbar } from "@/components";
import BlogListPage from "@/components/blogs-list/blogs-list";
import OccupationDetails from "@/components/occupation-details/occupation-details";
import OccupationsList from "@/components/occupations-list/occupations-list";
import React from "react";

const featuredBlogs = [
  {
    id: 1,
    title: "Career Guidance",
    description:
      "A process where trained professionals help individuals identify their strengths and interests through self-assessments, enabling them to make informed career decisions.",
    image: "/career-guidance.png",
    link: "/blog/career-guidance",
    date: "27th Feb 2025",
    tags: [],
  },
  {
    id: 2,
    title: "Career Coaching vs Career Counselling",
    description:
      "Understanding the distinction between career counseling and career coaching helps you make informed decisions that shape your future.",
    image: "/coaching-vs-counselling.png",

    link: "/blog/coaching-vs-counselling",
    date: "27th Feb 2025",
    tags: [],
  },
];

const page = () => {
  return (
    <>
      {/* <BlogListPage blogs={featuredBlogs} />; */}

      {/* <OccupationsList /> */}

      <OccupationDetails />
    </>
  );
};

export default page;

/**
 * List comp
 * iterator
 * OOPS concepts
 *
 * Employee class
 *
 * Machine Learning
 *
 * OS
 *
 * API construction
 *
 *
 */
