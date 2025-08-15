import { blogs } from "@/lib/blogs";
import { Card, CardHeader, CardContent } from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - TigerkidTools",
  description:
    "Read articles and tutorials about finance, development, and more.",
  alternates: {
    canonical: "https://tigerkidtools.com/blog",
  },
  openGraph: {
    title: "Blog - TigerkidTools",
    description:
      "Read articles and tutorials about finance, development, and more.",
    url: "https://tigerkidtools.com/blog",
    siteName: "TigerkidTools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - TigerkidTools",
    description:
      "Read articles and tutorials about finance, development, and more.",
  },
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

        {blogs.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {blogs.map((blog) => (
              <Card key={blog.slug} href={`/blog/${blog.slug}`}>
                <CardHeader>{blog.title}</CardHeader>
                <CardContent>
                  <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
                    {blog.date}
                  </p>
                  {blog.description}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-8">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-12 text-center dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                High-Quality Blog Content Coming Soon
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I&apos;m carefully preparing high-quality blog articles covering
                personal finance, health optimization, tool development, and
                more. Stay tuned!
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Want to learn more about the thinking and technical
                implementation behind our tools? Follow our blog updates.
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
