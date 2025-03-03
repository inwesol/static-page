import Features from "./features-client";
import { generateMetadata } from "./metadata";

export { generateMetadata };

export default function NewPage({
  params,
}: {
  params: { featureSlug: string };
}) {
  return <Features params={params} />;
}
