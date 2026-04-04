"use client";

// ─── Cal.com config ─────────────────────────────────────────────────────────
// Replace with your real cal.com event slug once your account is live.
const CAL_LINK = "inwesol-q6q9rh/45mins";

import Cal from "@calcom/embed-react";
import { AnimationContainer } from "@/components";
import HeroHeading from "./hero-heading";

const TICKER_ITEMS = [
  { name: "Priya", city: "Mumbai", ago: "2 min ago" },
  { name: "Arjun", city: "Bangalore", ago: "5 min ago" },
  { name: "Sneha", city: "Delhi", ago: "11 min ago" },
  { name: "Rohan", city: "Pune", ago: "18 min ago" },
  { name: "Ananya", city: "Chennai", ago: "24 min ago" },
  { name: "Kabir", city: "Hyderabad", ago: "31 min ago" },
  { name: "Meera", city: "Ahmedabad", ago: "42 min ago" },
  { name: "Vikram", city: "Kolkata", ago: "55 min ago" },
];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function HeroVariantC() {
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

      {/* Live booking ticker */}
      <AnimationContainer
        delay={0.45}
        reverse
        viewport
        className="w-full max-w-2xl"
      >
        <div className="overflow-hidden rounded-full border border-primary-green-200 bg-primary-green-50/60 py-2 px-4">
          <div className="flex w-max animate-ticker gap-10 whitespace-nowrap">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-green-600" />
                </span>
                <span className="font-semibold text-gray-900">{item.name}</span>
                from {item.city} booked a session ·{" "}
                <span className="text-gray-500">{item.ago}</span>
              </span>
            ))}
          </div>
        </div>
      </AnimationContainer>

      {/* Subtitle */}
      <AnimationContainer delay={0.5} reverse viewport>
        <p className="w-full text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-xs sm:max-w-[1200px] px-4 sm:px-8 md:px-0 leading-relaxed">
          By cultivating a{" "}
          <span className="font-bold text-accent">
            &quot;Learning Mindset&quot;
          </span>
          , we nurture students to be future-ready. <br /> We help them achieve
          a stress-free mind, gain career clarity, and take confident actions
          for overall growth.
        </p>
      </AnimationContainer>

      {/* Inline cal.com calendar */}
      <AnimationContainer delay={0.65} reverse viewport className="w-full">
        <p className="text-center text-base sm:text-base font-semibold text-primary-green-600 tracking-wider mb-4">
          Book your free coaching session now!
        </p>
        <div className="w-full max-w-[1000px] mx-auto rounded-2xl overflow-hidden">
          <div className="max-lg:max-h-[min(88vh,720px)] max-lg:overflow-y-auto max-lg:overscroll-y-contain">
            <Cal
              calLink={CAL_LINK}
              style={{ width: "100%", minHeight: 480, border: "none" }}
              config={{ theme: "light", layout: "month_view" }}
            />
          </div>
        </div>
      </AnimationContainer>
    </section>
  );
}
