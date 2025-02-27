"use client";

import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AnimationContainer } from "@/components";
import HeroHeading from "./hero-heading";

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
    <section className="flex flex-col items-center justify-center pb-16 px-4 space-y-6 lg:space-y-12 h-screen max-h-[800px]">
      <AnimationContainer delay={0.4} reverse viewport>
        <HeroHeading />
      </AnimationContainer>

      <AnimationContainer delay={0.5} reverse viewport>
        <p className="w-full text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-xs sm:max-w-[1200px] px-4 sm:px-8 md:px-0 leading-relaxed">
          <span className="hidden sm:block">
            Coaching individuals to thrive in their careers through the{" "}
            <span className="whitespace-nowrap">self-discovery</span> of their{" "}
            <span className="text-accent font-bold">&quot;why&quot;</span>
            <br />
            Knowing your purpose brings clarity, builds confidence, and reduces
            stress, leading to a more purposeful career.
            <br />
          </span>
          <span className="text-accent font-bold">
            Our Motto: self-discovery leads to excellence
          </span>
        </p>
      </AnimationContainer>

      <div className="flex items-center justify-center">
        <AnimationContainer delay={0.7} reverse viewport>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex h-fit items-center justify-center gap-2"
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
                            : "Get Started"}
                        </button>
                      </div>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </AnimationContainer>
      </div>
    </section>
  );
};

export default HeroSection;
