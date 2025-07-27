import { notFound } from "next/navigation";
import { blogs } from "@/lib/blogs";
import { tools } from "@/lib/tools";
import type { Metadata } from "next";
import { BlogContent } from "./BlogContent"; // Import the new client component

// Statically generate paths for all blog posts
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Dynamically generate metadata for each blog page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const fullUrl = `https://tigerkidtools.com/blog/${blog.slug}`;

  return {
    title: `${blog.title} - TigerkidTools Blog`,
    description: blog.description,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: fullUrl,
      siteName: "TigerkidTools",
      type: "article",
      publishedTime: new Date(blog.date).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
    },
  };
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const relatedTool = tools.find((t) => t.slug === blog.relatedToolSlug);

  return <BlogContent blog={blog} relatedTool={relatedTool} />;
}
