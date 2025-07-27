export interface Tool {
  slug: string;
  title: string;
  description: string;
  category: string;
}

export const tools: Tool[] = [
  {
    slug: "coast-fire-calculator",
    title: "Coast FIRE Calculator",
    description:
      "Calculate your Coast FIRE number and discover how much you need to save now to coast to financial independence by your target retirement age.",
    category: "Finance",
  },
  {
    slug: "fasting-calculator",
    title: "Fasting Calculator",
    description:
      "Plan your intermittent fasting window and estimate potential weight loss with our comprehensive fasting calculator.",
    category: "Health",
  },
  {
    slug: "debt-snowball-calculator",
    title: "Debt Snowball Calculator",
    description:
      "Create a customized payoff plan and see how fast you can become debt-free.",
    category: "Finance",
  },
];
