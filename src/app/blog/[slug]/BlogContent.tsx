"use client";

import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { Card, CardHeader, CardContent } from "@/components/Card";
import { Blog } from "@/lib/blogs";
import { Tool } from "@/lib/tools";

interface BlogContentProps {
  blog: Blog;
  relatedTool?: Tool;
}

export function BlogContent({ blog, relatedTool }: BlogContentProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, [blog]);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Published on {new Date(blog.date).toLocaleDateString()}
          </p>
        </header>

        {/* Blog content rendering */}
        <div className="mt-8">
          {blog.slug === "deconstructing-the-coast-fire-calculator" ? (
            <article className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                The concept of &quot;Financial Independence, Retire Early&quot; (FIRE) has
                many flavors, but <strong>Coast FIRE</strong> is one of the most
                flexible and empowering. It&apos;s built on a simple, powerful idea:
                save aggressively early on, so your investments can grow to your
                full retirement number on their own, powered by decades of
                compound interest.
              </p>
              <p>
                Once you hit your Coast FIRE number, you&apos;ve essentially bought
                your future freedom. You no longer need to save for retirement.
                This article provides a technical deep dive into the formulas and
                financial principles powering our{" "}
                <a
                  href="/tools/coast-fire-calculator"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Coast FIRE Calculator
                </a>
                , showing you exactly how we map your path to financial
                independence.
              </p>

              <h2>Part 1: The Core Principle - The Time Value of Money</h2>
              <p>
                At its heart, any FIRE calculation is an application of the{" "}
                <strong>time value of money</strong>, which states that a sum of
                money today is worth more than the same sum in the future due to
                its potential earning capacity. We use two fundamental formulas:
              </p>
              <ol>
                <li>
                  <strong>Future Value (FV):</strong> How much a sum of money will
                  be worth in the future.
                  <pre>
                    <code className="language-plaintext">
                      FV = PresentValue * (1 + Rate)^N
                    </code>
                  </pre>
                </li>
                <li>
                  <strong>Present Value (PV):</strong> How much a future sum of
                  money is worth today.
                  <pre>
                    <code className="language-plaintext">
                      PV = FutureValue / (1 + Rate)^N
                    </code>
                  </pre>
                </li>
              </ol>
              <p>
                Our calculator uses these principles to determine your &quot;Coast
                FIRE Number&quot;—which is simply the{" "}
                <strong>Present Value</strong> of your total required retirement
                fund.
              </p>

              <h2>Part 2: The Inflation-Aware Algorithm</h2>
              <p>
                A common mistake in retirement planning is underestimating
                inflation. Aiming for a $2 million nest egg in today&apos;s dollars
                is not the same as having $2 million in purchasing power in 30
                years. Our calculator&apos;s <code>calculateCoastFire</code> function
                correctly accounts for this by tackling the problem in three
                precise steps.
              </p>

              <h3>Step 1: Project Your Future Expenses</h3>
              <p>
                First, we project what your desired annual income will need to be
                in <em>future dollars</em> to maintain today&apos;s purchasing
                power.
              </p>
              <pre>
                <code className="language-javascript">
                  {
                    `// Step 1: Calculate future annual expenses with inflation
const realAnnualExpenses = annualExpenses * Math.pow(1 + inflationRate / 100, yearsToRetirement);`
                  }
                </code>
              </pre>

              <h3>Step 2: Determine Your Final FIRE Number</h3>
              <p>
                Next, using the widely accepted 4% Safe Withdrawal Rate (SWR), we
                calculate the total nest egg you&apos;ll need{" "}
                <em>on the day you retire</em>.
              </p>
              <pre>
                <code className="language-javascript">
                  {
                    `// Step 2: Calculate the total nest egg needed in future dollars
const targetRetirementAmount = realAnnualExpenses / (withdrawalRate / 100);`
                  }
                </code>
              </pre>

              <h3>
                Step 3: Calculate Your Coast FIRE Number (The Present Value)
              </h3>
              <p>
                This is the final, crucial step. We calculate the Present Value
                of your `targetRetirementAmount`, discounting it by your expected
                annual investment return over the years you have left until
                retirement.
              </p>
              <pre>
                <code className="language-javascript">
                  {
                    `// Step 3: Find the Present Value of that future amount
const coastFireNumber = targetRetirementAmount / Math.pow(1 + expectedReturn / 100, yearsToRetirement);`
                  }
                </code>
              </pre>
              <p>
                This is your magic number. It means if you have this amount
                invested today, you can theoretically stop contributing and still
                hit your retirement goal.
              </p>

              <h2>Part 3: Visualizing the Future - The Technology Stack</h2>
              <p>
                A number is one thing, but seeing your financial future is
                another. We used a modern tech stack to make the calculator both
                accurate and visually intuitive.
              </p>

              <h3>Interactive Projections with React &amp; Chart.js</h3>
              <p>
                The calculator is built in React. User inputs are managed with{" "}
                <code>useState</code>, and the core calculation logic is wrapped
                in a <code>useCallback</code> hook to optimize performance by
                preventing needless re-renders.
              </p>
              <p>
                The most powerful feature is the growth projection chart,
                powered by <strong>Chart.js</strong>. The{" "}
                <code>CoastFireChart</code> component takes your inputs and plots
                several key scenarios:
              </p>
              <ul>
                <li>
                  <strong>Current Balance Growth:</strong> Shows the power of
                  compounding on your existing investments alone.
                </li>
                <li>
                  <strong>With Continued Savings:</strong> Illustrates how much
                  faster you could reach FIRE or how much larger your nest egg
                  could be if you continue to save.
                </li>
                <li>
                  <strong>Target Lines:</strong> Clearly visualizes your Coast
                  FIRE and final retirement targets, turning abstract goals into
                  a concrete finish line.
                </li>
              </ul>

              <h3>Financial Accuracy with TypeScript</h3>
              <p>
                All financial calculations demand precision. By using
                TypeScript, we enforce strict data types for every
                variable—from <code>currentAge</code> to{" "}
                <code>inflationRate</code>—ensuring that our formulas are robust
                and free from common type-related errors.
              </p>

              <h2>Start Your Journey to Financial Flexibility</h2>
              <p>
                Coast FIRE is a powerful concept that can fundamentally change
                your relationship with work and money. By understanding the math
                behind it, you can take control of your financial future with
                confidence.
              </p>
              <p>
                Ready to find your number?{" "}
                <a href="/tools/coast-fire-calculator">
                  Try the Coast FIRE Calculator now
                </a>
                .
              </p>
            </article>
          ) : blog.slug ===
          "the-science-and-code-behind-our-fasting-calculator" ? (
            <article className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                Intermittent fasting has surged in popularity as a powerful tool
                for health and wellness. But beyond the buzz, there&apos;s a
                fascinating intersection of metabolic science and clever
                software engineering. At TigerkidTools, we didn&apos;t just want
                to build another fasting app; we wanted to create a transparent,
                accurate, and educational tool.
              </p>

              <p>
                This article pulls back the curtain on our{" "}
                <a
                  href="/tools/fasting-calculator"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Fasting Calculator
                </a>
                . We&apos;ll explore the scientific principles behind
                intermittent fasting, break down the precise mathematical
                formulas our calculator uses to estimate weight loss, and
                finally, take a look at the React and TypeScript code that
                brings it all to life.
              </p>

              <h2>Part 1: The Concepts - What Are We Calculating?</h2>
              <p>
                Before diving into the math, it&apos;s essential to understand
                the fasting schedules our tool is designed to manage.
                Intermittent fasting isn&apos;t a diet; it&apos;s a pattern of
                eating.
              </p>

              <h3>Common Fasting Schedules</h3>
              <p>
                Our calculator supports the most popular and scientifically
                studied protocols:
              </p>
              <ul>
                <li>
                  <strong>16:8 Method:</strong> The most common approach. You
                  fast for 16 hours and have an 8-hour eating window. It&apos;s
                  an excellent starting point for beginners.
                </li>
                <li>
                  <strong>18:6 Method:</strong> A slightly more advanced
                  version, with an 18-hour fast and a 6-hour eating window,
                  which can enhance some of fasting&apos;s benefits.
                </li>
                <li>
                  <strong>20:4 Method (The Warrior Diet):</strong> This involves
                  a 20-hour fast, with a single 4-hour eating window in the
                  evening.
                </li>
                <li>
                  <strong>OMAD (One Meal A Day):</strong> The most intensive
                  daily schedule, consisting of a 23-hour fast and a 1-hour
                  eating window.
                </li>
              </ul>
              <p>
                The &quot;Fasting Window&quot; tab of our calculator is designed
                to make managing these schedules effortless. It performs simple
                but crucial date and time calculations based on your last meal
                to map out your day.
              </p>

              <h2>Part 2: The Metabolic Math - How We Estimate Weight Loss</h2>
              <p>
                This is where the real science comes in. The &quot;Weight Loss
                Estimator&quot; tab provides a forecast based on established
                metabolic formulas, not just guesswork. Here&apos;s the exact
                three-step process happening behind the scenes.
              </p>

              <h3>Step 1: Calculating Your Basal Metabolic Rate (BMR)</h3>
              <p>
                Everything starts with your BMR—the amount of energy your body
                expends at complete rest. To ensure accuracy, our calculator
                uses the <strong>Mifflin-St Jeor equation</strong>, which is
                widely regarded in the nutrition community as a more reliable
                standard than older formulas.
              </p>
              <p>
                The formulas are implemented directly in our code as follows:
              </p>
              <pre>
                <code className="language-javascript">
                  {`// For Men:
bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;

// For Women:
bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;`}
                </code>
              </pre>

              <h3>Step 2: From BMR to TDEE (Total Daily Energy Expenditure)</h3>
              <p>
                You aren&apos;t at rest all day. We calculate your TDEE by
                multiplying your BMR by an activity factor. This gives a
                realistic estimate of your total daily calorie burn. Our code
                uses the following standardized multipliers:
              </p>
              <pre>
                <code className="language-javascript">
                  {`const ACTIVITY_LEVELS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  very: 1.725,
  extra: 1.9,
};

const tdee = bmr * ACTIVITY_LEVELS[activityLevel].multiplier;`}
                </code>
              </pre>

              <h3>Step 3: Calculating Fat Loss and Water Weight</h3>
              <p>
                During a fast, your calorie intake is zero, making your TDEE
                your total daily calorie deficit. It is a well-established rule
                of thumb that a deficit of <strong>3,500 calories</strong>{" "}
                equates to approximately one pound of fat loss. Our calculator
                uses this to estimate fat loss.
              </p>
              <pre>
                <code className="language-javascript">
                  {`const totalCalorieDeficit = tdee * fastingDays;
const fatLossLbs = totalCalorieDeficit / 3500;`}
                </code>
              </pre>
              <p>
                Additionally, we know that initial weight loss includes a
                significant amount of water. To provide a more realistic total,
                the calculator adds a conservative estimate for this water loss,
                especially for the first few days of a fast.
              </p>

              <h2>Part 3: The Technology - A Look at the Code</h2>
              <p>
                A tool is only as good as the technology it&apos;s built on. We
                chose a modern, robust tech stack to ensure accuracy,
                performance, and a great user experience.
              </p>

              <h3>Component-Based Architecture with React</h3>
              <p>
                The entire calculator is built in React. We use a parent
                component, <code>FastingCalculator</code>, which manages the
                active tab state (`window` or `weightloss`). This state
                determines whether to render the{" "}
                <code>FastingWindowCalculator</code> or the{" "}
                <code>WeightLossEstimator</code> component. This approach keeps
                our code clean, organized, and easy to maintain.
              </p>
              <pre>
                <code className="language-jsx">
                  {`// In FastingCalculator.tsx
const [activeTab, setActiveTab] = useState("window");

// ... later in the return statement
{activeTab === "window" && <FastingWindowCalculator />}
{activeTab === "weightloss" && <WeightLossEstimator />}`}
                </code>
              </pre>

              <h3>State Management and Interactivity with React Hooks</h3>
              <p>
                All user inputs—like age, weight, and selected fasting plan—are
                managed using React&apos;s <code>useState</code> hook. The magic
                of real-time updates happens within the <code>useEffect</code>{" "}
                hook in the <code>FastingWindowCalculator</code> or via an
                explicit `calculate` button in the{" "}
                <code>WeightLossEstimator</code>. This makes the tool highly
                interactive and responsive.
              </p>

              <h3>Type Safety with TypeScript</h3>
              <p>
                When dealing with mathematical formulas, precision is key. We
                use TypeScript throughout the project to enforce strict typing.
                This prevents common bugs, such as mixing strings with numbers
                in calculations, and ensures that the data flowing through our
                formulas is exactly what we expect.
              </p>
              <pre>
                <code className="language-typescript">
                  {`// Type definition for user's gender
type Gender = "male" | "female";
const [gender, setGender] = useState<Gender>("male");

// Ensuring all inputs are treated as numbers
const [age, setAge] = useState<number>(30);
const [weight, setWeight] = useState<number>(70);`}
                </code>
              </pre>

              <h2>Your Turn to Explore</h2>
              <p>
                We believe that understanding how a tool works makes it even
                more powerful. Now that you&apos;ve seen the science and the
                code, you can use our Fasting Calculator with greater
                confidence.
              </p>
              <p>
                Ready to plan your schedule or estimate your results?{" "}
                <a
                  href="/tools/fasting-calculator"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <strong>Give the Fasting Calculator a try now.</strong>
                </a>
              </p>
            </article>
          ) : blog.slug ===
            "how-we-built-it-debt-snowball-calculator-algorithm" ? (
            <article className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                The debt snowball method is more than just a repayment strategy;
                it&apos;s a powerful behavioral tool that has helped millions of
                people achieve financial freedom. Its success lies in its focus
                on human psychology—prioritizing momentum and motivation over
                cold, hard math.
              </p>

              <p>
                When we decided to build our{" "}
                <a
                  href="/tools/debt-snowball-calculator"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <strong>Debt Snowball Calculator</strong>
                </a>
                , our goal was to create a tool that was not only accurate but
                also transparent. We wanted to show you exactly how the snowball
                gains momentum and charts your path to a debt-free life. This
                article is a deep dive into the logic, the math, and the code
                that powers it.
              </p>

              <h2>Part 1: The Concept - Why Smallest Balance First?</h2>
              <p>
                Unlike the &quot;debt avalanche&quot; method, which targets the
                highest-interest debt, the debt snowball focuses on the{" "}
                <strong>smallest balance first</strong>.
              </p>

              <p>
                Why? <strong>Motivation.</strong>
              </p>

              <p>
                Paying off a small debt, regardless of its interest rate,
                provides a quick, tangible win. You eliminate an entire bill
                from your life, which frees up cash flow and, more importantly,
                provides a powerful psychological boost. This feeling of
                progress motivates you to stick with the plan. As you pay off
                each successive debt, the &quot;snowball&quot; of money you can
                apply to the next one grows, accelerating your progress and
                making the larger debts feel less intimidating.
              </p>

              <h2>Part 2: The Algorithm - Simulating Your Debt-Free Journey</h2>
              <p>
                The core of our calculator is a simulation engine that projects
                your debt payoff month by month. Here&apos;s a step-by-step
                breakdown of the algorithm inside the{" "}
                <code>calculateSnowball</code> function.
              </p>

              <h3>Step 1: The Sorting Core</h3>
              <p>
                This is the defining step of the debt snowball method. Before
                any calculations begin, we create a fresh copy of your debts and
                sort them by balance in ascending order. This ensures we always
                target the smallest debt first.
              </p>
              <pre>
                <code className="language-javascript">
                  {`// The first and most important step in the algorithm
const sortedDebts = [...debts].sort((a, b) => a.balance - b.balance);`}
                </code>
              </pre>

              <h3>Step 2: The Monthly Amortization Loop</h3>
              <p>
                The calculator&apos;s engine is a <code>while</code> loop that
                continues as long as any debt&apos;s balance is greater than
                zero. Each iteration of the loop represents one month in your
                payoff journey.
              </p>
              <pre>
                <code className="language-javascript">
                  {`let month = 0;
let availableExtraPayment = extraPayment; // Your initial extra payment

while (debtBalances.some((debt) => debt.balance > 0)) {
  month++;
  // ... payment allocation logic inside ...
}`}
                </code>
              </pre>

              <h3>Step 3: Payment Allocation & The Growing Snowball</h3>
              <p>
                Inside the loop, for each month, we perform the following
                critical operations:
              </p>
              <ol>
                <li>
                  <strong>Calculate Interest:</strong> First, we calculate the
                  interest accrued for the month on the current balance of every
                  debt and add it to the balance.
                  <br />
                  <code>
                    monthlyInterest = (debt.balance * debt.interestRate) / 100 /
                    12;
                  </code>
                </li>
                <li>
                  <strong>Pay Minimums:</strong> We allocate the minimum payment
                  to every debt that still has a balance. This is crucial to
                  keep all your accounts in good standing.
                </li>
                <li>
                  <strong>Apply the Snowball:</strong> We take the entire{" "}
                  <code>availableExtraPayment</code> and apply it as an
                  additional payment to the{" "}
                  <strong>first debt in the sorted list</strong> (the one with
                  the smallest current balance).
                </li>
                <li>
                  <strong>Check for Payoff & Grow the Snowball:</strong> After
                  payments are applied, we check if any debt&apos;s balance has
                  dropped to zero. If a debt is paid off this month, its{" "}
                  <code>minPayment</code> is added to the{" "}
                  <code>availableExtraPayment</code> variable for all subsequent
                  months. This is how the snowball grows and becomes more
                  powerful over time!
                </li>
              </ol>

              <p>
                This iterative process precisely models the snowball&apos;s
                growing power and is how our calculator generates its detailed
                amortization schedule.
              </p>

              <h2>Part 3: A Look at the Code - The Tech Stack</h2>
              <p>
                To build a reliable and interactive financial tool, we chose a
                modern tech stack focused on performance and accuracy.
              </p>

              <h3>Dynamic UI with React & TypeScript</h3>
              <p>
                The calculator is built with React, allowing for a dynamic and
                responsive user interface where you can add or remove debts on
                the fly. We use TypeScript to enforce strict data types for all
                financial inputs. This is non-negotiable for a calculator; it
                ensures that a balance is always a <code>number</code>, an
                interest rate is a <code>number</code>, and prevents common bugs
                that could lead to inaccurate calculations.
              </p>
              <pre>
                <code className="language-typescript">
                  {`// Defining the structure for each debt ensures data integrity
interface Debt {
  id: string;
  name: string;
  balance: number;
  minPayment: number;
  interestRate: number;
}

// Using the useState hook to manage the list of debts
const [debts, setDebts] = useState<Debt[]>(/* ...initial debts... */);`}
                </code>
              </pre>

              <h3>Efficient Calculations with React Hooks</h3>
              <p>
                All user inputs are managed with the <code>useState</code> hook.
                The main <code>calculateSnowball</code> function is wrapped in a{" "}
                <code>useCallback</code> hook. This is a performance
                optimization that memoizes the function, ensuring it is only
                re-created when the <code>debts</code> or{" "}
                <code>extraPayment</code> values actually change, preventing
                unnecessary recalculations and keeping the UI snappy.
              </p>

              <h2>Your Turn to Build Momentum</h2>
              <p>
                Understanding the &quot;why&quot; and &quot;how&quot; behind a
                tool makes it even more effective. Now that you&apos;ve seen the
                logic that powers the debt snowball, you can use our calculator
                with confidence to create your own personalized plan.
              </p>
              <p>
                Ready to see how fast you can become debt-free?{" "}
                <a
                  href="/tools/debt-snowball-calculator"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <strong>Try the Debt Snowball Calculator now</strong>
                </a>
                .
              </p>
            </article>
          ) : (
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Content Coming Soon
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                This blog post is being carefully prepared. Please check back
                soon!
              </p>
            </div>
          )}
        </div>

        {relatedTool && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">Related Tool</h2>
            <Card href={`/tools/${relatedTool.slug}`}>
              <CardHeader>{relatedTool.title}</CardHeader>
              <CardContent>{relatedTool.description}</CardContent>
            </Card>
          </div>
        )}
      </article>

      {/* JSON-LD Structured Data for Blog Post */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            description: blog.description,
            author: {
              "@type": "Person",
              name: "Tigerkid",
              url: "https://tigerkidtools.com/about",
            },
            publisher: {
              "@type": "Organization",
              name: "TigerkidTools",
              url: "https://tigerkidtools.com",
            },
            datePublished: new Date(blog.date).toISOString(),
            dateModified: new Date(blog.date).toISOString(),
            url: `https://tigerkidtools.com/blog/${blog.slug}`,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://tigerkidtools.com/blog/${blog.slug}`,
            },
          }),
        }}
      />
    </div>
  );
}
