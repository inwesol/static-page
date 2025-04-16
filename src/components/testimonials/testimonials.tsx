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
    <MaxWidthWrapper className="py-10 max-w-5xl">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 max-w-4xl mx-auto">
        {REVIEWS.map((review, index) => (
          <AnimationContainer className="" delay={0.2 * index} key={index}>
            <MagicCard className="md:p-0">
              <Card className="flex flex-col w-full border-none h-full">
                <CardHeader className="space-y-0">
                  <CardTitle className="text-lg font-medium text-muted-foreground">
                    {review.name}
                  </CardTitle>
                  <CardDescription>{review.position}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pb-4">
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
    </MaxWidthWrapper>
  );
};

export default Testimonials;
