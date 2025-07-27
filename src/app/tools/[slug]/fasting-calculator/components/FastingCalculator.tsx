"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { FastingWindowCalculator } from "./FastingWindowCalculator";
import { WeightLossEstimator } from "./WeightLossEstimator";

type TabType = "window" | "weightloss";

export function FastingCalculator() {
  const [activeTab, setActiveTab] = useState<TabType>("window");

  return (
    <div className="mx-auto max-w-4xl">
      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("window")}
              className={cn(
                "whitespace-nowrap border-b-2 py-2 px-1 text-sm font-medium",
                activeTab === "window"
                  ? "border-gray-900 text-gray-900 dark:border-gray-100 dark:text-gray-100"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300"
              )}
            >
              Fasting Window Calculator
            </button>
            <button
              onClick={() => setActiveTab("weightloss")}
              className={cn(
                "whitespace-nowrap border-b-2 py-2 px-1 text-sm font-medium",
                activeTab === "weightloss"
                  ? "border-gray-900 text-gray-900 dark:border-gray-100 dark:text-gray-100"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300"
              )}
            >
              Weight Loss Estimator
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        {activeTab === "window" && <FastingWindowCalculator />}
        {activeTab === "weightloss" && <WeightLossEstimator />}
      </div>
    </div>
  );
}
