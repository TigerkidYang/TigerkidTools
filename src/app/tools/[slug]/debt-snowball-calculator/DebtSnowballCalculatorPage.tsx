import { DebtSnowballCalculator } from "./components/DebtSnowballCalculator";
import Link from "next/link";

export function DebtSnowballCalculatorPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      {/* Page Title */}
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
        Debt Snowball Calculator
      </h1>

      {/* Calculator Component */}
      <div className="mt-8">
        <DebtSnowballCalculator />
      </div>

      {/* Content Section */}
      <article className="mt-16 prose prose-gray dark:prose-invert max-w-none">
        <h2>What Is the Debt Snowball Method?</h2>

        <p>
          The <strong>debt snowball method</strong> is a debt-reduction strategy
          that leverages psychological wins to build and maintain momentum.
          Instead of focusing on high-interest rates, the strategy prioritizes
          paying off your smallest debts first. Once the smallest debt is
          eliminated, you &quot;roll&quot; the payment you were making on it
          into the next-smallest debt. This creates a &quot;snowball
          effect,&quot; causing your payment amount to grow as you knock out
          each balance, which keeps you motivated on your journey to becoming
          debt-free.
        </p>

        <p>
          This <strong>debt snowball calculator</strong> is your strategic
          partner in this journey. It&apos;s a powerful{" "}
          <strong>debt payoff planner</strong> that takes your unique financial
          situation and creates a customized, step-by-step plan, showing you
          exactly how and when you can achieve financial freedom.
        </p>

        <h2>How to Use Our Debt Snowball Calculator</h2>

        <p>
          Our calculator precisely simulates the debt snowball process.
          Here&apos;s a breakdown of how it functions, directly reflecting the
          logic in its code:
        </p>

        <ol>
          <li>
            <strong>Enter Your Debts:</strong> Add each of your debts, including
            the name, current balance, minimum monthly payment, and interest
            rate (APR). You also provide an &quot;Extra Monthly
            Payment&quot;—this is the key accelerator in your{" "}
            <strong>debt payoff plan</strong>.
          </li>
          <li>
            <strong>Automatic Sorting:</strong> The moment you input your debts,
            the calculator&apos;s algorithm automatically sorts them in
            ascending order based on the <strong>smallest balance first</strong>
            . This is the foundational step of the debt snowball method.
          </li>
          <li>
            <strong>The Snowball Simulation:</strong> The tool then runs a
            month-by-month simulation. Each month, it applies the minimum
            payment to every debt to keep them current. Then, it takes your
            entire &quot;Extra Monthly Payment&quot; <strong>PLUS</strong> the
            minimum payments from any debts that have already been paid off, and
            applies this combined &quot;snowball&quot; to the single smallest
            debt remaining.
          </li>
          <li>
            <strong>Your Custom Payoff Plan:</strong> The results show your
            exact <strong>debt-free date</strong>, the total interest
            you&apos;ll pay, and a clear visual of the payoff order. {/* TODO: Add a visual representation or code snippet */} This
            detailed amortization schedule is your roadmap, showing which debt
            to focus on and when you can celebrate eliminating each one.
          </li>
        </ol>

        <h2>Debt Snowball vs. Debt Avalanche: Which Is Right for You?</h2>

        <p>
          Understanding the two primary debt-reduction strategies is crucial for
          choosing the path that best suits your personality and financial
          situation.
        </p>

        <h3>The Debt Snowball (Behavioral Approach)</h3>
        <ul>
          <li>
            <strong>Focus:</strong> Pay off debts from the smallest balance to
            the largest.
          </li>
          <li>
            <strong>Pros:</strong> Delivers quick psychological wins by
            eliminating individual debts faster. This builds motivation and
            makes it easier to stick with the plan long-term.
          </li>
          <li>
            <strong>Cons:</strong> You will likely pay more in total interest
            compared to the avalanche method if your smallest debts do not also
            have the highest interest rates.
          </li>
          <li>
            <strong>Best For:</strong> Individuals who thrive on positive
            reinforcement and need to see progress to stay motivated.
          </li>
        </ul>

        <h3>The Debt Avalanche (Mathematical Approach)</h3>
        <ul>
          <li>
            <strong>Focus:</strong> Pay off debts from the highest interest rate
            to the lowest.
          </li>
          <li>
            <strong>Pros:</strong> This is the mathematically optimal method. It
            saves you the most money in interest payments and will get you out
            of debt in the shortest possible time.
          </li>
          <li>
            <strong>Cons:</strong> It might take a long time to pay off your
            first debt if it has a large balance, which can be discouraging for
            some people.
          </li>
          <li>
            <strong>Best For:</strong> Highly disciplined, numbers-driven
            individuals who are motivated primarily by financial efficiency.
          </li>
        </ul>

        <h2>Frequently Asked Questions (FAQ)</h2>

        <h3>Is the debt snowball method the fastest way to pay off debt?</h3>
        <p>
          Mathematically, no. The <strong>debt avalanche method</strong> is
          typically faster and saves more money on interest. However, studies
          and countless personal finance experts have shown that the debt
          snowball method has a higher success rate because it focuses on
          behavior and motivation. A plan you can stick to is always better than
          a &quot;perfect&quot; plan you abandon.
        </p>

        <h3>What happens if I have extra money to pay one month?</h3>
        <p>
          Any extra money—from a bonus, a side hustle, or a gift—should be
          applied directly to your current target debt (the one with the
          smallest balance). Do not spread the extra payment across multiple
          debts. Concentrating your firepower is what makes the snowball method
          so effective.
        </p>

        <h3>Should I include my mortgage in the debt snowball?</h3>
        <p>
          Most financial experts, including Dave Ramsey who popularized this
          method, recommend focusing on consumer debt first (credit cards,
          personal loans, car loans, etc.). Mortgages are typically
          lower-interest, long-term loans secured by an appreciating asset.
          It&apos;s usually best to complete your consumer debt snowball before
          deciding whether to make extra payments on your mortgage.
        </p>

        <h3>Can I use the debt snowball method with student loans?</h3>
        <p>
          Yes, student loans can absolutely be included in your debt snowball.
          It&apos;s an effective way to tackle them, especially higher-interest
          private student loans. For federal loans, you may want to consider
          their unique benefits (like income-driven repayment plans or potential
          forgiveness programs) before aggressively paying them off ahead of
          other consumer debts.
        </p>
      </article>



      {/* Related Blog Section */}
      <section className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Behind the Scenes: How This Calculator Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              The Algorithm Behind the Debt Snowball Calculator
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Curious about the simulation logic, sorting algorithms, and
              React/TypeScript code that powers this debt payoff tool? Dive deep
              into the month-by-month calculations and learn why the smallest
              balance first approach is so effective.
            </p>
            <Link
              href="/blog/how-we-built-it-debt-snowball-calculator-algorithm"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read the Technical Deep Dive
              <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
              <div className="space-y-3">
                <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded font-mono text-sm">
                  <div className="text-green-600 dark:text-green-400">
                    {/* Debt Sorting Algorithm */}
                  </div>
                  <div className="text-blue-600 dark:text-blue-400">
                    {'sortedDebts = [...debts].sort((a, b) => a.balance - b.balance)'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Debt Snowball Calculator - Create Your Debt Payoff Plan & Become Debt-Free",
            description:
              "Use our free debt snowball calculator to create a customized payoff plan. See how fast you can become debt-free by focusing on your smallest debts first.",
            url: "https://tigerkidtools.com/tools/debt-snowball-calculator",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is the debt snowball method the fastest way to pay off debt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The debt snowball method is typically not the fastest way mathematically, but it's often the most effective in practice because it provides psychological motivation that helps people stick to their plan.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I have extra money to pay one month?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Any extra money should go directly toward your smallest debt (the one you're currently focusing on). This accelerates your timeline and gets you to your first win even faster.",
                },
              },
              {
                "@type": "Question",
                name: "Should I include my mortgage in the debt snowball?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most financial experts recommend focusing on consumer debt first before tackling your mortgage. Pay off high-interest consumer debt first, then consider extra mortgage payments.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use the debt snowball method with student loans?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, student loans can be included in your debt snowball, especially private student loans with higher interest rates. Consider the benefits of federal student loans before aggressively paying them off.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
