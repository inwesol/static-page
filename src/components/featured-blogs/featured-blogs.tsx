"use client";

import { useState, useEffect } from "react";
import BlogCard from "./blog-card";
import { availableBlogs } from "@/app/(content)/blog/[blogSlug]/blog-content";
import  Link  from 'next/link';

const FeaturedBlogs = () => {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Transform availableBlogs into the required format
  const featuredBlogs = Object.entries(availableBlogs).map(
    ([slug, blog], index) => ({
      id: index + 1,
      title: blog.heading,
      description: blog.oneLiner,
      image: blog.bannerUrl,
      link: `/blog/${slug}/`,
      date: blog.createdOn,
      readingTime: blog.readingTime,
      tags: [],
    })
  );

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextSlide = () => {
    if (current < featuredBlogs.length - visibleCards) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full bg-[#f5fafd] py-14">
      <div className="max-w-screen-lg px-6 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 sm:text-4xl">
          Featured Blogs
        </h2>

        <div className="relative">
          <div
            className="flex flex-col items-center justify-center gap-6 transition-transform duration-500 ease-in-out sm:flex-row"
            style={{
              transform: `translateX(-${current * (100 / visibleCards)}%)`,
            }}
          >
            {featuredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="flex-shrink-0"
                style={{
                  width: `calc(100% / ${visibleCards} - 1rem)`,
                }}
              >
                <Link
                  href={blog.link}
                  className="block h-full transition-transform hover:scale-105"
                  aria-label={`Read more about ${blog.title}`}
                >
                  <BlogCard blog={blog} isLinkWrapper={true} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
