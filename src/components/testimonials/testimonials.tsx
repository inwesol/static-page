"use client";
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import MagicBadge from "../ui/magic-badge";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { REVIEWS } from "@/utils/constants/misc";

const Testimonials = () => {
  // Transform REVIEWS data to match InfiniteMovingCards format
  const testimonials = REVIEWS.map((review) => ({
    quote: "review" in review ? (review as any).review : undefined,
    name: review.name,
    title: review.position,
    rating: review.rating,
    videoUrl: "videoUrl" in review ? (review as any).videoUrl : undefined, // YouTube URL or direct video file URL
  }));

  return (
    <MaxWidthWrapper className="py-10 max-w-7xl">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
          <MagicBadge title="Testimonials" />
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold font-heading leading-snug mt-6">
            What Our Users Say About Their Self-Discovery Journey
          </h2>
          <p className="text-center text-base sm:text-md md:text-lg leading-relaxed max-w-2xl mt-4 text-neutral-700">
            Real stories of transformation, growth, and newfound clarity.
          </p>
        </div>
      </AnimationContainer>

      {/* Infinite Moving Cards */}
      <div className="py-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default Testimonials;
