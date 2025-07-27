"use client";

import { useEffect } from "react";
import { notFound } from "next/navigation";
import { blogs, Blog } from "@/lib/blogs";
import { tools, Tool } from "@/lib/tools";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { Card, CardHeader, CardContent } from "@/components/Card";

// A more detailed content generator for the technical blogs.
const generateDummyContent = (slug: string) => {
  if (slug === "deconstructing-the-coast-fire-calculator") {
    return `
      <p>The concept of "Financial Independence, Retire Early" (FIRE) has many flavors, but "Coast FIRE" is one of the most flexible and achievable. It revolves around a powerful idea: front-load your savings aggressively so your investment portfolio can grow to your full retirement number on its own, powered by compound interest, without you needing to contribute another dollar. This post provides a technical deep dive into the formulas and financial principles powering our <a href="/tools/coast-fire-calculator" class="text-blue-600 hover:underline dark:text-blue-400">Coast FIRE Calculator</a>.</p>
      
      <h3>Core Principle: The Time Value of Money</h3>
      <p>At its heart, any FIRE calculation is an application of the time value of money, which states that a sum of money today is worth more than the same sum in the future due to its potential earning capacity. We use two fundamental formulas: Future Value (FV) and Present Value (PV).</p>
      <pre><code class="language-js">// How much money will be worth in the future
FutureValue = PresentValue * (1 + Rate)^Nper

// How much future money is worth today
PresentValue = FutureValue / (1 + Rate)^Nper</code></pre>
      <p>Our calculator uses these principles to determine your "Coast FIRE Number" – the Present Value of your total retirement nest egg.</p>
      
      <h3>Step 1: Calculating Your Target Retirement Amount (The FIRE Number)</h3>
      <p>Before we can find your Coast FIRE number, we must first define the finish line: your total retirement fund, or "FIRE Number". This is the amount of money you'll need on the day you retire to live off the returns indefinitely. We calculate this using the 4% Safe Withdrawal Rate (SWR) rule, which is a common heuristic in retirement planning.</p>
      <pre><code class="language-js">FIRE_Number_in_Todays_Dollars = Annual_Expenses_in_Todays_Dollars / (SWR / 100)</code></pre>
      <p>For example, if your annual expenses are $50,000, your FIRE number in today's money is $50,000 / 0.04 = $1,250,000.</p>
      
      <h3>Step 2: The Critical Role of Inflation</h3>
      <p>A common mistake is to aim for $1,250,000 without considering inflation. The purchasing power of that money will be significantly less in 30 years. Our calculator correctly adjusts your target for inflation first.</p>
      <pre><code class="language-js">Future_Annual_Expenses = Annual_Expenses_in_Todays_Dollars * (1 + Inflation_Rate)^Years_to_Retirement
Future_FIRE_Number = Future_Annual_Expenses / (SWR / 100)</code></pre>
      <p>Using a 3% inflation rate, that $50,000 in annual expenses becomes $121,363 in 30 years. Your actual target (Future FIRE Number) is therefore $121,363 / 0.04 = ~$3,034,000.</p>
      
      <h3>Step 3: Calculating Your Coast FIRE Number</h3>
      <p>Now we can calculate the Coast FIRE number. It's the Present Value of your Future FIRE Number, discounted by your expected investment return.</p>
      <pre><code class="language-js">Coast_FIRE_Number = Future_FIRE_Number / (1 + Expected_Annual_Return)^Years_to_Retirement</code></pre>
      <p>If we expect a 7% annual return, your Coast FIRE number is $3,034,000 / (1.07)^30 = ~$398,550.</p>
      <p>This is the magic number. It means if you have $398,550 invested today, you can theoretically stop saving and still reach your $3M retirement goal in 30 years. Explore your own numbers with our <a href="/tools/coast-fire-calculator" class="text-blue-600 hover:underline dark:text-blue-400">Coast FIRE Calculator</a>.</p>
    `;
  }
  if (slug === "building-a-debt-snowball-calculator-algorithm") {
    return `
      <p>The Debt Snowball method is a powerful debt-reduction strategy that prioritizes behavioral psychology over pure mathematical optimization. The goal is to build momentum by knocking out small debts first, creating a feeling of progress that keeps you motivated. This article details the algorithm and data structures that power our <a href="/tools/debt-snowball-calculator" class="text-blue-600 hover:underline dark:text-blue-400">Debt Snowball Calculator</a>.</p>
      
      <h3>Data Structure: The Debt Object</h3>
      <p>The foundation of our calculator is a well-defined TypeScript interface for each debt. This ensures data integrity and makes the logic easier to manage.</p>
      <pre><code class="language-typescript">interface Debt {
  id: string;          // Unique identifier for React keys
  name: string;        // User-defined name, e.g., "Visa Card"
  balance: number;     // The current amount owed
  minPayment: number;  // The required minimum monthly payment
  interestRate: number; // The Annual Percentage Rate (APR)
}</code></pre>
      
      <h3>Step 1: The Sorting Core</h3>
      <p>This is the defining step of the Debt Snowball method. Before any calculations begin, the array of debt objects is sorted by the <code>balance</code> property in ascending order. This ensures we always target the smallest debt first.</p>
      <pre><code class="language-js">// Create a mutable copy to avoid altering the original state directly
let debtStatuses = debts.map(d => ({ ...d })); 
const sortedDebts = debtStatuses.sort((a, b) => a.balance - b.balance);</code></pre>
      
      <h3>Step 2: The Monthly Amortization Loop</h3>
      <p>The calculator's engine is a <code>while</code> loop that simulates the payoff process month by month. The loop continues as long as any debt's balance is greater than zero, representing the entire duration of the debt payoff journey.</p>
      <pre><code class="language-js">let month = 0;
let totalSnowball = extraPayment;

while (debtStatuses.some(debt => debt.balance > 0)) {
  month++;
  // ... payment allocation logic inside ...
}</code></pre>

      <h3>Step 3: Payment Allocation Logic</h3>
      <p>Inside the loop, for each month, we iterate through the <em>sorted</em> debts and apply payments:</p>
      <ol>
        <li><strong>Calculate Interest:</strong> First, we calculate the interest accrued for the month on the current balance of every debt and add it to the balance. <code>monthlyInterest = balance * (interestRate / 100 / 12)</code></li>
        <li><strong>Pay Minimums:</strong> We allocate the minimum payment to every debt that still has a balance. This is crucial to keep accounts in good standing.</li>
        <li><strong>Apply the Snowball:</strong> The entire snowball amount (your initial extra payment + the minimum payments of any now-paid-off debts) is applied to the first debt in the sorted list (the one with the smallest balance).</li>
        <li><strong>Check for Payoff:</strong> After payments are applied, we check if any debt's balance has dropped to zero. If a debt is paid off, its <code>minPayment</code> is added to the <code>totalSnowball</code> variable for all subsequent months.</li>
      </ol>
      <p>This iterative process precisely models the snowball's growing power and is how our <a href="/tools/debt-snowball-calculator" class="text-blue-600 hover:underline dark:text-blue-400">calculator</a> generates its detailed amortization schedule.</p>
    `;
  }
  if (slug === "the-science-behind-the-fasting-calculator") {
    return `
      <p>Our <a href="/tools/fasting-calculator" class="text-blue-600 hover:underline dark:text-blue-400">Fasting Calculator</a> provides two key pieces of information: your fasting/eating schedule and an estimation of potential weight loss. While the schedule is simple time-based math, the weight loss estimation is grounded in well-established metabolic science. This article breaks down the equations and assumptions.</p>
      
      <h3>Core Concept: The Energy Balance Equation</h3>
      <p>Weight loss is fundamentally about energy balance. If your energy expenditure is greater than your energy intake, you will lose weight. During a fast, your energy intake is zero, making the calculation more straightforward.</p>
      
      <h3>Step 1: Basal Metabolic Rate (BMR) with Mifflin-St Jeor</h3>
      <p>To estimate your energy expenditure, we must first calculate your Basal Metabolic Rate (BMR)—the number of calories your body burns at rest. We use the Mifflin-St Jeor equation, which is widely regarded by nutritionists as more accurate than the older Harris-Benedict equation.</p>
      <p>The formula differs slightly by gender:</p>
      <pre><code class="language-js">// Weight in kg, height in cm, age in years
const BMR_for_Men = (10 * weight) + (6.25 * height) - (5 * age) + 5;
const BMR_for_Women = (10 * weight) + (6.25 * height) - (5 * age) - 161;</code></pre>
      
      <h3>Step 2: Total Daily Energy Expenditure (TDEE)</h3>
      <p>BMR is only your resting metabolism. To get your Total Daily Energy Expenditure (TDEE), we multiply your BMR by an activity factor. These factors are standardized estimates:</p>
      <ul>
        <li><strong>Sedentary (office job):</strong> BMR x 1.2</li>
        <li><strong>Lightly Active (light exercise 1-3 days/week):</strong> BMR x 1.375</li>
        <li><strong>Moderately Active (moderate exercise 3-5 days/week):</strong> BMR x 1.55</li>
        <li><strong>Very Active (hard exercise 6-7 days/week):</strong> BMR x 1.725</li>
      </ul>
      <pre><code class="language-js">const TDEE = BMR * activityMultiplier;</code></pre>
      
      <h3>Step 3: Calculating Weight Loss from Caloric Deficit</h3>
      <p>A widely accepted scientific fact is that one pound of body fat contains approximately 3,500 calories. During a water fast, your daily calorie deficit is equal to your TDEE.</p>
      <pre><code class="language-js">const totalCalorieDeficit = TDEE * numberOfFastingDays;
const estimatedPoundsOfFatLost = totalCalorieDeficit / 3500;</code></pre>
      <p>It's important to note that this calculates fat loss. In the initial days of a fast, a significant portion of weight loss is from water. Our <a href="/tools/fasting-calculator" class="text-blue-600 hover:underline dark:text-blue-400">calculator</a> adds a conservative estimate for this water weight to give a more complete picture of what you might see on the scale.</p>
      <p><strong>Disclaimer:</strong> This is a theoretical estimate. Real-world results are influenced by genetics, hormonal state, hydration, and adherence. Always consult a healthcare professional before beginning a fasting regimen.</p>
    `;
  }
  return "<p>Content for this post is being written. Please check back soon.</p>";
};

interface BlogContentProps {
  blog: Blog;
  relatedTool?: Tool;
}

export function BlogContent({ blog, relatedTool }: BlogContentProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, [blog]);

  const dummyContent = generateDummyContent(blog.slug);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-500">
            Published on {new Date(blog.date).toLocaleDateString()}
          </p>
        </header>

        <div dangerouslySetInnerHTML={{ __html: dummyContent }} />

        {relatedTool && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">Try the Tool</h2>
            <Card href={`/tools/${relatedTool.slug}`}>
              <CardHeader>{relatedTool.title}</CardHeader>
              <CardContent>{relatedTool.description}</CardContent>
            </Card>
          </div>
        )}
      </article>
    </div>
  );
}
