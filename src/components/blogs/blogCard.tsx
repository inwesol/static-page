// "use client";

// import { ArrowUpRight } from "lucide-react";
// import React from "react";

// interface Blog {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   date: string;
//   link: string;
// }

// interface BlogCardProps {
//   blog: Blog;
// }

// const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col h-full min-h-[300px]">
//       {/* Blog Image */}
//       <img
//         src={blog.image}
//         alt={blog.title}
//         className="w-full h-52 object-cover"
//       />

//       {/* Blog Content */}
//       <div className="p-6 flex flex-col flex-grow">
//         {/* Blog Date */}
//         <span className="text-sm text-gray-500">{blog.date}</span>

//         {/* Blog Title */}
//         <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-1">
//           {blog.title}
//         </h3>

//         {/* Blog Description */}
//         <p className="text-gray-700 text-sm sm:text-base mt-2 line-clamp-2">
//           {blog.description}
//         </p>

//         <div className="flex flex-wrap gap-2 mt-3 mb-6 h-6">
//           {blog.tags.map((tag) => (
//             <span
//               key={tag}
//               className="px-3 py-1 bg-[#3FA1D8]/10 text-[#3FA1D8] text-xs font-medium rounded-full"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         <a
//           href={blog.link}
//           className="mt-auto flex items-center gap-1 text-primary font-medium hover:underline bg-[#3FA1D8]/10 w-fit px-2 py-1 rounded-2xl"
//         >
//           <span className="text-[#3FA1D8]">Read More</span>
//           <ArrowUpRight size={16} stroke="#3FA1D8" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  link: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow flex flex-col h-[500px] transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      {/* Blog Image */}
      <div className="relative w-full h-56 overflow">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Blog Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Blog Date */}
        <span className="text-xs text-gray-500 uppercase tracking-wide">
          {blog.date}
        </span>

        {/* Blog Title */}
        <h3 className="text-xl font-semibold text-gray-900 mt-2 leading-tight">
          {blog.title}
        </h3>

        {/* Blog Description */}
        <p className="text-gray-700 text-sm mt-2 line-clamp-3 flex-grow">
          {blog.description}
        </p>

        {/* Tags */}
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

        {/* Read More Button */}
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
