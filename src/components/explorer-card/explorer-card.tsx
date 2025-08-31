"use client";

import React from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AnimationContainer } from "@/components";
import MagicBadge from "../ui/magic-badge";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { ArrowRight, School, Smile } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const ExplorerCard = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
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
    <>
      <section className="w-full bg-[#F8F4EB] py-10 md:py-14 text-center flex flex-col items-center gap-5 px-6">
        <AnimationContainer delay={0.3}>
          {/* <span
            className="text-base sm:text-lg font-semibold text-[#00B24B]"
            aria-label="Create your own success story"
          >
            CoCo : AI Mindset Coach is launched!
          </span> */}
          <MagicBadge title="CoCo : AI Mindset Coach" color="#3fa1d8" />
        </AnimationContainer>

        <AnimationContainer delay={0.4}>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 max-w-screen-lg leading-snug">
            CoCo : AI Mindset Coach is launched! <br /> An Ally For Your Career,
            Wellbeing & Journey
          </h3>
        </AnimationContainer>

        <AnimationContainer delay={0.5}>
          {/* <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 flex h-fit items-center justify-center gap-2"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>

                    <div className="w-full max-w-xl mx-auto mt-6">
                      <div className="relative">
                        <FormControl>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                            className="w-full h-14 px-4 pr-40 rounded-full border border-gray-300 bg-white shadow-sm font-medium text-sm sm:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3FA1D8] transition"
                            aria-label="Email address"
                            required
                          />
                        </FormControl>

                        <button
                          type="submit"
                          className="absolute top-1/2 right-1.5 transform -translate-y-1/2 h-11 px-5 bg-gradient-to-r from-[#00B24B] to-[#009B40] text-white text-sm font-medium rounded-full hover:from-[#009B40] hover:to-[#007F33] transition focus:outline-none focus:ring-4 focus:ring-green-400/70 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={form.formState.isSubmitting}
                          aria-disabled={form.formState.isSubmitting}
                        >
                          {form.formState.isSubmitting
                            ? "Submitting..."
                            : "Notify Me"}
                        </button>
                      </div>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form> */}

          <div className="flex justify-center sm:py-2 py-0">
            <Link
              href="https://app.inwesol.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className=" mt-4 group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary-green-500 to-primary-blue-500 hover:from-primary-green-600 hover:to-primary-blue-600 text-white sm:font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out text-sm sm:text-lg sm:px-10 sm:py-7">
                <div className="flex items-center gap-2">
                  <Smile className="size-4 sm:size-5 " />
                  <span>Say Hi to CoCo 👋</span>
                </div>
                {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /> */}

                {/*shine effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
              </Button>
            </Link>
          </div>

          {/* <button
            onClick={() =>
              window.open(
                "https://app.inwesol.com",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="inline-block px-6 sm:px-8 py-1 sm:py-2 bg-primary-green-600 text-white font-semibold text-sm sm:text-base rounded-full hover:bg-primary-green-500 focus:outline-none focus:ring-2 focus:ring-primary-green-600 focus:ring-offset-2 transition duration-200"
            aria-label="Say Hi to CoCo"
          >
            Say Hi to CoCo 👋
          </button> */}
        </AnimationContainer>

        <AnimationContainer delay={0.6} reverse viewport>
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
        </AnimationContainer>
      </section>

      {/* <section className="w-full bg-[#3FA1D8] py-10 md:py-14 text-center flex flex-col items-center gap-5 px-6">
        <span
          className="text-base sm:text-lg font-semibold text-[#F8F4EB]"
          aria-label="Create your own success story"
        >
          Create your own success story
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 max-w-screen-lg leading-snug">
          Join our exclusive community to stay ahead of the curve. Get early
          access to our platform.
        </h2>

        <button
          className="inline-block px-8 sm:px-10 py-3 sm:py-3.5 bg-[#00B24B] text-white font-semibold text-sm sm:text-base rounded-full hover:bg-[#00A143] focus:outline-none focus:ring-2 focus:ring-[#00B24B] focus:ring-offset-2 transition duration-200"
          aria-label="Join the waitlist"
        >
          Join Waitlist
        </button>
      </section> */}
    </>
  );
};

export default ExplorerCard;
