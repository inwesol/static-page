"use client";
import { StarIcon } from "lucide-react";
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import MagicBadge from "../ui/magic-badge";
import MagicCard from "../ui/magic-card";
import { REVIEWS } from "@/utils/constants/misc";

const Testimonials = () => {
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

      {/* Infinite Scrollable Container */}
      <div className="py-10">
        <div className="overflow-hidden">
          <div className="flex animate-scroll gap-6">
            {/* First set of reviews */}
            {REVIEWS.map((review, index) => (
              <AnimationContainer
                className="flex-shrink-0 w-80"
                delay={0.2 * index}
                key={`first-${index}`}
              >
                <MagicCard className="md:p-0 h-full">
                  <Card className="flex flex-col w-full border-none h-full">
                    <CardHeader className="space-y-0">
                      <CardTitle className="text-lg font-medium text-muted-foreground">
                        {review.name}
                      </CardTitle>
                      <CardDescription>{review.position}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 pb-4 flex-1">
                      <p className="text-muted-foreground">{review.review}</p>
                    </CardContent>
                    <CardFooter className="w-full space-x-1 mt-auto">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <StarIcon
                          key={i}
                          className="w-4 h-4 fill-yellow-500 text-yellow-500"
                        />
                      ))}
                    </CardFooter>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            ))}

            {REVIEWS.map((review, index) => (
              <AnimationContainer
                className="flex-shrink-0 w-80"
                delay={0.2 * index}
                key={`dup-${index}`}
              >
                <MagicCard className="md:p-0 h-full">
                  <Card className="flex flex-col w-full border-none h-full">
                    <CardHeader className="space-y-0">
                      <CardTitle className="text-lg font-medium text-muted-foreground">
                        {review.name}
                      </CardTitle>
                      <CardDescription>{review.position}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 pb-4 flex-1">
                      <p className="text-muted-foreground">{review.review}</p>
                    </CardContent>
                    <CardFooter className="w-full space-x-1 mt-auto">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <StarIcon
                          key={i}
                          className="w-4 h-4 fill-yellow-500 text-yellow-500"
                        />
                      ))}
                    </CardFooter>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            ))}
          </div>
        </div>

        <style jsx>{`
          .scroll-container {
            overflow: hidden;
            white-space: nowrap;
          }

          .animate-scroll {
            display: inline-flex;
            animation: scroll ${REVIEWS.length * 8}s linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(
                -50%
              ); /* Only move half since content is duplicated */
            }
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Pause on Hover Styles */}
        {/* <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(
                calc(-320px * ${REVIEWS.length} - 24px * ${REVIEWS.length})
              );
            }
          }

          .animate-scroll {
            animation: scroll ${REVIEWS.length * 8}s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style> */}
      </div>
    </MaxWidthWrapper>
  );
};

export default Testimonials;
