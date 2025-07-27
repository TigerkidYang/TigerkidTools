import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function Card({ href, className, children }: CardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-lg border bg-white p-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600",
        className
      )}
    >
      {children}
    </Link>
  );
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return <div className={cn("font-bold text-lg", className)}>{children}</div>;
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return (
    <div
      className={cn("text-sm text-gray-600 dark:text-gray-300 mt-2", className)}
    >
      {children}
    </div>
  );
}
