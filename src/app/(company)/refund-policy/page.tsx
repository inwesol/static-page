import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { generateMetadata } from "@/utils";
import Link from "next/link";
import React from "react";

export const metadata = generateMetadata({
  title: "Refund Policy",
  path: "/refund-policy",
});

const RefundPolicy = () => {
  return (
    <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
      <AnimationContainer delay={0.1} className="w-full">
        <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
          Refund Policy
        </h1>
        <p className="text-sm mb-2 italic mt-20">
          Last updated: 01st August 2025
        </p>
        <h2 className="text-xl font-medium mt-8">
          1. Program Refunds (Pre-Commencement)
        </h2>
        <p className="mt-4">
          Eligible refunds are permitted only if a participant submits a valid
          withdrawal request 48 hours prior to the program start date. Any
          applicable refund will be processed only after verification and
          completion of the exit call.
        </p>
        <h2 className="text-xl font-medium mt-8">
          2. No Refunds After Program Commencement
        </h2>
        <p className="mt-4">
          Once the program has begun, no refunds will be issued under any
          circumstances, including partial participation, missed sessions, or
          voluntary discontinuation.
        </p>
        <h2 className="text-xl font-medium mt-8">
          3. Non-Transferability of Fees
        </h2>
        <p className="mt-4">
          Program fees cannot be transferred to another participant, individual,
          or future program/cohort, regardless of the reason for withdrawal.
        </p>
        <h2 className="text-xl font-medium mt-8">4. Subscription Payments</h2>
        <p className="mt-4">
          Subscription-based services are non-refundable once activated.
          However, participants may cancel their subscription to avoid future
          billing. No refunds or credits will be issued for the remaining
          subscription period.
        </p>
        <h2 className="text-xl font-medium mt-8">5. Refund Timeline</h2>
        <p className="mt-4">
          For approved cases, refunds will be processed within 10–14 business
          days to the original mode of payment. Delays caused by banking
          partners or external gateways are outside Inwesol’s control.
        </p>

        <h2 className="text-xl font-medium mt-8">
          6. Program or Service Modifications
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

export default RefundPolicy;
