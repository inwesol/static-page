"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  readingTime: string;
  link: string;
}

export interface BlogCardProps {
  blog: Blog;
  isLinkWrapper?: boolean;
}

const BlogCard = ({ blog, isLinkWrapper = false }: BlogCardProps) => {
  // Only render the "Read More" button if not wrapped in a link
  const renderReadMoreButton = !isLinkWrapper && (
    <a
      href={blog.link}
      className="text-blue-600 font-medium hover:underline mt-4 inline-block"
    >
      Read More
    </a>
  );

  return (
    <div className="bg-white shadow-md rounded-2xl overflow flex flex-col h-[500px] transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <div className="relative w-full h-56 overflow shadow-sm">
        <Image
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-contain"
          fill
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs text-gray-500 tracking-wide">
          {blog.date} • {blog.readingTime}
        </span>

        <h3 className="text-xl font-semibold text-gray-900 mt-2 leading-tight">
          {blog.title}
        </h3>

        <p className="text-gray-700 text-sm mt-2 line-clamp-3 flex-grow">
          {blog.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Conditionally render the button */}
        {renderReadMoreButton}
      </div>
    </div>
  );
};

export default BlogCard;
