import BlogClient from "./blog-client";
import { generateMetadata } from "./metadata";

export { generateMetadata };

export default function BlogPage({ params }: { params: { blogSlug: string } }) {
  return <BlogClient params={params} />;
}
