"use client";

// ─── Cal.com configs ─────────────────────────────────────────────────────────
// Replace slugs with your real cal.com event URLs once your account is live.
const CAL_LINKS = {
  student: "inwesol-q6q9rh/45mins",
  parent: "inwesol-q6q9rh/45mins",
  school: "inwesol-q6q9rh/45mins",
} as const;

type Audience = keyof typeof CAL_LINKS;

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCalApi } from "@calcom/embed-react";
import { AnimationContainer } from "@/components";
import HeroHeading from "./hero-heading";

const AUDIENCE_CONFIG: Record<
  Audience,
  { label: string; emoji: string; subtitle: string; cta: string }
> = {
  student: {
    label: "Student",
    emoji: "🎓",
    subtitle:
      "Discover your strengths, clarify your career path, and build the mindset to thrive academically and beyond.",
    cta: "Book a Career Clarity Session",
  },
  parent: {
    label: "Parent",
    emoji: "👨‍👩‍👧",
    subtitle:
      "Learn how to support your child's growth, reduce exam stress, and set them up for a future-ready life.",
    cta: "Book a Parent Strategy Call",
  },
  school: {
    label: "School / Corp",
    emoji: "🏫",
    subtitle:
      "Bring our coaching programs into your institution to transform student well-being and performance at scale.",
    cta: "Book a Partnership Discovery Call",
  },
};

const AUDIENCES: Audience[] = ["student", "parent", "school"];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function HeroVariantB() {
  const [audience, setAudience] = useState<Audience>("student");

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const config = AUDIENCE_CONFIG[audience];
  const calLink = CAL_LINKS[audience];

  return (
    <section className="flex flex-col items-center justify-center pb-16 px-4 space-y-6 lg:space-y-10 pt-16">
      {/* Announcement pill */}
      <AnimationContainer delay={0.3} reverse viewport>
        <div className="relative group">
          <a
            href="/coco"
            className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-br from-primary-green-400 via-primary-green-600 to-primary-blue-600 text-slate-800 font-semibold text-xs sm:text-sm shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 max-w-[90vw] sm:max-w-none relative overflow-hidden backdrop-blur-sm border border-white/10 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:rounded-full after:absolute after:inset-[1px] after:rounded-full after:bg-gradient-to-br after:from-transparent after:via-white/10 after:to-white/5"
          >
            <span className="text-2xl animate-bounce shrink-0">🪄</span>
            <span className="sm:inline">
              CoCo : AI Mindset Coach is Launched!
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 sm:h-4 sm:w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </AnimationContainer>

      {/* Heading */}
      <AnimationContainer delay={0.4} reverse viewport>
        <HeroHeading />
      </AnimationContainer>

      {/* Audience segmentation tabs */}
      <AnimationContainer delay={0.45} reverse viewport>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-500 font-medium">Who are you?</p>
          <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
            {AUDIENCES.map((a) => {
              const isActive = audience === a;
              return (
                <button
                  key={a}
                  onClick={() => setAudience(a)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="audience-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-green-600 to-primary-blue-500"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">
                    {AUDIENCE_CONFIG[a].emoji} {AUDIENCE_CONFIG[a].label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </AnimationContainer>

      {/* Dynamic subtitle per audience */}
      <AnimatePresence mode="wait">
        <motion.p
          key={audience}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="w-full text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-xs sm:max-w-[680px] px-4 sm:px-8 md:px-0 leading-relaxed"
        >
          {config.subtitle}
        </motion.p>
      </AnimatePresence>

      {/* Dynamic CTA per audience */}
      <AnimationContainer delay={0.6} reverse viewport>
        <button
          data-cal-link={calLink}
          data-cal-config='{"layout":"month_view"}'
          onClick={() =>
            window.gtag?.("event", "hero_cta_click", {
              variant: "B",
              audience,
              cal_link: calLink,
            })
          }
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-primary-green-600 to-primary-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <span className="text-xl animate-bounce shrink-0">🚀</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={audience + "-cta"}
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.2 }}
            >
              {config.cta}
            </motion.span>
          </AnimatePresence>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </AnimationContainer>
    </section>
  );
}
