"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Gender = "male" | "female";
type ActivityLevel = "sedentary" | "light" | "moderate" | "very" | "extra";
type WeightUnit = "kg" | "lbs";
type HeightUnit = "cm" | "ft-in";

const ACTIVITY_LEVELS = {
  sedentary: {
    name: "Sedentary",
    multiplier: 1.2,
    description: "Little to no exercise",
  },
  light: {
    name: "Lightly Active",
    multiplier: 1.375,
    description: "Light exercise 1-3 days/week",
  },
  moderate: {
    name: "Moderately Active",
    multiplier: 1.55,
    description: "Moderate exercise 3-5 days/week",
  },
  very: {
    name: "Very Active",
    multiplier: 1.725,
    description: "Hard exercise 6-7 days/week",
  },
  extra: {
    name: "Extra Active",
    multiplier: 1.9,
    description: "Very hard exercise, physical job",
  },
};

export function WeightLossEstimator() {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState<number>(30);
  const [weight, setWeight] = useState<number>(70);
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [height, setHeight] = useState<number>(175);
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(9);
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>("moderate");
  const [fastingDays, setFastingDays] = useState<number>(1);
  const [results, setResults] = useState<{
    totalWeightLoss: number;
    fatLoss: number;
    waterLoss: number;
    bmr: number;
    tdee: number;
  } | null>(null);

  const calculateWeightLoss = () => {
    // Convert weight to kg
    const weightInKg = weightUnit === "lbs" ? weight * 0.453592 : weight;

    // Convert height to cm
    let heightInCm: number;
    if (heightUnit === "ft-in") {
      heightInCm = (heightFeet * 12 + heightInches) * 2.54;
    } else {
      heightInCm = height;
    }

    // Calculate BMR using Mifflin-St Jeor equation
    let bmr: number;
    if (gender === "male") {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;
    } else {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;
    }

    // Calculate TDEE
    const tdee = bmr * ACTIVITY_LEVELS[activityLevel].multiplier;

    // Calculate total calorie deficit
    const totalCalorieDeficit = tdee * fastingDays;

    // Estimate fat loss (3500 calories = 1 lb of fat)
    const fatLossLbs = totalCalorieDeficit / 3500;
    const fatLossKg = fatLossLbs * 0.453592;

    // Estimate water loss (typically 1-3 lbs for first few days)
    const waterLossLbs = Math.min(fastingDays * 0.5, 3);
    const waterLossKg = waterLossLbs * 0.453592;

    // Total weight loss
    const totalWeightLossKg = fatLossKg + waterLossKg;
    const totalWeightLossLbs = totalWeightLossKg / 0.453592;

    setResults({
      totalWeightLoss:
        weightUnit === "kg" ? totalWeightLossKg : totalWeightLossLbs,
      fatLoss: weightUnit === "kg" ? fatLossKg : fatLossLbs,
      waterLoss: weightUnit === "kg" ? waterLossKg : waterLossLbs,
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
          Estimate Your Fasting Weight Loss
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Enter your personal information to get an estimate of potential weight
          loss during fasting.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Personal Information */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900 dark:text-gray-100">
            Personal Information
          </h4>

          {/* Gender */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Gender
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setGender("male")}
                className={cn(
                  "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                  gender === "male"
                    ? "border-gray-900 bg-gray-900 text-white dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900"
                    : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
                )}
              >
                Male
              </button>
              <button
                onClick={() => setGender("female")}
                className={cn(
                  "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                  gender === "female"
                    ? "border-gray-900 bg-gray-900 text-white dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900"
                    : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
                )}
              >
                Female
              </button>
            </div>
          </div>

          {/* Age */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Age
            </label>
            <input
              type="number"
              min="18"
              max="100"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="block w-24 rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>

          {/* Weight */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Weight
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min="30"
                max="300"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="block w-24 rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
              />
              <select
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value as WeightUnit)}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
              >
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
              </select>
            </div>
          </div>

          {/* Height */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Height
            </label>
            <div className="flex gap-2">
              {heightUnit === "cm" ? (
                <input
                  type="number"
                  min="120"
                  max="250"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="block w-24 rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                />
              ) : (
                <>
                  <input
                    type="number"
                    min="4"
                    max="7"
                    value={heightFeet}
                    onChange={(e) => setHeightFeet(Number(e.target.value))}
                    className="block w-16 rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                    placeholder="ft"
                  />
                  <input
                    type="number"
                    min="0"
                    max="11"
                    value={heightInches}
                    onChange={(e) => setHeightInches(Number(e.target.value))}
                    className="block w-16 rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                    placeholder="in"
                  />
                </>
              )}
              <select
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value as HeightUnit)}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
              >
                <option value="cm">cm</option>
                <option value="ft-in">ft/in</option>
              </select>
            </div>
          </div>
        </div>

        {/* Fasting Details */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900 dark:text-gray-100">
            Fasting Details
          </h4>

          {/* Activity Level */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Activity Level
            </label>
            <select
              value={activityLevel}
              onChange={(e) =>
                setActivityLevel(e.target.value as ActivityLevel)
              }
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            >
              {Object.entries(ACTIVITY_LEVELS).map(([key, level]) => (
                <option key={key} value={key}>
                  {level.name} - {level.description}
                </option>
              ))}
            </select>
          </div>

          {/* Fasting Duration */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Fasting Duration (days)
            </label>
            <input
              type="number"
              min="1"
              max="30"
              value={fastingDays}
              onChange={(e) => setFastingDays(Number(e.target.value))}
              className="block w-24 rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateWeightLoss}
            className="w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Calculate Weight Loss
          </button>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="mt-8 space-y-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Estimated Weight Loss Results
          </h4>

          {/* Main Result */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-center dark:border-blue-800 dark:bg-blue-900/20">
            <h5 className="mb-2 text-2xl font-bold text-blue-900 dark:text-blue-200">
              {results.totalWeightLoss.toFixed(1)} {weightUnit}
            </h5>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Estimated total weight loss over {fastingDays} day
              {fastingDays > 1 ? "s" : ""}
            </p>
          </div>

          {/* Breakdown */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
              <h6 className="font-medium text-gray-900 dark:text-gray-100">
                Fat Loss
              </h6>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {results.fatLoss.toFixed(1)} {weightUnit}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                From calorie deficit
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
              <h6 className="font-medium text-gray-900 dark:text-gray-100">
                Water Loss
              </h6>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {results.waterLoss.toFixed(1)} {weightUnit}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Initial water weight
              </p>
            </div>
          </div>

          {/* Metabolic Info */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
              <h6 className="font-medium text-gray-900 dark:text-gray-100">
                BMR
              </h6>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {results.bmr} calories/day
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Basal Metabolic Rate
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
              <h6 className="font-medium text-gray-900 dark:text-gray-100">
                TDEE
              </h6>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {results.tdee} calories/day
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Total Daily Energy Expenditure
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
            <h6 className="mb-2 font-medium text-yellow-900 dark:text-yellow-200">
              ⚠️ Important Disclaimer
            </h6>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">
              These results are mathematical estimates based on general formulas
              and may not reflect your actual weight loss. Individual results
              vary significantly due to genetics, hormones, stress, sleep, and
              other factors.
              <strong>
                {" "}
                Always consult with a healthcare professional before starting
                any fasting regimen.
              </strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
