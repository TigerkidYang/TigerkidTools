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
    title:
      "Deconstructing the Coast FIRE Calculator: The Math Behind Financial Freedom",
    description:
      "A technical deep dive into the formulas powering our Coast FIRE Calculator, including how we handle inflation, compound growth, and future value to map your path to financial independence.",
    date: "2025-07-27",
    relatedToolSlug: "coast-fire-calculator",
  },
  {
    slug: "building-a-debt-snowball-calculator-algorithm",
    title: "How We Built It: The Algorithm Behind the Debt Snowball Calculator",
    description:
      "Explore the logic and data structures used in our Debt Snowball Calculator. We'll cover how the algorithm sorts debts, allocates payments, and simulates the snowball effect month by month.",
    date: "2025-07-26",
    relatedToolSlug: "debt-snowball-calculator",
  },
  {
    slug: "the-science-behind-the-fasting-calculator",
    title: "The Science & Code Behind Our Fasting Calculator",
    description:
      "From calculating your fasting window to estimating weight loss with the Mifflin-St Jeor equation for BMR, this article breaks down the science and the TypeScript code that powers our Fasting Calculator.",
    date: "2025-07-25",
    relatedToolSlug: "fasting-calculator",
  },
];
