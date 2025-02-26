"use client";

import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import TableOfContents from "./content";

interface BlogLayoutProps {
  markdownContent: string;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ markdownContent }) => {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const elements = contentRef.current.querySelectorAll("h1, h2, h3");
    const newHeadings = Array.from(elements).map((el) => {
      const text = el.textContent || "";
      const id = text.toLowerCase().replace(/\s+/g, "-");
      const level = parseInt(el.tagName.charAt(1));
      el.id = id;
      return { id, text, level };
    });
    setHeadings(newHeadings);
  }, [markdownContent]);

  return (
    <div className="min-h-screen bg-white flex flex-col px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Banner */}
      <header className="w-full max-w-6xl mx-auto mb-6 relative">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src="https://github.com/user-attachments/assets/0d280d15-f9c1-4e1d-b1b8-17fee7287ec0"
            alt="Blog Banner"
            className="w-full h-40 sm:h-48 lg:h-56 object-cover"
          />
          <div className="p-5 border-t border-[#00B24B]/20 flex justify-between items-center">
            <div>
              <p className="flex flex-row gap-2 text-sm items-center">
                {/* <span className="text-muted-foreground">Author: </span>{" "}
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>John Johnsen</span> */}
              </p>
            </div>

            <p className="text-sm text-gray-500">
              February 26, 2025 • 5 min read
            </p>
          </div>
        </div>
      </header>

      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-6">
        <main className="flex-1 bg-white rounded-xl shadow-md p-6 sm:p-8 lg:p-12">
          <div ref={contentRef}>
            <ReactMarkdown
              children={markdownContent}
              components={{
                h1: ({ children }) => {
                  const id = String(children)
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  return (
                    <h1
                      id={id}
                      className="text-3xl sm:text-4xl font-bold text-gray-900 mt-8 mb-6 border-b border-[#00B24B]/30 pb-3"
                    >
                      {children}
                    </h1>
                  );
                },
                h2: ({ children }) => {
                  const id = String(children)
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  return (
                    <h2
                      id={id}
                      className="text-2xl font-semibold text-gray-800 mt-6 mb-4 border-l-4 border-[#3FA1D8] pl-4"
                    >
                      {children}
                    </h2>
                  );
                },
                h3: ({ children }) => {
                  const id = String(children)
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  return (
                    <h3
                      id={id}
                      className="text-xl font-medium text-gray-700 my-6"
                    >
                      {children}
                    </h3>
                  );
                },
                p: ({ children }) => (
                  <p className="text-base text-gray-700 leading-loose my-4">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 my-4 text-gray-700 space-y-1.5">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-6 my-4 text-gray-700 space-y-1.5">
                    {children}
                  </ol>
                ),
                li: ({ children }) => <li className="py-1">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="my-4 text-gray-600 italic bg-gray-100 p-4 rounded-md border-l-4 border-[#00B24B]/50">
                    {children}
                  </blockquote>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    className="text-[#3FA1D8] hover:text-[#00B24B] transition-all font-medium underline"
                  >
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md font-mono text-sm">
                    {children}
                  </code>
                ),
              }}
            />
          </div>
        </main>

        <TableOfContents headings={headings} />
      </div>
    </div>
  );
};

export default BlogLayout;
