"use client";

import { cn } from "@/utils/index";
import React, { useEffect, useState, useCallback } from "react";
import { StarIcon } from "lucide-react";

// Utility function to convert YouTube URL to embed URL
const getYouTubeEmbedUrl = (url: string): string | null => {
  if (!url) return null;

  // Handle various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  }

  return null;
};

// Check if URL is a YouTube URL
const isYouTubeUrl = (url: string): boolean => {
  return /youtube\.com|youtu\.be/.test(url);
};

// Check if URL is a direct video file
const isVideoFile = (url: string): boolean => {
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url);
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote?: string;
    highlight?: string;
    name: string;
    title: string;
    rating?: number;
    videoUrl?: string; // YouTube URL or direct video file URL
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = React.useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);

  const getSpeed = React.useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = React.useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => {
          const hasVideo = !!item.videoUrl;
          const videoUrl = item.videoUrl || "";
          const isYouTube = hasVideo && isYouTubeUrl(videoUrl);
          const isDirectVideo = hasVideo && isVideoFile(videoUrl);
          const youtubeEmbedUrl =
            hasVideo && isYouTube ? getYouTubeEmbedUrl(videoUrl) : null;

          return (
            <li
              className={cn(
                "relative shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#f0f9f4,#e8f5ed)] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#1a2e1f,#0f1a12)]",
                hasVideo
                  ? "w-[350px] max-w-full md:w-[450px] p-0 overflow-hidden h-[400px] md:h-[500px]"
                  : "w-[350px] max-w-full px-8 py-6 md:w-[450px]"
              )}
              key={`${item.name}-${idx}`}
            >
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>

              {hasVideo ? (
                // Video testimonial card
                <div className="relative z-20 flex flex-col h-full">
                  <div className="relative w-full h-[80%] bg-black">
                    {isYouTube && youtubeEmbedUrl ? (
                      <iframe
                        src={youtubeEmbedUrl}
                        title={`${item.name} testimonial`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    ) : isDirectVideo && item.videoUrl ? (
                      <video
                        src={item.videoUrl}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                      />
                    ) : null}
                  </div>
                  <div className="px-6 py-4 h-[20%] flex flex-col justify-center">
                    {/* {item.rating && (
                      <div className="flex space-x-1 mb-3">
                        {Array.from({ length: item.rating }, (_, i) => (
                          <StarIcon
                            key={i}
                            className="w-4 h-4 fill-yellow-500 text-yellow-500"
                          />
                        ))}
                      </div>
                    )} */}
                    <div className="flex flex-col gap-1">
                      <span className="text-sm leading-[1.5] font-semibold text-neutral-900 dark:text-gray-100">
                        {item.name}
                      </span>
                      <span className="text-sm leading-[1.5] font-semibold text-neutral-900 dark:text-gray-400">
                        {item.title}
                      </span>
                    </div>
                    {/* {item.quote && (
                      <p className="text-sm leading-[1.6] font-normal text-neutral-700 dark:text-gray-300 mt-3 line-clamp-2">
                        {item.quote}
                      </p>
                    )} */}
                  </div>
                </div>
              ) : (
                // Text testimonial card
                <blockquote>
                  {item.highlight && (
                    <div className="relative z-20 mb-4">
                      <span className="text-lg md:text-xl font-bold italic text-neutral-800 dark:text-gray-100">
                        &ldquo;{item.highlight}&rdquo;
                      </span>
                    </div>
                  )}
                  <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                    {item.quote}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-col gap-2">
                    {/* {item.rating && (
                      <div className="flex space-x-1">
                        {Array.from({ length: item.rating }, (_, i) => (
                          <StarIcon
                            key={i}
                            className="w-4 h-4 fill-yellow-500 text-yellow-500"
                          />
                        ))}
                      </div>
                    )} */}
                    <div className="flex flex-col gap-1">
                      <span className="text-sm leading-[1.5] font-semibold text-neutral-900 dark:text-gray-400">
                        {item.name}
                      </span>
                      <span className="text-sm leading-[1.5] font-semibold text-neutral-900 dark:text-gray-400">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </blockquote>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
