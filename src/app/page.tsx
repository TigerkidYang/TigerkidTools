import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:py-24">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl">
          Welcome to TigerkidTools
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          A curated collection of high-quality, free, and easy-to-use online
          tools to make your life easier.
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
    </div>
  );
}
