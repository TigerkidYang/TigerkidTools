import { notFound } from "next/navigation";
import { tools } from "@/lib/tools";
import type { Metadata } from "next";

// Statically generate paths for all tool pages
export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

// Dynamically generate metadata for each tool page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    return {
      title: "Tool Not Found - TigerkidTools",
      description: "The requested tool was not found.",
    };
  }

  // Set specific SEO metadata for debt snowball calculator
  if (slug === "debt-snowball-calculator") {
    return {
      title:
        "Debt Snowball Calculator - Create Your Debt Payoff Plan & Become Debt-Free",
      description:
        "Use our free debt snowball calculator to create a customized payoff plan. See how fast you can become debt-free by focusing on your smallest debts first. Start your journey to financial freedom today.",
      alternates: {
        canonical: `https://tigerkidtools.com/tools/${slug}`,
      },
      openGraph: {
        title:
          "Debt Snowball Calculator - Create Your Debt Payoff Plan & Become Debt-Free",
        description:
          "Use our free debt snowball calculator to create a customized payoff plan. See how fast you can become debt-free by focusing on your smallest debts first.",
        url: `https://tigerkidtools.com/tools/${slug}`,
        siteName: "TigerkidTools",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title:
          "Debt Snowball Calculator - Create Your Debt Payoff Plan & Become Debt-Free",
        description:
          "Use our free debt snowball calculator to create a customized payoff plan. See how fast you can become debt-free by focusing on your smallest debts first.",
      },
    };
  }

  // Set specific SEO metadata for Coast FIRE calculator
  if (slug === "coast-fire-calculator") {
    return {
      title:
        "Coast FIRE Calculator: Calculate Your Coast FI Number & Financial Independence Timeline",
      description:
        "Calculate your Coast FIRE number with our free calculator. Discover how much you need to save now to coast to financial independence by your target retirement age. Plan your FI journey today.",
      alternates: {
        canonical: `https://tigerkidtools.com/tools/${slug}`,
      },
      openGraph: {
        title:
          "Coast FIRE Calculator: Calculate Your Coast FI Number & Financial Independence Timeline",
        description:
          "Calculate your Coast FIRE number with our free calculator. Discover how much you need to save now to coast to financial independence by your target retirement age.",
        url: `https://tigerkidtools.com/tools/${slug}`,
        siteName: "TigerkidTools",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title:
          "Coast FIRE Calculator: Calculate Your Coast FI Number & Financial Independence Timeline",
        description:
          "Calculate your Coast FIRE number with our free calculator. Discover how much you need to save now to coast to financial independence by your target retirement age.",
      },
    };
  }

  // Set specific SEO metadata for fasting calculator
  if (slug === "fasting-calculator") {
    return {
      title:
        "Fasting Calculator: Plan Your Intermittent Fasting Window & Estimate Weight Loss",
      description:
        "Use our free fasting calculator to find your ideal intermittent fasting window (16:8, 20:4, etc.) and estimate your potential weight loss during a fast. Plan your schedule and achieve your goals.",
      alternates: {
        canonical: `https://tigerkidtools.com/tools/${slug}`,
      },
      openGraph: {
        title:
          "Fasting Calculator: Plan Your Intermittent Fasting Window & Estimate Weight Loss",
        description:
          "Use our free fasting calculator to find your ideal intermittent fasting window (16:8, 20:4, etc.) and estimate your potential weight loss during a fast.",
        url: `https://tigerkidtools.com/tools/${slug}`,
        siteName: "TigerkidTools",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title:
          "Fasting Calculator: Plan Your Intermittent Fasting Window & Estimate Weight Loss",
        description:
          "Use our free fasting calculator to find your ideal intermittent fasting window (16:8, 20:4, etc.) and estimate your potential weight loss during a fast.",
      },
    };
  }

  // Default metadata for other tools
  return {
    title: `${tool.title} - TigerkidTools`,
    description: tool.description,
    alternates: {
      canonical: `https://tigerkidtools.com/tools/${slug}`,
    },
    openGraph: {
      title: `${tool.title} - TigerkidTools`,
      description: tool.description,
      url: `https://tigerkidtools.com/tools/${slug}`,
      siteName: "TigerkidTools",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.title} - TigerkidTools`,
      description: tool.description,
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  // Dynamically import specific tool components
  if (slug === "debt-snowball-calculator") {
    const { DebtSnowballCalculatorPage } = await import(
      "./debt-snowball-calculator/DebtSnowballCalculatorPage"
    );
    return <DebtSnowballCalculatorPage />;
  }

  if (slug === "coast-fire-calculator") {
    const { CoastFireCalculatorPage } = await import(
      "./coast-fire-calculator/CoastFireCalculatorPage"
    );
    return <CoastFireCalculatorPage />;
  }

  if (slug === "fasting-calculator") {
    const { FastingCalculatorPage } = await import(
      "./fasting-calculator/FastingCalculatorPage"
    );
    return <FastingCalculatorPage />;
  }

  // If tool is not yet implemented, show placeholder page
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
        {tool.title}
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        {tool.description}
      </p>
      <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800">
        <p className="text-gray-600 dark:text-gray-300">
          This tool is coming soon. Please check back later!
        </p>
      </div>
    </div>
  );
}
