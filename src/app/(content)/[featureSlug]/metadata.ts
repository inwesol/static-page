import { generateMetadata as baseGenerateMetadata } from "@/utils";
import { availableFeatures } from "./features";

const isValidSlug = (slug: string): slug is keyof typeof availableFeatures => {
  return slug in availableFeatures;
};

export const generateMetadata = ({ params }: { params: { featureSlug: string } }) => {
  if (!isValidSlug(params.featureSlug)) {
    return baseGenerateMetadata({
      title: "Not Found",
      path: "/404",
    });
  }

  const feature = availableFeatures[params.featureSlug];
  return baseGenerateMetadata({
    title: feature.heading,
    description: feature.oneLiner,
    path: `/${params.featureSlug}`,
  });
};
