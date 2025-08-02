export interface Tool {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedDate: string; // 添加发布日期
}

export const tools: Tool[] = [
  {
    slug: "coast-fire-calculator",
    title: "Coast FIRE Calculator",
    description:
      "Calculate your Coast FIRE number and discover how much you need to save now to coast to financial independence by your target retirement age.",
    category: "Finance",
    publishedDate: "2025-07-15", // 合理的发布日期
  },
  {
    slug: "fasting-calculator",
    title: "Fasting Calculator",
    description:
      "Plan your intermittent fasting window and estimate potential weight loss with our comprehensive fasting calculator.",
    category: "Health",
    publishedDate: "2025-07-20", // 合理的发布日期
  },
  {
    slug: "debt-snowball-calculator",
    title: "Debt Snowball Calculator",
    description:
      "Create a customized payoff plan and see how fast you can become debt-free.",
    category: "Finance",
    publishedDate: "2025-07-10", // 合理的发布日期
  },
];
