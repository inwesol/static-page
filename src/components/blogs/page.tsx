"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "./blogCard";
import MagicBadge from "@/components/ui/magic-badge";

const featuredBlogs = [
  {
    id: 1,
    title: "The Future of Digital Innovation",
    description:
      "Discover the latest trends shaping the digital landscape and how you can stay ahead.",
    image: "https://picsum.photos/200/?technology",
    link: "#",
    date: "1st Jan 2025",
    tags: [],
  },
  {
    id: 2,
    title: "Building Scalable Applications",
    description:
      "A guide to designing scalable applications with modern frontend and cloud technologies.",
    image: "https://picsum.photos/200/?coding",
    link: "#",
    date: "22nd Mar 2024",
    tags: ["react", "js", "ts"],
  },
  // {
  //   id: 3,
  //   title: "Mastering UI/UX for Better Engagement",
  //   description:
  //     "Learn how to create stunning user experiences that drive engagement and conversions.",
  //   image: "https://picsum.photos/200/?design",
  //   link: "#",
  //   date: "13th Apr 2020",
  //   tags: [],
  // },
  // {
  //   id: 4,
  //   title: "Optimizing Performance for Web Apps",
  //   description:
  //     "Tips and best practices to improve web application speed and user experience.",
  //   image: "https://picsum.photos/200/?performance",
  //   link: "#",
  //   date: "11th June 1999",
  //   tags: [],
  // },
];

const BlogCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

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
      <div className="max-w-screen-lg mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
          Featured Blogs
        </h2>

        <div className="relative">
          {/* Blog Cards Container */}
          <div
            className="flex transition-transform duration-500 items-center justify-center ease-in-out gap-6"
            style={{
              transform: `translateX(-${current * (100 / visibleCards)}%)`,
            }}
          >
            {featuredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="flex-shrink-0"
                style={{
                  width: `calc(100% / ${visibleCards} - 1rem)`, // Ensures uniform width
                }}
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {current > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
              aria-label="Previous Blog"
            >
              <ChevronLeft className="text-primary w-6 h-6" />
            </button>
          )}
          {current < featuredBlogs.length - visibleCards && (
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
              aria-label="Next Blog"
            >
              <ChevronRight className="text-primary w-6 h-6" />
            </button>
          )}

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({
              length: featuredBlogs.length - visibleCards + 1,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  current === index ? "bg-[#3FA1D8] scale-110" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
