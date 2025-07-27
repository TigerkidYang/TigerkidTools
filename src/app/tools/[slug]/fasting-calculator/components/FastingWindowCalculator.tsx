"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type FastingPlan = {
  name: string;
  fastingHours: number;
  eatingHours: number;
};

const FASTING_PLANS: FastingPlan[] = [
  { name: "16:8", fastingHours: 16, eatingHours: 8 },
  { name: "18:6", fastingHours: 18, eatingHours: 6 },
  { name: "20:4", fastingHours: 20, eatingHours: 4 },
  { name: "OMAD", fastingHours: 23, eatingHours: 1 },
];

export function FastingWindowCalculator() {
  const [selectedPlan, setSelectedPlan] = useState<FastingPlan>(
    FASTING_PLANS[0]
  );
  const [customFastingHours, setCustomFastingHours] = useState<number>(16);
  const [lastMealTime, setLastMealTime] = useState<string>("");
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [results, setResults] = useState<{
    fastingStart: string;
    fastingEnd: string;
    eatingStart: string;
    eatingEnd: string;
  } | null>(null);

  // Set default time to current time
  useEffect(() => {
    const now = new Date();
    const timeString = now.toTimeString().slice(0, 5);
    setLastMealTime(timeString);
  }, []);

  const calculateWindows = () => {
    if (!lastMealTime) return;

    const fastingHours = isCustom
      ? customFastingHours
      : selectedPlan.fastingHours;
    const eatingHours = 24 - fastingHours;

    // Parse last meal time
    const [hours, minutes] = lastMealTime.split(":").map(Number);
    const lastMeal = new Date();
    lastMeal.setHours(hours, minutes, 0, 0);

    // Calculate fasting start (immediately after last meal)
    const fastingStart = new Date(lastMeal);

    // Calculate fasting end (after fasting hours)
    const fastingEnd = new Date(
      lastMeal.getTime() + fastingHours * 60 * 60 * 1000
    );

    // Calculate eating window
    const eatingStart = new Date(fastingEnd);
    const eatingEnd = new Date(
      fastingEnd.getTime() + eatingHours * 60 * 60 * 1000
    );

    const formatTime = (date: Date) => {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);

      const timeString = date.toTimeString().slice(0, 5);

      if (date.getDate() === today.getDate()) {
        return `Today ${timeString}`;
      } else if (date.getDate() === tomorrow.getDate()) {
        return `Tomorrow ${timeString}`;
      } else {
        return `${date.getDate()}/${date.getMonth() + 1} ${timeString}`;
      }
    };

    setResults({
      fastingStart: formatTime(fastingStart),
      fastingEnd: formatTime(fastingEnd),
      eatingStart: formatTime(eatingStart),
      eatingEnd: formatTime(eatingEnd),
    });
  };

  useEffect(() => {
    if (lastMealTime) {
      calculateWindows();
    }
  }, [selectedPlan, customFastingHours, lastMealTime, isCustom]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
          Plan Your Fasting Window
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Select your fasting schedule and last meal time to calculate your
          optimal fasting and eating windows.
        </p>
      </div>

      {/* Fasting Plan Selection */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Fasting Plan
        </label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {FASTING_PLANS.map((plan) => (
            <button
              key={plan.name}
              onClick={() => {
                setSelectedPlan(plan);
                setIsCustom(false);
              }}
              className={cn(
                "rounded-md border px-3 py-2 text-sm font-medium transition-colors",
                !isCustom && selectedPlan.name === plan.name
                  ? "border-gray-900 bg-gray-900 text-white dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-500"
              )}
            >
              {plan.name}
            </button>
          ))}
          <button
            onClick={() => setIsCustom(true)}
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-medium transition-colors",
              isCustom
                ? "border-gray-900 bg-gray-900 text-white dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900"
                : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-500"
            )}
          >
            Custom
          </button>
        </div>
      </div>

      {/* Custom Fasting Hours */}
      {isCustom && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Custom Fasting Hours
          </label>
          <input
            type="number"
            min="12"
            max="24"
            value={customFastingHours}
            onChange={(e) => setCustomFastingHours(Number(e.target.value))}
            className="block w-32 rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
          />
        </div>
      )}

      {/* Last Meal Time */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Last Meal Time
        </label>
        <input
          type="time"
          value={lastMealTime}
          onChange={(e) => setLastMealTime(e.target.value)}
          className="block w-40 rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
        />
      </div>

      {/* Results */}
      {results && (
        <div className="mt-8 space-y-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Your Fasting Schedule
          </h4>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Fasting Window */}
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
              <h5 className="mb-2 font-medium text-red-900 dark:text-red-200">
                🚫 Fasting Window
              </h5>
              <p className="text-sm text-red-700 dark:text-red-300">
                <span className="font-medium">From:</span>{" "}
                {results.fastingStart}
              </p>
              <p className="text-sm text-red-700 dark:text-red-300">
                <span className="font-medium">To:</span> {results.fastingEnd}
              </p>
              <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                Duration:{" "}
                {isCustom ? customFastingHours : selectedPlan.fastingHours}{" "}
                hours
              </p>
            </div>

            {/* Eating Window */}
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
              <h5 className="mb-2 font-medium text-green-900 dark:text-green-200">
                🍽️ Eating Window
              </h5>
              <p className="text-sm text-green-700 dark:text-green-300">
                <span className="font-medium">From:</span> {results.eatingStart}
              </p>
              <p className="text-sm text-green-700 dark:text-green-300">
                <span className="font-medium">To:</span> {results.eatingEnd}
              </p>
              <p className="mt-2 text-xs text-green-600 dark:text-green-400">
                Duration:{" "}
                {24 -
                  (isCustom
                    ? customFastingHours
                    : selectedPlan.fastingHours)}{" "}
                hours
              </p>
            </div>
          </div>

          {/* Timeline Visualization */}
          <div className="mt-6">
            <h5 className="mb-3 font-medium text-gray-900 dark:text-gray-100">
              24-Hour Timeline
            </h5>
            <div className="relative h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              {/* This is a simplified timeline - you could make it more sophisticated */}
              <div
                className="absolute h-full rounded-full bg-red-400"
                style={{
                  left: `${
                    ((isCustom
                      ? customFastingHours
                      : selectedPlan.fastingHours) /
                      24) *
                    100
                  }%`,
                  width: `${
                    ((24 -
                      (isCustom
                        ? customFastingHours
                        : selectedPlan.fastingHours)) /
                      24) *
                    100
                  }%`,
                }}
              />
              <div
                className="absolute h-full rounded-full bg-green-400"
                style={{
                  left: "0%",
                  width: `${
                    ((isCustom
                      ? customFastingHours
                      : selectedPlan.fastingHours) /
                      24) *
                    100
                  }%`,
                }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Fasting</span>
              <span>Eating</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
