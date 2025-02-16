"use client";

import React from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AnimationContainer } from "@/components";
import HeroHeading from "./HeroHeading";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// mt-8 md:mt-12 lg:mt-32

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
    <section className="flex flex-col items-center justify-center pb-16 px-4 space-y-6 lg:space-y-12 h-screen">
      <AnimationContainer delay={0.4} reverse viewport>
        <HeroHeading />
      </AnimationContainer>

      {/* Our Motto:  self-discovery leads to excellence */}

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

        {/* <p className="w-full text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-xs sm:max-w-[600px] px-4 sm:px-8 md:px-0 leading-relaxed">
          Coaching individuals to thrive in their careers through the{" "}
          <span className="whitespace-nowrap">self-discovery</span> of their{" "}
          <span className="text-primary1 font-bold">&quot;why&quot;</span>
        </p> */}
      </AnimationContainer>

      <div className="flex items-center justify-center">
        <AnimationContainer delay={0.7} reverse viewport>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 flex h-fit items-center justify-center gap-2"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex h-fit items-center justify-center gap-2">
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input
                          className="md:w-64"
                          placeholder="Your email address"
                          {...field}
                        />
                      </FormControl>
                      <button
                        className="relative px-6 py-3 border-[1px] border-[#00B24B] bg-[#00B24B] text-white font-semibold rounded-[10px] 
      hover:bg-[#00A143] transition-colors duration-200 
      text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#00B24B] focus:ring-offset-2 
      disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto 
      before:absolute before:inset-0 before:rounded-[10px] before:border-[2px] before:border-[#3FA1D8] before:opacity-0
      before:transition-opacity before:duration-300 before:animate-border-glow"
                        type="submit"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting
                          ? "Submitting..."
                          : "Notify Me!"}
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>

          {/* <button
            className="relative px-6 py-3 border-[1px] border-[#00B24B] bg-[#00B24B] text-white font-semibold rounded-[10px] 
      hover:bg-[#00A143] transition-colors duration-200 
      text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#00B24B] focus:ring-offset-2 
      disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto 
      before:absolute before:inset-0 before:rounded-[10px] before:border-[2px] before:border-[#3FA1D8] before:opacity-0
      before:transition-opacity before:duration-300 before:animate-border-glow"
          >
            Begin Your Journey
          </button> */}
        </AnimationContainer>
      </div>
    </section>
  );
};

export default HeroSection;
