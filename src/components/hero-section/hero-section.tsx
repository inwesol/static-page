"use client";

import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AnimationContainer } from "@/components";
import HeroHeading from "./hero-heading";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const HeroSection = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        // Reset form or show success message
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      // Show error message to user
    }
  }

  return (
    <section className="flex flex-col items-center justify-center pb-16 px-4 space-y-6 lg:space-y-12 pt-16">
      <AnimationContainer delay={0.3} reverse viewport>
        <div className="relative group">
          <a
            href="/coco"
            // target="_blank"
            // rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-br from-primary-green-400 via-primary-green-600 to-primary-blue-600 text-slate-800 font-semibold text-xs sm:text-sm shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 max-w-[90vw] sm:max-w-none relative overflow-hidden backdrop-blur-sm border border-white/10 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:rounded-full after:absolute after:inset-[1px] after:rounded-full after:bg-gradient-to-br after:from-transparent after:via-white/10 after:to-white/5"
          >
            <span className="text-2xl animate-bounce shrink-0">🪄</span>
            {/* <span className="truncate"></span> */}
            {/* <span className="hidden sm:block">Access your Mindset Coach, </span> */}
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

      <AnimationContainer delay={0.4} reverse viewport>
        <HeroHeading />
      </AnimationContainer>

      <AnimationContainer delay={0.5} reverse viewport>
        <p className="w-full text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-xs sm:max-w-[1200px] px-4 sm:px-8 md:px-0 leading-relaxed">
          By cultivating a{" "}
          <span className="font-bold text-accent">
            &quot;Learning Mindset&quot;
          </span>
          , we nurture students to be future-ready. <br /> We help them achieve
          a stress-free mind, gain career clarity, and take confident actions
          for overall growth.
          {/* <span className="hidden sm:block">
            Coaching individuals to thrive in their careers through the{" "}
            <span className="whitespace-nowrap">self-discovery</span> of their{" "}
            <span className="font-bold text-accent">&quot;why&quot;.</span>
            <br />
            Knowing your purpose brings clarity, builds confidence, and reduces
            stress, leading to a more purposeful career.
            <br />
          </span>
          <span className="font-bold text-accent">
            Our Motto: self-discovery leads to excellence
          </span> */}
        </p>
      </AnimationContainer>

      <AnimationContainer delay={0.3} reverse viewport>
        <div className="relative group flex sm:gap-4 flex-col sm:flex-row items-center sm:items-stretch gap-6">
          {/* <a
            className="bg-[conic-gradient(from_var(--border-angle),#00b24b,#3FA1D8,yellow,#00b24b)] rounded-full p-[2px] -animate--animate-rotate-border hover:scale-105 transform transition-all hover:shadow-xl flex cursor-pointer overflow-hidden items-center box-border"
            href="/career-test"
          >
            <div className="bg-white text-black font-semibold rounded-full flex items-center px-2 sm:px-4 self-stretch w-full py-2 justify-center sm:text-sm text-xs">
              Check Career Readiness
            </div>
          </a> */}
          <a
            href="/parents"
            className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-primary-green-600 to-primary-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 max-w-[90vw] sm:max-w-none"
          >
            <span className="text-xl animate-bounce shrink-0">🚀</span>
            <span className="sm:inline">Book Free Coaching Session Now!</span>
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

      {/* <AnimationContainer delay={0.6} reverse viewport>
        <div className="w-full flex justify-center">
          <video
            src="/assets/coco.mp4"
            className="rounded-xl shadow-lg max-w-full h-auto max-h-[600px] border border-gray-200"
            autoPlay
            loop
            muted
            playsInline
            // controls
          />
        </div>
      </AnimationContainer> */}
    </section>
  );
};

export default HeroSection;
