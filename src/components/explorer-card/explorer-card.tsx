"use client";

import React from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AnimationContainer } from "@/components";

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
          <span
            className="text-base sm:text-lg font-semibold text-[#00B24B]"
            aria-label="Create your own success story"
          >
            Take a step towards self-discovery.
          </span>
        </AnimationContainer>

        <AnimationContainer delay={0.4}>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 max-w-screen-lg leading-snug">
            The AI Career Coach is launched! <br />
            Freely access CoCo as an early user.
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

          <button
            onClick={() =>
              window.open(
                "https://app.inwesol.com",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="inline-block px-8 sm:px-10 py-2 sm:py-3 bg-primary-green-600 text-white font-semibold text-sm sm:text-base rounded-full hover:bg-primary-green-500 focus:outline-none focus:ring-2 focus:ring-primary-green-600 focus:ring-offset-2 transition duration-200"
            aria-label="Access CoCo from here"
          >
            Access CoCo from here
          </button>
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
