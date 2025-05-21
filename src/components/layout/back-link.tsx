"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import React from "react";

const BackLink: React.FC = () => {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  return (
    <div className="w-full max-w-6xl mx-auto">
      {from === "home" ? (
        <Link
          href="/"
          className="inline-flex justify-center items-center px-4 py-2 text-primary1 rounded-md text-base font-bold"
        >
          ← Back to Home
        </Link>
      ) : (
        <Link
          href="/blog"
          className="inline-flex justify-center items-center px-4 py-2 text-primary1 rounded-md text-base font-bold"
        >
          ← Back to Blogs
        </Link>
      )}
    </div>
  );
};

export default BackLink;
