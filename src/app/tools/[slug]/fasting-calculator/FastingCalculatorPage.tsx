import { FastingCalculator } from "./components/FastingCalculator";
import Link from "next/link";

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
          periods of eating and voluntary fasting. Unlike traditional diets that
          focus on <em>what</em> you eat, intermittent fasting focuses on{" "}
          <em>when</em> you eat. It&apos;s a structured approach to meal timing
          that can help simplify your day, improve metabolic health, and support
          weight management goals.
        </p>
        <p>
          This <strong>intermittent fasting calculator</strong> is a powerful
          tool designed to support your journey. It has two key functions:
          helping you precisely plan your fasting and eating windows based on
          your schedule, and providing a science-based estimate of potential
          weight loss for longer fasts.
        </p>

        <h2>How to Use Our Ultimate Fasting Calculator</h2>
        <p>
          Our calculator is divided into two intuitive tabs to cover all your
          fasting needs.
        </p>

        <h3>Calculating Your Fasting Window</h3>
        <p>
          The <strong>fasting window calculator</strong> helps you establish a
          consistent daily schedule. Here&apos;s how it works:
        </p>
        <ul>
          <li>
            <strong>Select Your Plan:</strong> Choose from popular pre-set plans
            like 16:8, 18:6, 20:4 (The Warrior Diet), or OMAD (One Meal A Day).
            You can also select &quot;Custom&quot; to define your own fasting
            hours.
          </li>
          <li>
            <strong>Enter Last Meal Time:</strong> Input the time you finished
            your last meal. The calculator defaults to the current time for your
            convenience.
          </li>
          <li>
            <strong>Get Your Schedule:</strong> The tool instantly calculates
            and displays your precise fasting and eating periods, showing you
            exactly when your fast ends and your next eating window begins.
          </li>
        </ul>

        <h3>Estimating Your Fasting Weight Loss</h3>
        <p>
          For those undertaking multi-day fasts (like a water fast), the{" "}
          <strong>water fasting weight loss calculator</strong> provides a
          data-driven estimate based on your unique metabolic profile.
        </p>
        <ul>
          <li>
            <strong>Input Your Metrics:</strong> Provide your gender, age,
            weight (in kg or lbs), height (in cm or ft/in), and typical activity
            level.
          </li>
          <li>
            <strong>Specify Fasting Duration:</strong> Enter the total number of
            days you plan to fast.
          </li>
          <li>
            <strong>Receive Your Estimate:</strong> The calculator will show
            your estimated total weight loss, broken down into fat loss and
            initial water weight loss. It also displays your calculated Basal
            Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE).
          </li>
        </ul>

        <h2>The Science Behind Fasting Weight Loss Estimation</h2>
        <p>
          Our weight loss predictions aren&apos;t just guesses; they are
          calculated based on established metabolic science. Here is the exact
          process our tool follows:
        </p>
        <ol>
          <li>
            <strong>Calculating BMR with Mifflin-St Jeor:</strong> First, we
            determine your Basal Metabolic Rate (BMR)—the calories your body
            burns at rest. Our calculator uses the{" "}
            <strong>Mifflin-St Jeor equation</strong>, which is widely
            considered by nutritionists to be one of the most accurate formulas.
          </li>
          <li>
            <strong>Determining Your TDEE:</strong> Next, we calculate your
            Total Daily Energy Expenditure (TDEE) by multiplying your BMR by an
            activity multiplier corresponding to the activity level you selected
            (Sedentary, Lightly Active, etc.). Your TDEE represents your total
            daily calorie burn. {/* TODO: Add a visual representation or code snippet */}
          </li>
          <li>
            <strong>Estimating Fat Loss:</strong> During a fast, your calorie
            intake is zero, so your daily calorie deficit equals your TDEE.
            It&apos;s scientifically accepted that one pound of body fat is
            equivalent to approximately 3,500 calories. We use this to calculate
            your potential fat loss over the fasting period.
          </li>
          <li>
            <strong>Accounting for Water Weight:</strong> In the first few days
            of a fast, a significant portion of weight loss is from water as
            your body uses up glycogen stores. Our calculator includes a
            conservative estimate for this initial water weight to give you a
            more realistic picture of what to expect on the scale.
          </li>
        </ol>

        <h2>Potential Benefits and Important Risks of Fasting</h2>
        <p>
          While fasting can offer several potential benefits, it&apos;s crucial
          to approach it safely and understand that it&apos;s not suitable for
          everyone.
        </p>
        <p>
          <strong>Potential Benefits:</strong>
        </p>
        <ul>
          <li>
            <strong>Weight Loss:</strong> By creating a calorie deficit, fasting
            can be an effective tool for weight and fat loss.
          </li>
          <li>
            <strong>Improved Insulin Sensitivity:</strong> Fasting can help
            lower insulin levels, making your body&apos;s cells more sensitive
            to it.
          </li>
          <li>
            <strong>Cellular Repair (Autophagy):</strong> Fasting periods can
            trigger a cellular clean-up process called autophagy.
          </li>
          <li>
            <strong>Simplicity:</strong> It can simplify your daily routine by
            reducing the number of meals you need to plan and prepare.
          </li>
        </ul>
        <p>
          <strong>Important Considerations & Risks:</strong>
        </p>
        <ul>
          <li>
            <strong>Not for Everyone:</strong> Fasting is not recommended for
            pregnant or breastfeeding women, individuals with a history of
            eating disorders, those underweight, or people with certain medical
            conditions like diabetes without strict medical supervision.
          </li>
          <li>
            <strong>Potential Side Effects:</strong> You might experience
            initial side effects like hunger, headaches, fatigue, or
            irritability as your body adjusts.
          </li>
          <li>
            <strong>Nutrient Intake:</strong> It&apos;s vital to eat
            nutrient-dense foods during your eating windows to ensure you meet
            your body&apos;s nutritional needs.
          </li>
          <li>
            <strong>Listen to Your Body:</strong> Pay attention to how you feel.
            If you feel unwell, you should break your fast.
          </li>
        </ul>

        <h2>Frequently Asked Questions (FAQ)</h2>

        <h3>What can I consume during my fasting window?</h3>
        <p>
          To maintain a true fasted state, you should avoid any food or drink
          that contains calories. Water, black coffee, and plain tea (herbal or
          green) are generally acceptable and will not break your fast.
        </p>

        <h3>How accurate is the weight loss calculation?</h3>
        <p>
          The <strong>intermittent fasting weight loss calculator</strong>{" "}
          provides a scientific estimate, but it is not a guarantee. Real-world
          results are highly individual and can be influenced by factors like
          your specific metabolism, hormone levels, genetics, sleep quality,
          stress, and how strictly you adhere to the fast. Use the result as a
          motivational guideline, not a precise prediction.
        </p>

        <h3>Is a 16:8 or 18:6 fasting schedule better for weight loss?</h3>
        <p>
          Both schedules can be effective. An 18:6 schedule creates a longer
          daily fasting period, which may lead to a slightly larger calorie
          deficit for some people. However, the best schedule is the one you can
          stick with consistently. Our calculator allows you to model both to
          see which fits your lifestyle better.
        </p>

        <h3>Should I consult a doctor before fasting?</h3>
        <p>
          <strong>Yes.</strong> It is always recommended to consult with a
          healthcare professional before starting any new dietary regimen,
          including intermittent fasting, especially if you have any
          pre-existing health conditions or are taking medication. This tool is
          for informational purposes only and does not constitute medical
          advice.
        </p>
      </article>



      {/* Related Blog Section */}
      <section className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Deep Dive: How This Calculator Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              The Science & Code Behind Our Fasting Calculator
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Curious about the metabolic science and React/TypeScript code that
              powers this tool? Explore the BMR calculations, TDEE formulas, and
              component architecture in our technical deep dive.
            </p>
            <Link
              href="/blog/the-science-and-code-behind-our-fasting-calculator"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read the Technical Article
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
                    {/* BMR Calculation */}
                  </div>
                  <div className="text-blue-600 dark:text-blue-400">
                    bmr = 10 * weight + 6.25 * height...
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
            name: "Fasting Calculator: Plan Your Intermittent Fasting Window & Estimate Weight Loss",
            description:
              "Use our free fasting calculator to find your ideal intermittent fasting window (16:8, 20:4, etc.) and estimate your potential weight loss during a fast based on the Mifflin-St Jeor formula.",
            url: "https://tigerkidtools.com/tools/fasting-calculator",
            mainEntity: [
              {
                "@type": "Question",
                name: "What can I consume during my fasting window?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To maintain a true fasted state, you should avoid any food or drink that contains calories. Water, black coffee, and plain tea (herbal or green) are generally acceptable and will not break your fast.",
                },
              },
              {
                "@type": "Question",
                name: "How accurate is the weight loss calculation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our calculator provides a scientific estimate based on established formulas, but real-world results vary significantly due to individual factors like metabolism, hormones, and adherence. Use it as a motivational guideline.",
                },
              },
              {
                "@type": "Question",
                name: "Is a 16:8 or 18:6 fasting schedule better for weight loss?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Both can be effective. The best schedule is the one that you can maintain consistently and that fits your lifestyle. An 18:6 schedule may offer a slightly larger daily calorie deficit.",
                },
              },
              {
                "@type": "Question",
                name: "Should I consult a doctor before fasting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. It is always recommended to consult with a healthcare professional before starting any new dietary regimen, including intermittent fasting, especially if you have pre-existing health conditions.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
