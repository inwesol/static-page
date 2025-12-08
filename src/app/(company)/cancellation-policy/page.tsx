import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { generateMetadata } from "@/utils";
import Link from "next/link";
import React from "react";

export const metadata = generateMetadata({
  title: "Cancellation Policy",
  path: "/cancellation-policy",
});

const CancellationPolicy = () => {
  return (
    <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
      <AnimationContainer delay={0.1} className="w-full">
        <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
          Cancellation Policy
        </h1>
        <p className="text-sm mb-2 italic mt-20">
          Last updated: 01st August 2025
        </p>

        <h2 className="text-xl font-medium mt-8">
          1. Cancellation Notice Requirement
        </h2>
        <p className="mt-4">
          All cancellation or withdrawal requests must be submitted in writing
          via email to contact@inwesol.com. Requests through any other channel
          will not be considered valid.
        </p>
        <h2 className="text-xl font-medium mt-8">2. Mandatory Exit Call</h2>
        <p className="mt-4">
          Once a cancellation email is received, Inwesol will schedule a brief
          exit confirmation call. Cancellation will be considered complete only
          after this call.
        </p>
        <h2 className="text-xl font-medium mt-8">
          3. Cancellations Within 48 Hours of Program Start
        </h2>
        <p className="mt-4">
          If a program is cancelled less than 48 hours before commencement, no
          refund will be applicable, regardless of the reason.
        </p>
        <h2 className="text-xl font-medium mt-8">
          4. Cancellations After Program Start
        </h2>
        <p className="mt-4">
          Any cancellation requested after the program has begun is considered a
          post-commencement withdrawal, and such cases are not eligible for
          refunds or fee adjustments.
        </p>
        <h2 className="text-xl font-medium mt-8">
          5. Program or Service Modifications
        </h2>
        <p className="mt-4">
          Inwesol reserves the right to modify, postpone, or update its programs
          and policies at any time. Any changes will be communicated through
          official channels and updated on the website with the revised
          effective date.
        </p>

        <div className="flex flex-row items-center justify-center my-10 w-full">
          <Link href="/">
            <Button className="px-6 py-3 bg-[#3FA1D8] text-white rounded-xl font-semibold shadow-lg hover:bg-[#00B24B] transition-all">
              Back to homepage
            </Button>
          </Link>
        </div>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};

export default CancellationPolicy;
