import Link from "next/link";

export function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white sm:text-2xl"
        >
          TigerkidTools
        </Link>
        <div className="flex items-center space-x-4 text-sm font-medium text-gray-300">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <Link href="/tools" className="transition-colors hover:text-white">
            Tools
          </Link>
          <Link href="/blog" className="transition-colors hover:text-white">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
