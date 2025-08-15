import { tools } from "@/lib/tools";
import { Card, CardHeader, CardContent } from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools - TigerkidTools",
  description:
    "A collection of free and easy-to-use online tools for developers, designers, and everyone.",
  alternates: {
    canonical: "https://tigerkidtools.com/tools",
  },
  openGraph: {
    title: "Tools - TigerkidTools",
    description:
      "A collection of free and easy-to-use online tools for developers, designers, and everyone.",
    url: "https://tigerkidtools.com/tools",
    siteName: "TigerkidTools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools - TigerkidTools",
    description:
      "A collection of free and easy-to-use online tools for developers, designers, and everyone.",
  },
};

export default function ToolsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
          All Tools
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Here is a list of all the awesome tools available on TigerkidTools.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Card key={tool.slug} href={`/tools/${tool.slug}`}>
              <CardHeader>{tool.title}</CardHeader>
              <CardContent>{tool.description}</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
