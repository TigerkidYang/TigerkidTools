import Link from "next/link";
import { tools } from "@/lib/tools";
import { Card, CardHeader, CardContent } from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Online Calculators & Tools - TigerkidTools",
  description:
    "Discover our collection of free, professional-grade online calculators and tools. From financial planning with Coast FIRE and debt snowball calculators to health optimization with fasting calculators.",
  alternates: {
    canonical: "https://tigerkidtools.com",
  },
  openGraph: {
    title: "Free Online Calculators & Tools - TigerkidTools",
    description:
      "Professional-grade calculators for financial planning, health optimization, and more. All completely free to use.",
    url: "https://tigerkidtools.com",
    siteName: "TigerkidTools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Calculators & Tools - TigerkidTools",
    description:
      "Professional-grade calculators for financial planning, health optimization, and more. All completely free to use.",
  },
};

export default function Home() {
  // 获取前3个最受欢迎的工具用于首页展示
  const featuredTools = tools.slice(0, 3);

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:py-24">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl">
          Free Online Tools by TigerkidTools
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Discover our collection of free, professional-grade online calculators
          and tools. From financial planning with our Coast FIRE and debt
          snowball calculators to health optimization with our fasting
          calculator - everything you need in one place.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/tools"
            className="rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Browse All Tools
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50"
          >
            Read the Blog <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
            Popular Calculators & Tools
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Get started with our most popular free online tools
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <Card key={tool.slug} href={`/tools/${tool.slug}`}>
              <CardHeader>{tool.title}</CardHeader>
              <CardContent>{tool.description}</CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-300"
          >
            View all {tools.length} tools
            <span aria-hidden="true" className="ml-1">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
            Why Choose TigerkidTools?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                <svg
                  className="h-6 w-6 text-gray-600 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.41-.81-2.031-1.614-.781-.912-.781-2.46 0-3.372C10.59 6.81 11.275 6 12 6Z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-50">
              100% Free
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              All our calculators and tools are completely free to use. No
              hidden fees or subscriptions.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                <svg
                  className="h-6 w-6 text-gray-600 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-50">
              Accurate Results
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Built with scientific formulas and industry standards for reliable
              calculations.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                <svg
                  className="h-6 w-6 text-gray-600 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-50">
              Mobile Friendly
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              All tools are optimized for mobile devices and work seamlessly
              across all platforms.
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "TigerkidTools",
            description:
              "Free online calculators and tools for financial planning, health optimization, and productivity.",
            url: "https://tigerkidtools.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://tigerkidtools.com/tools?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            mainEntity: {
              "@type": "ItemList",
              name: "Free Online Tools",
              description:
                "Collection of professional-grade calculators and tools",
              numberOfItems: tools.length,
              itemListElement: tools.slice(0, 3).map((tool, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "WebPage",
                  name: tool.title,
                  description: tool.description,
                  url: `https://tigerkidtools.com/tools/${tool.slug}`,
                },
              })),
            },
          }),
        }}
      />
    </div>
  );
}
