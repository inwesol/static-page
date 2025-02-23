"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const pathname = usePathname();
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const slugFromPath = pathname?.split("/").pop();
    if (slugFromPath) setSlug(slugFromPath);
  }, [pathname]);

  if (!slug) {
    return <p className="text-center py-10">Loading...</p>;
  }

  const blogData = {
    title: `Blog Post: ${slug}`,
    date: "February 23, 2024",
    author: "Jane Doe",
    image: "/images/blog1.jpg",
    content: `
      Crafting modern user interfaces is about blending aesthetics with functionality.
      In this article, we&apos;ll explore how to achieve clean, responsive, and intuitive designs.

      ### Why Modern UI Matters
      Good design enhances user experience, improves retention, and drives conversions.

      ### Core Principles
      - **Responsiveness:** Ensure it looks great on all devices.
      - **Performance:** Optimize load times and interactions.
      - **Accessibility:** Make it usable for everyone.

      Modern UI is not just about style—it&apos;s about delivering seamless user experiences.
    `,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-4">{blogData.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {blogData.date} · By {blogData.author}
        </p>

        <article className="prose prose-lg prose-gray whitespace-pre">
          {blogData.content}
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
