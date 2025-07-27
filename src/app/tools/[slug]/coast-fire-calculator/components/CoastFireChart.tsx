"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface CoastFireChartProps {
  currentAge: number;
  retirementAge: number;
  currentBalance: number;
  coastFireNumber: number;
  monthlySavings: number;
  expectedReturn: number;
  targetRetirementAmount: number;
}

export function CoastFireChart({
  currentAge,
  retirementAge,
  currentBalance,
  coastFireNumber,
  monthlySavings,
  expectedReturn,
  targetRetirementAmount,
}: CoastFireChartProps) {
  const yearsToRetirement = retirementAge - currentAge;

  if (yearsToRetirement <= 0) {
    return null;
  }

  // Generate data points for each year
  const years = [];
  const currentBalanceGrowth = [];
  const withSavingsGrowth = [];
  const coastFireTarget = [];
  const retirementTarget = [];

  const annualReturn = expectedReturn / 100;
  const annualSavings = monthlySavings * 12;

  for (let year = 0; year <= yearsToRetirement; year++) {
    const age = currentAge + year;
    years.push(age.toString());

    // Current balance growth (no additional savings)
    const currentGrowth = currentBalance * Math.pow(1 + annualReturn, year);
    currentBalanceGrowth.push(Math.round(currentGrowth));

    // Growth with continued savings
    let balanceWithSavings = currentBalance;
    for (let i = 0; i < year; i++) {
      balanceWithSavings =
        balanceWithSavings * (1 + annualReturn) + annualSavings;
    }
    withSavingsGrowth.push(Math.round(balanceWithSavings));

    // Coast FIRE target line (horizontal)
    coastFireTarget.push(Math.round(coastFireNumber));

    // Final retirement target line (horizontal)
    retirementTarget.push(Math.round(targetRetirementAmount));
  }

  const data = {
    labels: years,
    datasets: [
      {
        label: "Current Balance (No Additional Savings)",
        data: currentBalanceGrowth,
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.05)",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        fill: false,
      },
      {
        label: "With Continued Savings",
        data: withSavingsGrowth,
        borderColor: "rgb(16, 185, 129)",
        backgroundColor: "rgba(16, 185, 129, 0.05)",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        fill: false,
      },
      {
        label: "Coast FIRE Target",
        data: coastFireTarget,
        borderColor: "rgb(245, 158, 11)",
        backgroundColor: "rgba(245, 158, 11, 0.05)",
        borderWidth: 2,
        borderDash: [8, 4],
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 5,
        fill: false,
      },
      {
        label: "Retirement Target",
        data: retirementTarget,
        borderColor: "rgb(239, 68, 68)",
        backgroundColor: "rgba(239, 68, 68, 0.05)",
        borderWidth: 2,
        borderDash: [12, 6],
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 5,
        fill: false,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          boxWidth: 12,
          font: {
            size: 11,
          },
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (context) {
            const value = context.parsed.y;
            return `${context.dataset.label}: $${value.toLocaleString()}`;
          },
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Age",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Investment Value ($)",
        },
        ticks: {
          callback: function (value) {
            if (typeof value === "number") {
              return "$" + (value / 1000).toFixed(0) + "K";
            }
            return value;
          },
        },
      },
    },
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Coast FIRE Growth Projection
      </h4>
      <div className="h-[500px] w-full">
        <Line
          data={data}
          options={{
            ...options,
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
      <div className="mt-6 text-xs text-gray-600 dark:text-gray-400">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <span className="inline-block w-3 h-0.5 bg-blue-500 mr-2"></span>
            Current balance growth
          </div>
          <div>
            <span className="inline-block w-3 h-0.5 bg-green-500 mr-2"></span>
            With continued savings
          </div>
          <div>
            <span className="inline-block w-3 h-0.5 bg-yellow-500 mr-2 border-dashed border-t"></span>
            Coast FIRE target
          </div>
          <div>
            <span className="inline-block w-3 h-0.5 bg-red-500 mr-2 border-dashed border-t"></span>
            Retirement target
          </div>
        </div>
      </div>
    </div>
  );
}
