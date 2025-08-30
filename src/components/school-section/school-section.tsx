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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900">
                <p className="py-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-green-600 to-primary-blue-600">
                  Enabling Schools With Learning Mindset
                </p>
                {/* <p>Become a Coach with Inwesol</p> */}
              </h1>
              <p className="text-slate-900 text-sm sm:text-base mt-2 mb-6">
                We believe adolescence is a time for self-discovery. <br />
                Thus, we enable schools with a learning mindset ecosystem that
                supports <br />
                students to become their best selves, shape their future, and
                aspire towards excellence.
              </p>
              <p className="font-bold text-accent">
                Our Motto: self-discovery leads to excellence
              </p>
              <div className="flex items-center justify-center w-full pt-10 sm:pt-8">
                <Link href="/school">
                  <Button className="px-8 sm:px-10 py-3 sm:py-3.5 bg-[#00B24B] text-white text-sm sm:text-base rounded-full font-semibold shadow-lg hover:bg-[#00A143] focus:outline-none focus:ring-2 focus:ring-[#00B24B] focus:ring-offset-2 transition duration-200">
                    Know More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="">
              <Image
                src={"/school-sol.png"}
                alt="Think Different"
                width={1200}
                height={1200}
                className="object-cover"
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
