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
          className="object-contain w-full h-full"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <span className="text-xs tracking-wide text-gray-500">
          {blog.date} • {blog.readingTime}
        </span>

        <h3 className="mt-2 text-xl font-semibold leading-tight text-gray-900">
          {blog.title}
        </h3>

        <p className="mt-2 text-sm text-gray-700 line-clamp-5">
          {blog.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Render Read More only when not wrapped in Link */}
        {!isLinkWrapper && (
          <div className="pt-4 mt-auto">
            <span className="inline-flex items-center font-medium text-blue-600 hover:underline">
              Read More
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
