export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-center px-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {currentYear} TigerkidTools. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
