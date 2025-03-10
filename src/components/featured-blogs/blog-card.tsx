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
  link: string;
}

export interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
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
        <span className="text-xs text-gray-500 tracking-wide">{blog.date}</span>

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

        <div className="mt-5 flex justify-start">
          <a
            href={blog.link}
            className="flex items-center gap-2 text-white font-medium bg-[#00B24B] bg-accent px-4 py-2 rounded-full transition-all hover:bg-accent/88 shadow-md hover:shadow-lg"
          >
            <span className="text-sm">Read More</span>
            <ArrowUpRight size={18} stroke="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
