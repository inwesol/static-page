
"use client";

import { useState, useMemo, ChangeEvent } from "react";
import BlogCard, { Blog } from "../featured-blogs/blog-card";

// Define filter categories as a const array and derive a union type
const filterCategories = [
  "All",
  "Technology",
  "Finance",
  "Health",
  "Design",
] as const;
type FilterCategory = (typeof filterCategories)[number];

const BlogListPage = ({ blogs }: { blogs: Blog[] }) => {
  const [selectedFilters, setSelectedFilters] = useState<Set<FilterCategory>>(
    new Set(["All" as any])
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"date" | "title">("date");

  // Handle filter toggle
  const toggleFilter = (filter: FilterCategory): void => {
    setSelectedFilters((prev) => {
      const newFilters = new Set(prev);
      if (filter === "All") {
        return new Set(["All" as any]);
      }
      if (newFilters.has("All")) {
        newFilters.delete("All");
      }
      if (newFilters.has(filter)) {
        newFilters.delete(filter);
      } else {
        newFilters.add(filter);
      }
      return newFilters.size === 0 ? new Set(["All"]) : newFilters;
    });
  };

  // Handle search input change
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  // Handle sort change
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSortBy(e.target.value as "date" | "title");
  };

  // Memoized filtered and sorted blogs
  const processedBlogs = useMemo<Blog[]>(() => {
    let result = [...blogs];

    // Apply filters
    if (!selectedFilters.has("All")) {
      result = result.filter((blog) =>
        blog.tags.some((tag) => selectedFilters.has(tag as FilterCategory))
      );
    }

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.description.toLowerCase().includes(query) ||
          blog.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.title.localeCompare(b.title);
    });

    return result;
  }, [blogs, selectedFilters, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-accent/10 px-4 sm:px-6 lg:px-8 py-12 pt-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Blog Explorer
        </h1>
        <p className="text-gray-700 text-base sm:text-lg">
          Discover insightful articles and updates on various topics
        </p>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto mb-10 space-y-6">
        {/* Search Bar */}
        <div className="relative mx-auto w-full sm:w-[640px] lg:w-[960px]">
          <input
            type="text"
            placeholder="Search blogs by title, content, or tags..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-5 py-3 rounded-full bg-white border border-gray-300 focus:border-[#00B24B] focus:ring-2 focus:ring-[#00B24B]/20 outline-none transition-all text-gray-700 placeholder-gray-400"
          />
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mx-auto w-full sm:w-[640px] lg:w-[960px]">
          <div className="flex flex-wrap justify-center gap-2">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  selectedFilters.has(filter)
                    ? "bg-[#00B24B] text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="relative">
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="appearance-none w-full px-4 py-2 pr-10 rounded-full bg-white border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00B24B]/20"
            >
              <option value="date">Sort by Date</option>
              <option value="title">Sort by Title</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto">
        {processedBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No blogs found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-[repeat(2,320px)] lg:grid-cols-[repeat(3,320px)] gap-4 justify-center">
            {processedBlogs.map((blog) => (
              <div key={blog.id}>
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListPage;
