export interface Blog {
  slug: string;
  title: string;
  description: string;
  date: string;
  relatedToolSlug?: string;
}

export const blogs: Blog[] = [
  {
    slug: "deconstructing-the-coast-fire-calculator",
    title: "Deconstructing the Coast FIRE Calculator: The Math Behind Financial Freedom",
    description:
      "A technical deep dive into the formulas and financial principles powering our Coast FIRE Calculator, showing you exactly how we map your path to financial independence.",
    date: "2025-08-03",
    relatedToolSlug: "coast-fire-calculator",
  },
  {
    slug: "the-science-and-code-behind-our-fasting-calculator",
    title: "The Science & Code Behind Our Fasting Calculator: A Deep Dive",
    description:
      "Explore the metabolic science, mathematical formulas, and React/TypeScript code that powers our Fasting Calculator. From BMR calculations using the Mifflin-St Jeor equation to component architecture.",
    date: "2025-08-02",
    relatedToolSlug: "fasting-calculator",
  },
  {
    slug: "how-we-built-it-debt-snowball-calculator-algorithm",
    title: "How We Built It: The Algorithm Behind the Debt Snowball Calculator",
    description:
      "A deep dive into the logic, math, and code that powers our Debt Snowball Calculator. Learn how we simulate the month-by-month debt payoff process and why smallest balance first works.",
    date: "2025-08-02",
    relatedToolSlug: "debt-snowball-calculator",
  },
];
