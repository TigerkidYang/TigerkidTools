import { FastingCalculator } from "./components/FastingCalculator";

export function FastingCalculatorPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      {/* Page Title */}
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
        Fasting Calculator
      </h1>

      {/* Calculator Component */}
      <div className="mt-8">
        <FastingCalculator />
      </div>

      {/* Content Section */}
      <article className="mt-16 prose prose-gray dark:prose-invert max-w-none">
        <h2>What Is Intermittent Fasting?</h2>
        <p>
          Intermittent fasting (IF) is an eating pattern that cycles between
          periods of fasting and eating. Unlike traditional diets that focus on
          what to eat, intermittent fasting focuses on when to eat. Popular
          methods include the 16:8 method (16 hours fasting, 8 hours eating),
          18:6, 20:4, and OMAD (One Meal A Day).
        </p>
        <p>
          Our <strong>intermittent fasting calculator</strong> helps you plan
          your optimal fasting and eating windows based on your schedule and
          goals. Whether you're using a 16:8 approach or exploring water
          fasting, this tool provides personalized timing and weight loss
          estimates.
        </p>

        <h2>How to Use Our Ultimate Fasting Calculator</h2>
        <p>
          This comprehensive <strong>fasting calculator</strong> offers two
          powerful modes to support your fasting journey:
        </p>

        <h3>Calculating Your Fasting Window</h3>
        <p>
          The <strong>fasting window calculator</strong> mode helps you
          determine your exact eating and fasting periods:
        </p>
        <ul>
          <li>
            Select your preferred intermittent fasting schedule (16:8, 18:6,
            20:4, OMAD, or custom)
          </li>
          <li>Enter the time of your last meal</li>
          <li>Get precise timing for when your fast begins and ends</li>
          <li>See a visual timeline of your fasting and eating windows</li>
        </ul>

        <h3>Estimating Your Fasting Weight Loss</h3>
        <p>
          Our <strong>water fasting weight loss calculator</strong> provides
          science-based estimates:
        </p>
        <ul>
          <li>
            Input your personal information (age, gender, weight, height,
            activity level)
          </li>
          <li>Specify your planned fasting duration</li>
          <li>Receive estimated weight loss calculations</li>
          <li>Understand the breakdown between fat loss and water weight</li>
        </ul>

        <h2>Common Intermittent Fasting Schedules Explained</h2>
        <p>
          Different <strong>intermittent fasting calculator</strong> results
          depend on your chosen method:
        </p>
        <ul>
          <li>
            <strong>16:8 Method:</strong> Fast for 16 hours, eat within an
            8-hour window. Most popular and beginner-friendly.
          </li>
          <li>
            <strong>18:6 Method:</strong> 18-hour fast with a 6-hour eating
            window. More advanced approach.
          </li>
          <li>
            <strong>20:4 Method (Warrior Diet):</strong> 20-hour fast with a
            4-hour eating window.
          </li>
          <li>
            <strong>OMAD (One Meal A Day):</strong> 23-hour fast with a 1-hour
            eating window.
          </li>
          <li>
            <strong>Water Fasting:</strong> Extended fasting periods with only
            water consumption.
          </li>
        </ul>

        <h2>Potential Benefits and Important Risks of Fasting</h2>
        <p>
          While our <strong>free intermittent fasting calculator</strong> can
          help you plan your approach, it's crucial to understand both benefits
          and risks:
        </p>
        <p>
          <strong>Potential Benefits:</strong>
        </p>
        <ul>
          <li>Weight loss and improved body composition</li>
          <li>Enhanced insulin sensitivity</li>
          <li>Simplified meal planning</li>
          <li>Potential longevity benefits</li>
        </ul>
        <p>
          <strong>Important Considerations:</strong>
        </p>
        <ul>
          <li>
            Not suitable for everyone (pregnant women, diabetics, eating
            disorder history)
          </li>
          <li>
            May cause initial side effects (hunger, fatigue, irritability)
          </li>
          <li>Results vary significantly between individuals</li>
          <li>
            Should be combined with nutritious eating during feeding windows
          </li>
        </ul>

        <h2>Frequently Asked Questions (FAQ)</h2>

        <h3>What counts as breaking a fast?</h3>
        <p>
          Any caloric intake technically breaks a fast. This includes food,
          sugary drinks, milk in coffee, and most supplements. However, black
          coffee, plain tea, and water don't break your fast.
        </p>

        <h3>Can I drink water, coffee, or tea while fasting?</h3>
        <p>
          Yes! Water is essential during fasting. Black coffee and plain tea
          (without milk, sugar, or artificial sweeteners) are generally
          acceptable and may even enhance the fasting benefits. Stay hydrated
          throughout your fasting window.
        </p>

        <h3>How accurate is the weight loss calculation?</h3>
        <p>
          Our <strong>intermittent fasting weight loss calculator</strong>{" "}
          provides estimates based on scientific formulas, but individual
          results vary significantly. Factors like genetics, hormones, stress,
          sleep, and adherence affect actual outcomes. Use these estimates as
          general guidance, not precise predictions.
        </p>

        <h3>Is intermittent fasting suitable for everyone?</h3>
        <p>
          No. Intermittent fasting isn't recommended for pregnant or
          breastfeeding women, people with diabetes (without medical
          supervision), those with a history of eating disorders, children, or
          individuals with certain medical conditions. Always consult a
          healthcare professional before starting any fasting regimen.
        </p>
      </article>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Fasting Calculator: Plan Your Intermittent Fasting Window & Estimate Weight Loss",
            description:
              "Use our free fasting calculator to find your ideal intermittent fasting window (16:8, 20:4, etc.) and estimate your potential weight loss during a fast.",
            url: "https://tigerkidtools.com/tools/fasting-calculator",
            mainEntity: [
              {
                "@type": "Question",
                name: "What counts as breaking a fast?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Any caloric intake technically breaks a fast. This includes food, sugary drinks, milk in coffee, and most supplements. However, black coffee, plain tea, and water don't break your fast.",
                },
              },
              {
                "@type": "Question",
                name: "Can I drink water, coffee, or tea while fasting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Water is essential during fasting. Black coffee and plain tea (without milk, sugar, or artificial sweeteners) are generally acceptable and may even enhance the fasting benefits.",
                },
              },
              {
                "@type": "Question",
                name: "How accurate is the weight loss calculation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our calculator provides estimates based on scientific formulas, but individual results vary significantly. Use these estimates as general guidance, not precise predictions.",
                },
              },
              {
                "@type": "Question",
                name: "Is intermittent fasting suitable for everyone?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Intermittent fasting isn't recommended for pregnant or breastfeeding women, people with diabetes, those with a history of eating disorders, children, or individuals with certain medical conditions.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
