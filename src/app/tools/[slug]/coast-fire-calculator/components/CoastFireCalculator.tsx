"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CoastFireChart } from "./CoastFireChart";

interface CoastFireResults {
  coastFireNumber: number;
  currentGap: number;
  isCoastFireReached: boolean;
  futureValue: number;
  monthsToCoastFire: number;
  realAnnualExpenses: number;
  targetRetirementAmount: number;
}

export function CoastFireCalculator() {
  // Input states
  const [currentAge, setCurrentAge] = useState<number>(25);
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [currentBalance, setCurrentBalance] = useState<number>(50000);
  const [annualExpenses, setAnnualExpenses] = useState<number>(50000);
  const [expectedReturn, setExpectedReturn] = useState<number>(7);
  const [inflationRate, setInflationRate] = useState<number>(3);
  const [withdrawalRate, setWithdrawalRate] = useState<number>(4);
  const [monthlySavings, setMonthlySavings] = useState<number>(2000);

  // Results state
  const [results, setResults] = useState<CoastFireResults | null>(null);

  const calculateCoastFire = () => {
    const yearsToRetirement = retirementAge - currentAge;

    if (yearsToRetirement <= 0) {
      return;
    }

    // Proper inflation-adjusted Coast FIRE calculation
    // Step 1: Calculate what annual expenses will be in future dollars due to inflation
    const realAnnualExpenses =
      annualExpenses * Math.pow(1 + inflationRate / 100, yearsToRetirement);

    // Step 2: Calculate target retirement amount needed (in future dollars)
    const targetRetirementAmount = realAnnualExpenses / (withdrawalRate / 100);

    // Step 3: Calculate Coast FIRE number - what we need today to reach that target
    // Using nominal returns (which include inflation effects)
    const coastFireNumber =
      targetRetirementAmount /
      Math.pow(1 + expectedReturn / 100, yearsToRetirement);

    // Calculate gap
    const currentGap = Math.max(0, coastFireNumber - currentBalance);
    const isCoastFireReached = currentBalance >= coastFireNumber;

    // Calculate future value of current balance
    const futureValue =
      currentBalance * Math.pow(1 + expectedReturn / 100, yearsToRetirement);

    // Calculate months to reach Coast FIRE (if not reached)
    let monthsToCoastFire = 0;
    if (!isCoastFireReached && monthlySavings > 0) {
      const monthlyReturn = expectedReturn / 100 / 12;
      let balance = currentBalance;

      while (balance < coastFireNumber && monthsToCoastFire < 600) {
        // Max 50 years
        balance = balance * (1 + monthlyReturn) + monthlySavings;
        monthsToCoastFire++;
      }
    }

    setResults({
      coastFireNumber,
      currentGap,
      isCoastFireReached,
      futureValue,
      monthsToCoastFire,
      realAnnualExpenses,
      targetRetirementAmount,
    });
  };

  useEffect(() => {
    calculateCoastFire();
  }, [
    currentAge,
    retirementAge,
    currentBalance,
    annualExpenses,
    expectedReturn,
    inflationRate,
    withdrawalRate,
    monthlySavings,
  ]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatTimeToCoastFire = (months: number) => {
    if (months === 0) return "Already reached!";
    if (months >= 600) return "More than 50 years";

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) return `${remainingMonths} months`;
    if (remainingMonths === 0) return `${years} years`;
    return `${years} years, ${remainingMonths} months`;
  };

  return (
    <div className="mx-auto max-w-6xl">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div>
          <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Calculate Your Coast FIRE Number
          </h3>
          <p className="mb-6 text-sm text-gray-600 dark:text-gray-300">
            Enter your information below to discover how much you need to save
            now to coast to financial independence.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Input Form */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Current Age */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Current Age
                </label>
                <input
                  type="number"
                  min="18"
                  max="80"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                />
              </div>

              {/* Retirement Age */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Target Retirement Age
                </label>
                <input
                  type="number"
                  min="50"
                  max="80"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                />
              </div>
            </div>

            {/* Current Investment Balance */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Current Investment Balance
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-sm text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={currentBalance}
                  onChange={(e) => setCurrentBalance(Number(e.target.value))}
                  className="block w-full rounded-md border border-gray-300 pl-8 pr-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                />
              </div>
            </div>

            {/* Annual Expenses */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Annual Expenses in Retirement
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-sm text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={annualExpenses}
                  onChange={(e) => setAnnualExpenses(Number(e.target.value))}
                  className="block w-full rounded-md border border-gray-300 pl-8 pr-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                />
              </div>
            </div>

            {/* Monthly Savings */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Current Monthly Savings
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-sm text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  step="100"
                  value={monthlySavings}
                  onChange={(e) => setMonthlySavings(Number(e.target.value))}
                  className="block w-full rounded-md border border-gray-300 pl-8 pr-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                />
              </div>
            </div>

            {/* Advanced Settings */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900 dark:text-gray-100">
                Advanced Settings
              </h4>

              <div className="grid gap-4 sm:grid-cols-3">
                {/* Expected Return */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Expected Annual Return
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      max="15"
                      step="0.1"
                      value={expectedReturn}
                      onChange={(e) =>
                        setExpectedReturn(Number(e.target.value))
                      }
                      className="block w-full rounded-md border border-gray-300 pr-8 pl-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                    />
                    <span className="absolute right-3 top-2 text-sm text-gray-500">
                      %
                    </span>
                  </div>
                </div>

                {/* Inflation Rate */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Inflation Rate
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      value={inflationRate}
                      onChange={(e) => setInflationRate(Number(e.target.value))}
                      className="block w-full rounded-md border border-gray-300 pr-8 pl-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                    />
                    <span className="absolute right-3 top-2 text-sm text-gray-500">
                      %
                    </span>
                  </div>
                </div>

                {/* Withdrawal Rate */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Safe Withdrawal Rate
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="2"
                      max="8"
                      step="0.1"
                      value={withdrawalRate}
                      onChange={(e) =>
                        setWithdrawalRate(Number(e.target.value))
                      }
                      className="block w-full rounded-md border border-gray-300 pr-8 pl-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                    />
                    <span className="absolute right-3 top-2 text-sm text-gray-500">
                      %
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          {results && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Your Coast FIRE Analysis
              </h4>

              {/* Main Result */}
              <div
                className={cn(
                  "rounded-lg border p-6 text-center",
                  results.isCoastFireReached
                    ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                    : "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20"
                )}
              >
                <h5
                  className={cn(
                    "mb-2 text-2xl font-bold",
                    results.isCoastFireReached
                      ? "text-green-900 dark:text-green-200"
                      : "text-blue-900 dark:text-blue-200"
                  )}
                >
                  {formatCurrency(results.coastFireNumber)}
                </h5>
                <p
                  className={cn(
                    "text-sm",
                    results.isCoastFireReached
                      ? "text-green-700 dark:text-green-300"
                      : "text-blue-700 dark:text-blue-300"
                  )}
                >
                  Your Coast FIRE Number
                </p>
                <p
                  className={cn(
                    "mt-2 text-xs",
                    results.isCoastFireReached
                      ? "text-green-600 dark:text-green-400"
                      : "text-blue-600 dark:text-blue-400"
                  )}
                >
                  {results.isCoastFireReached
                    ? "🎉 Congratulations! You've reached Coast FIRE!"
                    : `You need ${formatCurrency(
                        results.currentGap
                      )} more to reach Coast FIRE`}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                  <h6 className="font-medium text-gray-900 dark:text-gray-100">
                    Current Balance Growth
                  </h6>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {formatCurrency(results.futureValue)}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Value at age {retirementAge}
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                  <h6 className="font-medium text-gray-900 dark:text-gray-100">
                    Time to Coast FIRE
                  </h6>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {formatTimeToCoastFire(results.monthsToCoastFire)}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    At current savings rate
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                  <h6 className="font-medium text-gray-900 dark:text-gray-100">
                    Retirement Expenses
                  </h6>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {formatCurrency(results.realAnnualExpenses)}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Inflation-adjusted annual
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                  <h6 className="font-medium text-gray-900 dark:text-gray-100">
                    Years to Retirement
                  </h6>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {retirementAge - currentAge}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Time for compound growth
                  </p>
                </div>
              </div>

              {/* Action Items */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                <h6 className="mb-3 font-medium text-gray-900 dark:text-gray-100">
                  📋 Next Steps
                </h6>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {results.isCoastFireReached ? (
                    <>
                      <p>✅ You've reached Coast FIRE! You can now:</p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>
                          Reduce your savings rate and enjoy more lifestyle
                          flexibility
                        </li>
                        <li>
                          Continue saving to reach full FIRE for early
                          retirement
                        </li>
                        <li>
                          Take more career risks knowing your retirement is
                          secure
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <p>🎯 To reach Coast FIRE faster, consider:</p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>
                          Increase monthly savings to{" "}
                          {formatCurrency(
                            results.currentGap /
                              Math.max(results.monthsToCoastFire, 1) +
                              monthlySavings
                          )}
                        </li>
                        <li>Maximize employer 401(k) matching</li>
                        <li>Invest in low-cost index funds</li>
                        <li>Consider side income to boost savings rate</li>
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Growth Visualization Chart - Full Width */}
        {results && (
          <div className="mt-8">
            <CoastFireChart
              currentAge={currentAge}
              retirementAge={retirementAge}
              currentBalance={currentBalance}
              coastFireNumber={results.coastFireNumber}
              monthlySavings={monthlySavings}
              expectedReturn={expectedReturn}
              targetRetirementAmount={results.targetRetirementAmount}
            />
          </div>
        )}
      </div>
    </div>
  );
}
