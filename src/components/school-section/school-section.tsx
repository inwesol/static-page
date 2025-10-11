"use client";

import React from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AnimationContainer } from "@/components";
import MagicBadge from "../ui/magic-badge";
import Link from "next/link";
import Image from "next/image";

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
import { ArrowRight, Handshake, School } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const SchoolSection = () => {
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
          <MagicBadge title="Reimagine Schools" color="#3fa1d8" />
        </AnimationContainer>

        <AnimationContainer delay={0.4}>
          <div className="flex-col flex gap-10 lg:gap-4 lg:items-center lg:flex-row">
            <div className="">
              <h1 className="pb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-snug">
                <p className="leading-tight">Enabling Schools With </p>
                <p className="py-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-green-600 to-primary-blue-600">
                  Learning Mindset
                </p>
              </h1>
              <p className="text-slate-900 text-lg mt-2 mb-6 sm:text-xl font-light">
                We believe adolescence is a time for self-discovery. Thus, we
                enable schools <br /> with a learning mindset ecosystem that
                supports students to become their best selves, shape their
                future, and aspire towards excellence.
              </p>
              <p className="text-2xl font-bold text-accent">
                Our Motto: self-discovery leads to excellence
              </p>
              <div className="flex justify-center pt-4">
                <Link href="/school">
                  <Button className=" mt-4 group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary-green-500 to-primary-blue-500 hover:from-primary-green-600 hover:to-primary-blue-600 text-white sm:font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out text-sm sm:text-lg sm:px-10 sm:py-7">
                    <div className="flex items-center gap-2">
                      <School className="size-4 sm:size-5 " />
                      <span>Know More about Schools</span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />

                    {/*shine effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/school-view.svg"
                alt="Think Different"
                width={1200}
                height={800}
                // fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </AnimationContainer>

        {/* <AnimationContainer delay={0.5}>
          <button
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
          </button>
        </AnimationContainer> */}

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
    </>
  );
};

export default SchoolSection;
