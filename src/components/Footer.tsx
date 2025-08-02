import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} TigerkidTools. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/about"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
            >
              About Tigerkid
            </Link>
            <Link
              href="/tools"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
            >
              All Tools
            </Link>
            <Link
              href="/blog"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
