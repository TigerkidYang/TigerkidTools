import { CoastFireCalculator } from "./components/CoastFireCalculator";
import Link from "next/link";

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
        <h2>What Is Coast FIRE? A Path to Financial Flexibility</h2>
        <p>
          <strong>Coast FIRE</strong> (Financial Independence, Retire Early) is
          a major milestone on the path to financial independence. It means you
          have saved and invested enough money that, without contributing
          another dollar, your portfolio will grow to support a traditional
          retirement by age 65. Once you hit your{" "}
          <strong>Coast FIRE number</strong>, your investment&apos;s compound
          growth does the rest of the heavy lifting.
        </p>
        <p>
          This doesn&apos;t mean you retire immediately. Instead, it means you
          are no longer required to save for retirement. You only need to earn
          enough to cover your current living expenses, giving you immense
          career and life flexibility. You can switch to a less demanding job,
          pursue a passion project, or work part-time, all with the peace of
          mind that your retirement is already secured. Our{" "}
          <strong>Coast FIRE calculator</strong> is designed to find that exact
          number for you.
        </p>

        <h2>How to Use Our Coast FIRE Calculator</h2>
        <p>
          This comprehensive <strong>FIRE calculator</strong> is designed to
          provide a clear, actionable picture of your journey to financial
          independence. It requires a few key inputs about your financial life
          to generate its projections.
        </p>

        <h3>Understanding the Inputs</h3>
        <ul>
          <li>
            <strong>Current Age &amp; Retirement Age:</strong> Defines the
            timeline for your investments to grow. The longer the timeline, the
            more powerful compound interest becomes.
          </li>
          <li>
            <strong>Current Investment Balance:</strong> The starting point for
            your portfolio.
          </li>
          <li>
            <strong>Annual Expenses in Retirement:</strong> Your estimated
            yearly spending in today&apos;s dollars. This is used to calculate
            your total retirement nest egg.
          </li>
          <li>
            <strong>Monthly Savings:</strong> The amount you are currently
            contributing to your investments. This helps the calculator estimate
            how long it will take you to reach your Coast FIRE number.
          </li>
          <li>
            <strong>
              Advanced Settings (Return, Inflation, Withdrawal Rate):
            </strong>
            These three assumptions are critical for an accurate forecast. We
            use a 7% expected return, 3% inflation, and 4% withdrawal rate as
            common, sensible defaults.
          </li>
        </ul>

        <h3>Interpreting Your Results</h3>
        <p>
          Once you input your data, the calculator provides several key metrics:
        </p>
        <ul>
          <li>
            <strong>Your Coast FIRE Number:</strong> This is the magic number.
            It&apos;s the amount you need in your investment accounts{" "}
            <em>today</em>
            to be able to coast to a full retirement.
          </li>
          <li>
            <strong>Current Gap:</strong> The difference between your current
            balance and your Coast FIRE number.
          </li>
          <li>
            <strong>Future Value of Investments:</strong> A projection of what
            your current balance will grow to by retirement age, assuming you
            stop saving completely.
          </li>
          <li>
            <strong>Time to Coast FIRE:</strong> An estimate of how many years
            and months it will take to reach your goal at your current savings
            rate.
          </li>
        </ul>

        <h2>The Formula: How We Calculate Your Coast FIRE Number</h2>

        <ol>
          <li>
            <strong>Step 1: Project Future Annual Expenses.</strong> We first
            calculate what your desired annual expenses will be in the future,
            adjusted for inflation.
            <br />
            <code>
              Future Expenses = Annual Expenses * (1 + Inflation Rate) ^ Years
              to Retirement
            </code>
          </li>
          <li>
            <strong>Step 2: Calculate Target Retirement Amount.</strong> Next,
            we determine your total nest egg needed at retirement using the 4%
            Safe Withdrawal Rate (SWR) rule.
            <br />
            <code>
              Target Amount = Future Expenses / (Withdrawal Rate / 100)
            </code>
          </li>
          <li>
            <strong>Step 3: Calculate Your Coast FIRE Number.</strong> Finally,
            we calculate the present value of that future target amount. This
            tells us how much money you need <em>today</em> that will grow to
            the target amount, based on your expected investment return.
            <br />
            <code>
              Coast FIRE Number = Target Amount / (1 + Expected Return) ^ Years
              to Retirement
            </code>
          </li>
        </ol>
        <p>
          This inflation-first approach ensures a much more realistic and
          accurate goal compared to simpler calculators.
        </p>

        {/* Related Blog Section */}
        <section className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Behind the Scenes: How This Calculator Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Deconstructing the Coast FIRE Calculator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Transparency is key to financial planning. Our calculator uses a
                precise, inflation-aware formula. Dive deep into the multi-step
                process in our technical breakdown.
              </p>
              <Link
                href="/blog/deconstructing-the-coast-fire-calculator"
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
                      {/* Coast FIRE Formula Snippet */}
                    </div>
                    <div className="text-blue-600 dark:text-blue-400">
                      Target / (1 + Return) ^ Years
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h2>Coast FIRE vs. Traditional FIRE vs. Barista FIRE</h2>
        <p>
          The FIRE movement has many flavors. Here’s how Coast FIRE compares to
          other popular approaches:
        </p>
        <ul>
          <li>
            <strong>Traditional FIRE:</strong> You have saved 25x your annual
            expenses and can retire completely, living off your investments
            indefinitely.
          </li>
          <li>
            <strong>Coast FIRE:</strong> You have saved enough that your
            portfolio will grow to your FIRE number on its own. You still work
            to cover current expenses but no longer need to save for retirement.
          </li>
          <li>
            <strong>Barista FIRE:</strong> A form of Coast FIRE where someone
            quits their high-stress primary job and takes a part-time job (like
            a barista) to cover living expenses, often for the health insurance
            benefits, while their investments continue to grow.
          </li>
        </ul>

        <h2>Frequently Asked Questions (FAQ)</h2>

        <h3>What happens after I reach my Coast FIRE number?</h3>
        <p>Reaching Coast FIRE gives you options. You can:</p>
        <ol>
          <li>
            <strong>Stop saving for retirement entirely</strong> and use that
            extra cash flow to enhance your lifestyle, travel, or reduce your
            work hours.
          </li>
          <li>
            <strong>Continue saving</strong> to reach Traditional FIRE much
            earlier than your target retirement age.
          </li>
          <li>
            <strong>Take a lower-paying &quot;passion&quot; job</strong> without
            worrying about its retirement benefits.
          </li>
        </ol>

        <h3>Is the 4% Safe Withdrawal Rate (SWR) still reliable?</h3>
        <p>
          The 4% rule, based on the Trinity Study, is a widely used benchmark in
          retirement planning. It suggests you can withdraw 4% of your initial
          portfolio value each year (adjusted for inflation) with a very low
          probability of running out of money over 30 years. While it&apos;s a
          solid starting point, some financial planners now suggest a more
          conservative rate of 3.5% to 3.8% to account for modern market
          volatility. Our calculator allows you to adjust this rate in the
          advanced settings.
        </p>

        <h3>How do I account for taxes in my calculation?</h3>
        <p>
          This calculator&apos;s projections are pre-tax. When estimating your
          &quot;Annual Expenses in Retirement,&quot; you should consider your
          total spending needs, including what you&apos;ll owe in taxes on
          withdrawals from accounts like a traditional 401(k) or IRA. Roth IRA
          withdrawals are tax-free, which can significantly impact your
          retirement plan.
        </p>

        <h3>What&apos;s a realistic &quot;Expected Annual Return&quot;?</h3>
        <p>
          Historically, the stock market (like the S&amp;P 500) has returned an
          average of about 10% annually before inflation. A common and
          reasonably conservative estimate for long-term planning is{" "}
          <strong>7%</strong> after inflation, which is the default we use in
          this calculator. You can adjust this number based on your own risk
          tolerance and investment strategy.
        </p>
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
