"use client";

import { useState, useEffect } from "react";

import BlogCard from "./blog-card";

const featuredBlogs = [
  {
    id: 1,
    title: "Career Guidance",
    description:
      "A process where trained professionals help individuals identify their strengths and interests through self-assessments, enabling them to make informed career decisions.",
    image:
      "https://github.com/user-attachments/assets/7cffebfb-cf0c-4a0f-ade2-9f216b908be6",
    link: "/blog/career-guidance/",
    date: "27th Feb 2025",
    tags: [],
  },
  {
    id: 2,
    title: "Career Coaching vs Career Counselling",
    description:
      "Understanding the distinction between career counseling and career coaching helps you make informed decisions that shape your future.",
    image:
      "https://github.com/user-attachments/assets/0d280d15-f9c1-4e1d-b1b8-17fee7287ec0",

    link: "/blog/coaching-vs-counselling/",
    date: "27th Feb 2025",
    tags: [],
  },
];

const FeaturedBlogs = () => {
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
          <div
            className="flex transition-transform duration-500 items-center justify-center ease-in-out gap-6 flex-col sm:flex-row"
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
                <a
                  href={blog.link}
                  className="block h-full transition-transform hover:scale-105"
                  aria-label={`Read more about ${blog.title}`}
                >
                  <BlogCard blog={blog} isLinkWrapper={true} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
