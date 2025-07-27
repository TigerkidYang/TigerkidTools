import { blogs } from "@/lib/blogs";
import { Card, CardHeader, CardContent } from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - TigerkidTools",
  description:
    "Read articles and tutorials about finance, development, and more.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
          Blog
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Insights, tutorials, and thoughts on various topics.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {blogs.map((blog) => (
            <Card key={blog.slug} href={`/blog/${blog.slug}`}>
              <CardHeader>{blog.title}</CardHeader>
              <CardContent>
                <p className="mb-2 text-xs text-gray-500">{blog.date}</p>
                {blog.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
