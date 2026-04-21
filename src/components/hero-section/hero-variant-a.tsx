"use client";

// ─── Cal.com config ─────────────────────────────────────────────────────────
// Replace with your real cal.com event slug once your account is live.
const CAL_LINK = "inwesol-q6q9rh/45mins";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { AnimationContainer } from "@/components";
import HeroHeading from "./hero-heading";

const SOCIAL_AVATARS = [
  { initials: "PR", color: "bg-primary-green-500" },
  { initials: "AK", color: "bg-primary-blue-500" },
  { initials: "SM", color: "bg-amber-400" },
  { initials: "NR", color: "bg-rose-400" },
];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function HeroVariantA() {
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

  return (
    <section className="flex flex-col items-center justify-center pb-16 px-4 space-y-6 lg:space-y-12 pt-16">
      {/* Announcement pill */}
      <AnimationContainer delay={0.3} reverse viewport>
        <div className="relative group">
          <a
            href="/coco"
            className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-br from-primary-green-600 via-primary-green-700 to-primary-blue-700 text-white font-semibold text-xs sm:text-sm shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 max-w-[90vw] sm:max-w-none relative overflow-hidden backdrop-blur-sm border border-white/10 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:rounded-full after:absolute after:inset-[1px] after:rounded-full after:bg-gradient-to-br after:from-transparent after:via-white/10 after:to-white/5"
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

      {/* Subtitle */}
      <AnimationContainer delay={0.5} reverse viewport>
        <p className="w-full text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-xs sm:max-w-[1200px] px-4 sm:px-8 md:px-0 leading-relaxed">
          We coach young people on a self-discovery journey to embrace a{" "}
          <span className="font-bold text-accent">
            &quot;Learning Mindset&quot;
          </span>
          . <br />
          We help them gain career clarity, manage stress, and take confident
          actions for overall growth.
        </p>
      </AnimationContainer>

      {/* CTA + social proof */}
      <AnimationContainer delay={0.6} reverse viewport>
        <div className="flex flex-col items-center gap-4">
          {/* Cal.com popup trigger */}
          <button
            data-cal-link={CAL_LINK}
            data-cal-config='{"layout":"month_view"}'
            onClick={() =>
              window.gtag?.("event", "hero_cta_click", {
                variant: "A",
                cal_link: CAL_LINK,
              })
            }
            className="inline-flex items-center gap-1 sm:gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-primary-green-600 to-primary-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span className="text-xl animate-bounce shrink-0">🚀</span>
            <span>Book Free Coaching Session Now!</span>
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

          {/* Social proof strip */}
          <div className="flex items-center gap-3">
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              {SOCIAL_AVATARS.map((a) => (
                <div
                  key={a.initials}
                  className={`w-8 h-8 rounded-full ${a.color} flex items-center justify-center text-white text-[10px] font-bold border-2 border-white shadow-sm`}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            {/* Stats text */}
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">500+ students</span>{" "}
              coached ·{" "}
              <span className="text-amber-500 font-semibold">⭐ 4.9/5</span>
            </p>
          </div>
        </div>
      </AnimationContainer>
    </section>
  );
}
