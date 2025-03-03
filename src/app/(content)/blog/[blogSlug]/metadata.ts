import { generateMetadata as baseGenerateMetadata } from "@/utils";
import { availableBlogs } from "./blog-content";

const isValidSlug = (slug: string): slug is keyof typeof availableBlogs => {
  return slug in availableBlogs;
};

export const generateMetadata = ({ params }: { params: { blogSlug: string } }) => {
  if (!isValidSlug(params.blogSlug)) {
    return baseGenerateMetadata({
      title: "Not Found",
      path: "/404",
    });
  }

  const blog = availableBlogs[params.blogSlug];
  return baseGenerateMetadata({
    title: blog.heading,
    description: blog.oneLiner,
    path: `/blog/${params.blogSlug}`,
  });
};
