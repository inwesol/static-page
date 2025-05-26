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
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col h-[500px] transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-contain"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs text-gray-500 tracking-wide">
          {blog.date} • {blog.readingTime}
        </span>

        <h3 className="text-xl font-semibold text-gray-900 mt-2 leading-tight">
          {blog.title}
        </h3>

        <p className="text-gray-700 text-sm mt-2 line-clamp-5">
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

        {/* Render Read More only when not wrapped in Link */}
        {!isLinkWrapper && (
          <div className="mt-auto pt-4">
            <span className="inline-flex items-center text-blue-600 font-medium hover:underline">
              Read More
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
