import { CoastFireCalculator } from "./components/CoastFireCalculator";

export function CoastFireCalculatorPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      {/* Page Title */}
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
        Coast FIRE Calculator
      </h1>

      {/* Calculator Component */}
      <div className="mt-8">
        <CoastFireCalculator />
      </div>

      {/* Content Section */}
      <article className="mt-16 prose prose-gray dark:prose-invert max-w-none">
        <h2>What Is Coast FIRE? Understanding Financial Independence</h2>
        <p>
          Coast FIRE (Financial Independence, Retire Early) is a strategic
          approach where you save aggressively early in your career, then
          &ldquo;coast&rdquo; to traditional retirement by allowing compound
          interest to grow your investments without additional contributions.
          Unlike traditional FIRE, you don&apos;t need to save enough to retire
          immediately—you only need enough to eventually reach financial
          independence by your target retirement age.
        </p>
        <p>
          Our <strong>coast fire calculator</strong> helps you determine your
          exact Coast FIRE number—the amount you need invested today to reach
          financial independence without any additional savings. This approach
          offers more lifestyle flexibility while still ensuring a secure
          financial future.
        </p>

        <h2>How to Use Our Coast FIRE Calculator</h2>
        <p>
          This comprehensive <strong>coastfire calculator</strong> provides
          precise calculations based on your personal situation:
        </p>

        <h3>Understanding Your Coast FIRE Number</h3>
        <p>
          Our <strong>fire calculator</strong> uses the following inputs to
          calculate your Coast FIRE number:
        </p>
        <ul>
          <li>
            <strong>Current Age:</strong> Your age today
          </li>
          <li>
            <strong>Target Retirement Age:</strong> When you want to achieve
            financial independence
          </li>
          <li>
            <strong>Current Investment Balance:</strong> Your existing
            retirement and investment accounts
          </li>
          <li>
            <strong>Annual Expenses:</strong> Your expected yearly spending in
            retirement
          </li>
          <li>
            <strong>Expected Return:</strong> Average annual investment return
            (typically 7-10%)
          </li>
          <li>
            <strong>Safe Withdrawal Rate:</strong> Percentage you can withdraw
            annually (typically 4%)
          </li>
        </ul>

        <h3>Interpreting Your Results</h3>
        <p>
          The <strong>coast fire calculation</strong> provides several key
          insights:
        </p>
        <ul>
          <li>
            <strong>Coast FIRE Number:</strong> The minimum amount needed today
            to reach financial independence by your target retirement age
          </li>
          <li>
            <strong>Current Balance Growth:</strong> What your existing
            investments will be worth at retirement (without additional
            contributions)
          </li>
          <li>
            <strong>Time to Coast FIRE:</strong> How long it will take to reach
            Coast FIRE at your current savings rate
          </li>
          <li>
            <strong>Retirement Expenses:</strong> Your annual expenses in future
            dollars, adjusted for inflation
          </li>
          <li>
            <strong>Interactive Chart:</strong> Visual projection showing your
            investment growth with and without continued savings
          </li>
          <li>
            <strong>Actionable Next Steps:</strong> Personalized recommendations
            based on whether you&apos;ve reached Coast FIRE or not
          </li>
        </ul>

        <h2>Coast FIRE vs Traditional FIRE: Which Path Is Right for You?</h2>
        <p>
          Understanding the differences between these approaches helps you
          choose the right strategy for your goals:
        </p>

        <h3>Coast FIRE Benefits</h3>
        <ul>
          <li>
            <strong>Early Career Focus:</strong> Front-load savings when earning
            potential is highest
          </li>
          <li>
            <strong>Lifestyle Flexibility:</strong> Reduce savings pressure in
            your 30s and 40s
          </li>
          <li>
            <strong>Career Freedom:</strong> Take career risks knowing your
            retirement is secured
          </li>
          <li>
            <strong>Lower Target:</strong> Need less money upfront compared to
            full FIRE
          </li>
          <li>
            <strong>Compound Interest Power:</strong> Maximize time for
            investments to grow
          </li>
        </ul>

        <h3>Traditional FIRE Benefits</h3>
        <ul>
          <li>
            <strong>Early Retirement:</strong> Retire in your 30s or 40s rather
            than 60s
          </li>
          <li>
            <strong>Income Replacement:</strong> Immediate financial
            independence
          </li>
          <li>
            <strong>Lifestyle Security:</strong> No dependency on future earning
            ability
          </li>
          <li>
            <strong>Flexibility:</strong> Change course without affecting
            retirement timeline
          </li>
        </ul>

        <h3>Lean FIRE vs Fat FIRE vs Coast FIRE Comparison</h3>
        <p>
          Different <strong>fire calculator</strong> approaches suit different
          lifestyles:
        </p>
        <ul>
          <li>
            <strong>Lean FIRE:</strong> $500K-$1M target, minimal expenses,
            early retirement
          </li>
          <li>
            <strong>Regular FIRE:</strong> $1-2.5M target, moderate lifestyle,
            retire by 50-60
          </li>
          <li>
            <strong>Fat FIRE:</strong> $2.5M+ target, luxurious retirement,
            retire early
          </li>
          <li>
            <strong>Coast FIRE:</strong> Variable target, focus on reaching FI
            by traditional retirement age
          </li>
        </ul>

        <h2>Coast FIRE Calculation Formula Explained</h2>
        <p>
          Understanding the math behind our{" "}
          <strong>coast fire calculator</strong> helps you make informed
          decisions. Our calculation properly accounts for inflation:
        </p>
        <p>
          <strong>Step-by-Step Formula:</strong>
        </p>
        <ul className="ml-6 mb-4 list-disc space-y-2">
          <li>
            <strong>Future Expenses:</strong> Current Annual Expenses × (1 +
            Inflation Rate)^Years
          </li>
          <li>
            <strong>Target Retirement Amount:</strong> Future Expenses ÷ Safe
            Withdrawal Rate
          </li>
          <li>
            <strong>Coast FIRE Number:</strong> Target Amount ÷ (1 + Expected
            Return)^Years
          </li>
        </ul>
        <p>
          <strong>Example with inflation:</strong>
          <br />
          Current expenses: $60,000, 3% inflation, 7% returns, 30 years to
          retirement:
        </p>
        <ul className="ml-6 mb-4 list-disc space-y-1 text-sm">
          <li>Future expenses: $60,000 × (1.03)^30 = $145,537</li>
          <li>Target amount: $145,537 ÷ 0.04 = $3,638,425</li>
          <li>Coast FIRE: $3,638,425 ÷ (1.07)^30 = $478,006</li>
        </ul>
        <p>
          This means you need $478,006 today to maintain $60,000 of{" "}
          <em>today&apos;s purchasing power</em> in retirement.
        </p>

        <h2>Strategies to Reach Your Coast FIRE Number Faster</h2>
        <p>
          Once you know your Coast FIRE target, these strategies can help you
          reach it more quickly:
        </p>
        <ul>
          <li>
            <strong>Maximize Early Career Earnings:</strong> Invest in skills
            and career advancement
          </li>
          <li>
            <strong>High Savings Rate:</strong> Save 50%+ of income in your 20s
            and early 30s
          </li>
          <li>
            <strong>Tax-Advantaged Accounts:</strong> Maximize 401(k), IRA, and
            HSA contributions
          </li>
          <li>
            <strong>Low-Cost Index Funds:</strong> Minimize fees to maximize
            returns
          </li>
          <li>
            <strong>Side Income:</strong> Accelerate savings with additional
            income streams
          </li>
          <li>
            <strong>Geographic Arbitrage:</strong> Reduce expenses by living in
            lower-cost areas
          </li>
        </ul>

        <h2>Frequently Asked Questions (FAQ)</h2>

        <h3>What happens if I reach Coast FIRE but want to retire earlier?</h3>
        <p>
          Reaching Coast FIRE gives you options. You can continue saving to
          achieve full FIRE for early retirement, or you can reduce your savings
          rate and enjoy more lifestyle flexibility while still ensuring
          traditional retirement security. Many people use Coast FIRE as a
          stepping stone to full FIRE.
        </p>

        <h3>
          Can I still contribute to investments after reaching Coast FIRE?
        </h3>
        <p>
          Absolutely! Coast FIRE represents the minimum needed to reach FI.
          Additional contributions will either allow earlier retirement or a
          more comfortable retirement lifestyle. Many Coast FIRE achievers
          continue investing at a reduced rate for extra security and
          flexibility.
        </p>

        <h3>How accurate is the Coast FIRE calculation?</h3>
        <p>
          Our <strong>coast fire calculator</strong> uses established financial
          formulas, but results depend on your assumptions about investment
          returns, inflation, and future expenses. Consider using conservative
          estimates and planning for multiple scenarios. The calculation becomes
          more accurate as you get closer to retirement and have better data
          about your spending needs.
        </p>

        <h3>What if my expenses change in retirement?</h3>
        <p>
          Retirement expenses often differ from working years—you might spend
          less on commuting and work clothes but more on healthcare and leisure.
          Our calculator lets you adjust your annual expense target. Many
          financial planners recommend using 70-90% of pre-retirement income,
          but your actual needs may vary significantly based on your lifestyle
          and goals.
        </p>
      </article>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Coast FIRE Calculator: Calculate Your Coast FI Number & Financial Independence Timeline",
            description:
              "Calculate your Coast FIRE number with our free calculator. Discover how much you need to save now to coast to financial independence by your target retirement age.",
            url: "https://tigerkidtools.com/tools/coast-fire-calculator",
            mainEntity: [
              {
                "@type": "Question",
                name: "What happens if I reach Coast FIRE but want to retire earlier?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Reaching Coast FIRE gives you options. You can continue saving to achieve full FIRE for early retirement, or you can reduce your savings rate and enjoy more lifestyle flexibility while still ensuring traditional retirement security.",
                },
              },
              {
                "@type": "Question",
                name: "Can I still contribute to investments after reaching Coast FIRE?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely! Coast FIRE represents the minimum needed to reach FI. Additional contributions will either allow earlier retirement or a more comfortable retirement lifestyle.",
                },
              },
              {
                "@type": "Question",
                name: "How accurate is the Coast FIRE calculation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our calculator uses established financial formulas, but results depend on your assumptions about investment returns, inflation, and future expenses. Consider using conservative estimates and planning for multiple scenarios.",
                },
              },
              {
                "@type": "Question",
                name: "What if my expenses change in retirement?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Retirement expenses often differ from working years. Our calculator lets you adjust your annual expense target. Many financial planners recommend using 70-90% of pre-retirement income.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
