import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tigerkid - Creator of Free Online Calculators & Tools",
  description:
    "Meet Tigerkid, the creator behind TigerkidTools. Learn about his passion for personal finance, health optimization, and building free tools to help people live better lives.",
  alternates: {
    canonical: "https://tigerkidtools.com/about",
  },
  openGraph: {
    title: "About Tigerkid - Creator of Free Online Calculators & Tools",
    description:
      "Meet the creator behind TigerkidTools and discover the story behind our free calculators and tools.",
    url: "https://tigerkidtools.com/about",
    siteName: "TigerkidTools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tigerkid - Creator of Free Online Calculators & Tools",
    description:
      "Meet the creator behind TigerkidTools and discover the story behind our free calculators and tools.",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
            About Tigerkid
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            The story behind TigerkidTools and the passion for helping people
            live better lives
          </p>
        </header>

        <section className="mb-12">
          <h2>Who is Tigerkid?</h2>
          <p>
            Hello! I'm <strong>Tigerkid</strong>, the creator and developer
            behind TigerkidTools. I'm passionate about researching and exploring
            topics that help people live better, more fulfilling lives. My
            journey led me to dive deep into several key areas that I believe
            are fundamental to human wellbeing.
          </p>
        </section>

        <section className="mb-12">
          <h2>My Areas of Focus</h2>

          <h3>Personal Finance & Financial Independence</h3>
          <p>
            Financial health is the foundation of life freedom. I've spent
            countless hours studying personal finance strategies, from the{" "}
            <strong>FIRE movement</strong> (Financial Independence, Retire
            Early) to debt management techniques like the{" "}
            <strong>debt snowball method</strong>. This research directly
            inspired tools like our{" "}
            <Link
              href="/tools/coast-fire-calculator"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Coast FIRE Calculator
            </Link>{" "}
            and{" "}
            <Link
              href="/tools/debt-snowball-calculator"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Debt Snowball Calculator
            </Link>
            .
          </p>

          <h3>Physical Health & Wellness</h3>
          <p>
            Your body is your most important asset. I'm fascinated by
            evidence-based approaches to health optimization, including{" "}
            <strong>intermittent fasting</strong>, nutrition science, and
            sustainable lifestyle changes. The{" "}
            <Link
              href="/tools/fasting-calculator"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Fasting Calculator
            </Link>{" "}
            was born from my deep dive into the science of fasting and its
            metabolic benefits.
          </p>

          <h3>Mental Health & Life Optimization</h3>
          <p>
            Mental wellbeing is just as crucial as physical and financial
            health. I study psychology, productivity systems, and evidence-based
            approaches to happiness and life satisfaction. While not yet
            reflected in tools, this research informs the holistic approach
            behind everything I create.
          </p>
        </section>

        <section className="mb-12">
          <h2>Why I Build These Tools</h2>
          <p>
            My philosophy is simple:{" "}
            <strong>
              knowledge should be accessible, and good tools should be free
            </strong>
            . Throughout my research, I often found myself needing calculators
            and tools that either didn't exist, were behind paywalls, or were
            unnecessarily complicated.
          </p>

          <p>
            So I decided to build them myself—not just for my own use, but to
            share with anyone who might benefit. Every tool on TigerkidTools is:
          </p>

          <ul>
            <li>
              <strong>Completely free</strong> - No subscriptions, no hidden
              fees
            </li>
            <li>
              <strong>Built with care</strong> - Based on scientific formulas
              and best practices
            </li>
            <li>
              <strong>User-focused</strong> - Simple interfaces that anyone can
              use
            </li>
            <li>
              <strong>Mobile-friendly</strong> - Works perfectly on any device
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>The Technical Side</h2>
          <p>
            As a developer, I believe in building tools that are not only
            functional but also fast, accessible, and reliable. TigerkidTools is
            built with modern web technologies:
          </p>

          <ul>
            <li>
              <strong>Next.js & React</strong> for a fast, interactive
              experience
            </li>
            <li>
              <strong>TypeScript</strong> for reliable, bug-free calculations
            </li>
            <li>
              <strong>Tailwind CSS</strong> for a clean, responsive design
            </li>
            <li>
              <strong>Static generation</strong> for lightning-fast loading
            </li>
          </ul>

          <p>
            I also write{" "}
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              blog articles
            </Link>{" "}
            that dive deep into the algorithms and science behind each tool,
            because I believe in transparency and education.
          </p>
        </section>

        <section className="mb-12">
          <h2>My Mission</h2>
          <p>
            My goal is to democratize access to the tools and knowledge that can
            genuinely improve people's lives. Whether you're planning for
            financial independence, optimizing your health, or just trying to
            make better decisions, I want to provide you with the resources you
            need—completely free.
          </p>

          <p>
            If you find these tools helpful, that's all the reward I need. And
            if you have ideas for new tools or improvements, I'd love to hear
            from you.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2>Get Started</h2>
          <p className="mb-6">
            Ready to optimize your life? Check out our most popular tools:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/tools/coast-fire-calculator"
              className="block p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Coast FIRE Calculator
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Plan your path to financial independence
              </p>
            </Link>

            <Link
              href="/tools/debt-snowball-calculator"
              className="block p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Debt Snowball Calculator
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Create your debt payoff plan
              </p>
            </Link>

            <Link
              href="/tools/fasting-calculator"
              className="block p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Fasting Calculator
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Optimize your fasting schedule
              </p>
            </Link>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/tools"
              className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              View All Tools
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </article>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Tigerkid - Creator of TigerkidTools",
            description:
              "Learn about Tigerkid, the creator behind TigerkidTools, and his passion for personal finance, health optimization, and building free tools.",
            url: "https://tigerkidtools.com/about",
            mainEntity: {
              "@type": "Person",
              name: "Tigerkid",
              description:
                "Creator and developer of TigerkidTools, passionate about personal finance, health optimization, and building free online tools.",
              knowsAbout: [
                "Personal Finance",
                "FIRE Movement",
                "Debt Management",
                "Intermittent Fasting",
                "Health Optimization",
                "Web Development",
                "Financial Independence",
              ],
              creator: {
                "@type": "WebSite",
                name: "TigerkidTools",
                url: "https://tigerkidtools.com",
              },
            },
          }),
        }}
      />
    </div>
  );
}
