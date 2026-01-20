"use client";

import React from "react";
import { AnimationContainer } from "@/components";
import MagicBadge from "@/components/ui/magic-badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils";

const PricingSection = () => {
  const plans = [
    {
      name: "Mindset Essentials",
      info: "For parents exploring ways to support their teenager",
      price: "Free",
      priceDescription: "Get started with basic features",
      features: [
        "Future Readiness Assessment",
        "Explorer - Occupations Library",
        "CoCo - AI Mindset Coach",
        "Preliminary session with a Psychologist",
        'Workshops - "Know Your Why"',
      ],
      btn: {
        text: "Get Started",
        href: "/be-future-ready",
        variant: "outline" as const,
      },
      forWhom: "Parents",
    },
    {
      name: "Mindset Emergence",
      info: "For parents looking for structured guidance for their teenager",
      price: "₹18,880",
      priceDescription: "1 Year platform access",
      features: [
        "Everything in Mindset Essentials",
        "8 one-to-one Coaching Sessions for your Teenager",
        "Advanced Behavioural Tools",
        "Progress Tracking Dashboard",
        "Comprehensive Report",
        "Workshops for Teenagers & Parents",
        "Priority Support",
        "Internal Community Access",
      ],
      btn: {
        text: "Begin Transformation",
        href: "https://app.inwesol.com",
        variant: "primary" as const,
      },
      forWhom: "Parents",
    },
    {
      name: "Mindset Ecosystem",
      info: "For schools building a culture of learning mindset among students",
      price: "Custom",
      priceDescription: "Tailored for your school",
      features: [
        "Everything in Mindset Emergence",
        "Learning Mindset Ecosystem",
        "School Dashboard & Analytics",
        "Dedicated Support Manager",
        "Teacher Training & Resources",
        "Parent Engagement Tools",
        "Progress Reports & Insights",
      ],
      btn: {
        text: "Contact Us",
        href: "/school",
        variant: "outline" as const,
      },
      forWhom: "Schools",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-primary-green-50 via-white to-primary-blue-50 py-16 md:py-20">
      <AnimationContainer delay={0.2}>
        <div className="flex flex-col items-center justify-center w-full py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MagicBadge title="Pricing" />

          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold font-heading leading-snug mt-6">
            Choose the Right Plan to nurture{" "}
            <span className="text-transparent bg-gradient-to-r from-primary-green-600 to-primary-blue-600 bg-clip-text">
              Your Teenager&apos;s Mindset
            </span>
          </h2>

          <p className="text-center text-base sm:text-md md:text-lg leading-relaxed max-w-2xl mt-4 text-neutral-700">
            Flexible pricing options designed to support parents and schools in
            nurturing a strong learning mindset among teenagers.
          </p>
        </div>
      </AnimationContainer>

      <div className="w-full flex justify-center items-center mt-8 px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {plans.map((plan, index) => (
            <AnimationContainer key={plan.name} delay={(index + 1) * 0.2}>
              <Card
                className={cn(
                  "h-full flex flex-col border-2 transition-all duration-300 hover:shadow-xl",
                  plan.forWhom === "Parents"
                    ? "border-primary-green-500 shadow-lg scale-105 relative"
                    : plan.forWhom === "Schools"
                    ? "border-primary-blue-500 shadow-lg scale-105 relative"
                    : "border-border hover:border-primary-blue-300"
                )}
              >
                {plan.forWhom && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span
                      className={cn(
                        "text-white text-xs font-semibold px-4 py-1 rounded-full",
                        plan.forWhom === "Parents"
                          ? "bg-gradient-to-r from-primary-green-500 to-primary-blue-500"
                          : plan.forWhom === "Schools"
                          ? "bg-gradient-to-r from-primary-blue-500 to-purple-500"
                          : "bg-gradient-to-r from-primary-green-500 to-primary-blue-500"
                      )}
                    >
                      For {plan.forWhom}
                    </span>
                  </div>
                )}

                <CardHeader
                  className={cn(
                    "border-b rounded-t-2xl",
                    plan.forWhom === "Parents"
                      ? "bg-gradient-to-br from-primary-green-50 to-primary-blue-50"
                      : plan.forWhom === "Schools"
                      ? "bg-gradient-to-br from-primary-blue-50 to-purple-50"
                      : "bg-white"
                  )}
                >
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600 mt-2">
                    {plan.info}
                  </CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      {plan.price !== "Free" && plan.price !== "Custom" && (
                        <span className="text-lg text-gray-600">
                          (Inclusive of GST)
                        </span>
                      )}
                    </div>
                    {plan.priceDescription && (
                      <p className="text-sm text-gray-500 mt-1">
                        {plan.priceDescription}
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-6 flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2
                          className={cn(
                            "w-5 h-5 mt-0.5 flex-shrink-0",
                            plan.forWhom === "Parents"
                              ? "text-primary-green-600"
                              : plan.forWhom === "Schools"
                              ? "text-primary-blue-600"
                              : "text-primary-blue-600"
                          )}
                        />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6">
                  <Link href={plan.btn.href} className="w-full">
                    <Button
                      variant={plan.btn.variant}
                      className={cn(
                        "w-full group rounded-xl",
                        plan.forWhom === "Parents" &&
                          "bg-gradient-to-r from-primary-green-600 to-primary-blue-500 hover:from-primary-green-700 hover:to-primary-blue-600 text-white",
                        plan.forWhom === "Schools" &&
                          "bg-gradient-to-r from-primary-blue-600 to-purple-500 hover:from-primary-blue-700 hover:to-purple-600 text-white"
                      )}
                      size="lg"
                    >
                      {plan.btn.text}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </AnimationContainer>
          ))}
        </div>
      </div>

      <AnimationContainer delay={0.8}>
        <div className="flex flex-col items-center justify-center mt-12 px-4">
          <p className="text-center text-sm text-gray-600 max-w-2xl">
            Need help choosing the right plan?{" "}
            <a
              href="https://wa.me/918374315189"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-1 inline-flex items-center gap-1 text-primary-blue-600 hover:text-primary-blue-700 font-semibold underline"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Contact our team over WhatsApp
            </a>
          </p>
        </div>
      </AnimationContainer>
    </div>
  );
};

export default PricingSection;
