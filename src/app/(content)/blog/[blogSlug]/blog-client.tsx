"use client";

import React from "react";
import BlogLayout from "@/components/layout/blog-layout";
import NotFound from "@/app/not-found";
import { availableBlogs } from "./blog-content";

const BlogClient = ({ params }: { params: { blogSlug: string } }) => {
  const isValidSlug = (
    blogSlug: string
  ): blogSlug is keyof typeof availableBlogs => {
    return blogSlug in availableBlogs;
  };

  const getContent = () => {
    if (isValidSlug(params.blogSlug)) {
      return availableBlogs[params.blogSlug].content;
    }
    return "# Coming Soon!! ";
  };

  const getBannerUrl = () => {
    if (isValidSlug(params.blogSlug)) {
      return availableBlogs[params.blogSlug]?.bannerUrl;
    }
    return "/coming-soon.svg";
  };

  if (!availableBlogs[params.blogSlug as keyof typeof availableBlogs]) {
    return <NotFound />;
  }

  return (
    <BlogLayout
      markdownContent={getContent()}
      bannerUrl={getBannerUrl()}
      imageFit={
        (availableBlogs[params.blogSlug as keyof typeof availableBlogs]
          ?.imageFit as "contain" | "cover") || "cover"
      }
    />
  );
};

export default BlogClient;
