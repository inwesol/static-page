import BlogListPage from "@/components/blogs-list/blogs-list";
import { availableBlogs } from "@/app/(content)/blog/[blogSlug]/blog-content";
import { Blog } from "@/components/featured-blogs/blog-card"; // Adjust path if needed

const BlogPage: React.FC = () => {
  // Prepare blogs array
  const blogsArray: Blog[] = Object.entries(availableBlogs).map(
    ([slug, blog], index) => ({
      id: index + 1,
      slug: slug,
      title: blog.heading,
      description: blog.oneLiner || blog.content?.slice(0, 100) || "",
      image: blog.bannerUrl,
      date: blog.createdOn,
      readingTime: blog.readingTime,
      link: `/blog/${slug}/`,
      tags: blog.tags || [],
      ...blog,
    })
  );

  return (
    <>
      <BlogListPage blogs={blogsArray} />
    </>
  );
};

export default BlogPage;
