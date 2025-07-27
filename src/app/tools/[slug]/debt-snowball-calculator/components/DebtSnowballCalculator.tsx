"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Debt {
  id: string;
  name: string;
  type: string; // Added type field
  balance: number;
  minPayment: number;
  interestRate: number;
}

interface PaymentScheduleItem {
  month: number;
  debts: Array<{
    id: string;
    name: string;
    payment: number;
    remainingBalance: number;
    isPaidOff: boolean;
  }>;
  totalPayment: number;
}

interface SnowballResults {
  totalMonths: number;
  totalInterest: number;
  totalPaid: number;
  debtFreeDate: string;
  paymentSchedule: PaymentScheduleItem[];
  debtOrder: Debt[];
}

const DEBT_TYPES = [
  "Credit Card",
  "Personal Loan",
  "Auto Loan",
  "Student Loan",
  "Medical Bill",
  "Other",
];

export function DebtSnowballCalculator() {
  const [debts, setDebts] = useState<Debt[]>([
    {
      id: "1",
      name: "Credit Card 1",
      type: "Credit Card",
      balance: 2500,
      minPayment: 75,
      interestRate: 18.99,
    },
    {
      id: "2",
      name: "Store Card",
      type: "Credit Card",
      balance: 800,
      minPayment: 25,
      interestRate: 24.99,
    },
    {
      id: "3",
      name: "Personal Loan",
      type: "Personal Loan",
      balance: 5000,
      minPayment: 150,
      interestRate: 12.5,
    },
  ]);

  const [extraPayment, setExtraPayment] = useState<number>(200);
  const [results, setResults] = useState<SnowballResults | null>(null);

  const addDebt = () => {
    const newDebt: Debt = {
      id: Date.now().toString(),
      name: `Debt ${debts.length + 1}`,
      type: "Other",
      balance: 1000,
      minPayment: 50,
      interestRate: 15,
    };
    setDebts([...debts, newDebt]);
  };

  const removeDebt = (id: string) => {
    setDebts(debts.filter((debt) => debt.id !== id));
  };

  const updateDebt = (
    id: string,
    field: keyof Debt,
    value: string | number
  ) => {
    setDebts(
      debts.map((debt) => (debt.id === id ? { ...debt, [field]: value } : debt))
    );
  };

  const calculateSnowball = () => {
    if (debts.length === 0) return;

    // Sort debts by balance (smallest first) for snowball method
    const sortedDebts = [...debts].sort((a, b) => a.balance - b.balance);

    // Initialize tracking variables
    let month = 0;
    let totalInterest = 0;
    let debtBalances = sortedDebts.map((debt) => ({ ...debt }));
    const paymentSchedule: PaymentScheduleItem[] = [];
    const totalMinPayments = debts.reduce(
      (sum, debt) => sum + debt.minPayment,
      0
    );
    let availableExtraPayment = extraPayment;

    while (debtBalances.some((debt) => debt.balance > 0)) {
      month++;
      const monthlySchedule: PaymentScheduleItem = {
        month,
        debts: [],
        totalPayment: 0,
      };

      let remainingExtraPayment = availableExtraPayment;

      // Process each debt
      for (let i = 0; i < debtBalances.length; i++) {
        const debt = debtBalances[i];

        if (debt.balance <= 0) {
          monthlySchedule.debts.push({
            id: debt.id,
            name: debt.name,
            payment: 0,
            remainingBalance: 0,
            isPaidOff: true,
          });
          continue;
        }

        // Calculate interest for this month
        const monthlyInterest = (debt.balance * debt.interestRate) / 100 / 12;
        totalInterest += monthlyInterest;

        // Determine payment amount
        let payment = debt.minPayment;

        // Apply extra payment to the smallest debt first
        if (i === 0 && remainingExtraPayment > 0) {
          payment += remainingExtraPayment;
          remainingExtraPayment = 0;
        }

        // Don't pay more than the remaining balance + interest
        const maxPayment = debt.balance + monthlyInterest;
        payment = Math.min(payment, maxPayment);

        // Update balance
        const newBalance = Math.max(
          0,
          debt.balance + monthlyInterest - payment
        );

        // If debt is paid off, add its minimum payment to extra payment for next month
        if (newBalance === 0 && debt.balance > 0) {
          availableExtraPayment += debt.minPayment;
        }

        debt.balance = newBalance;

        monthlySchedule.debts.push({
          id: debt.id,
          name: debt.name,
          payment,
          remainingBalance: newBalance,
          isPaidOff: newBalance === 0,
        });

        monthlySchedule.totalPayment += payment;
      }

      paymentSchedule.push(monthlySchedule);

      // Safety break to prevent infinite loops
      if (month > 600) break;
    }

    const totalPaid = paymentSchedule.reduce(
      (sum, month) => sum + month.totalPayment,
      0
    );
    const debtFreeDate = new Date();
    debtFreeDate.setMonth(debtFreeDate.getMonth() + month);

    setResults({
      totalMonths: month,
      totalInterest,
      totalPaid,
      debtFreeDate: debtFreeDate.toLocaleDateString(),
      paymentSchedule,
      debtOrder: sortedDebts,
    });
  };

  useEffect(() => {
    if (debts.length > 0) {
      calculateSnowball();
    }
  }, [debts, extraPayment]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatTime = (months: number) => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) return `${remainingMonths} months`;
    if (remainingMonths === 0) return `${years} years`;
    return `${years} years, ${remainingMonths} months`;
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Debt Input Section */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Enter Your Debts
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Add all your debts to see your snowball payoff plan. The calculator
            will automatically sort them from smallest to largest balance.
          </p>
        </div>

        {/* Debts List */}
        <div className="space-y-4">
          {debts.map((debt, index) => (
            <div
              key={debt.id}
              className="grid gap-4 rounded-lg border border-gray-200 p-4 dark:border-gray-600 md:grid-cols-6"
            >
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                  Debt Name
                </label>
                <input
                  type="text"
                  value={debt.name}
                  onChange={(e) => updateDebt(debt.id, "name", e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                  Debt Type
                </label>
                <select
                  value={debt.type}
                  onChange={(e) => updateDebt(debt.id, "type", e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                >
                  {DEBT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                  Current Balance
                </label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-2 text-sm text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={debt.balance}
                    onChange={(e) =>
                      updateDebt(debt.id, "balance", Number(e.target.value))
                    }
                    className="block w-full rounded-md border border-gray-300 pl-8 pr-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                  Min Payment
                </label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-2 text-sm text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={debt.minPayment}
                    onChange={(e) =>
                      updateDebt(debt.id, "minPayment", Number(e.target.value))
                    }
                    className="block w-full rounded-md border border-gray-300 pl-8 pr-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                  Interest Rate
                </label>
                <div className="relative mt-1">
                  <input
                    type="number"
                    min="0"
                    max="50"
                    step="0.01"
                    value={debt.interestRate}
                    onChange={(e) =>
                      updateDebt(
                        debt.id,
                        "interestRate",
                        Number(e.target.value)
                      )
                    }
                    className="block w-full rounded-md border border-gray-300 pr-8 pl-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                  />
                  <span className="absolute right-3 top-2 text-sm text-gray-500">
                    %
                  </span>
                </div>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => removeDebt(debt.id)}
                  disabled={debts.length === 1}
                  className="rounded-md border border-red-300 px-3 py-2 text-sm text-red-700 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-red-600 dark:text-red-400 dark:hover:bg-red-900/20"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Debt Button */}
        <button
          onClick={addDebt}
          className="mt-4 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
        >
          Add Another Debt
        </button>

        {/* Extra Payment */}
        <div className="mt-6 max-w-xs">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Extra Monthly Payment
          </label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-2 text-sm text-gray-500">
              $
            </span>
            <input
              type="number"
              min="0"
              step="10"
              value={extraPayment}
              onChange={(e) => setExtraPayment(Number(e.target.value))}
              className="block w-full rounded-md border border-gray-300 pl-8 pr-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Amount beyond minimum payments
          </p>
        </div>
      </div>

      {/* Results Section */}
      {results && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
              <h4 className="font-medium text-green-900 dark:text-green-200">
                Debt-Free Date
              </h4>
              <p className="text-lg font-semibold text-green-900 dark:text-green-200">
                {results.debtFreeDate}
              </p>
              <p className="text-xs text-green-700 dark:text-green-300">
                {formatTime(results.totalMonths)}
              </p>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
              <h4 className="font-medium text-blue-900 dark:text-blue-200">
                Total Interest
              </h4>
              <p className="text-lg font-semibold text-blue-900 dark:text-blue-200">
                {formatCurrency(results.totalInterest)}
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                Interest you'll pay
              </p>
            </div>

            <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
              <h4 className="font-medium text-purple-900 dark:text-purple-200">
                Total Paid
              </h4>
              <p className="text-lg font-semibold text-purple-900 dark:text-purple-200">
                {formatCurrency(results.totalPaid)}
              </p>
              <p className="text-xs text-purple-700 dark:text-purple-300">
                Principal + Interest
              </p>
            </div>

            <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
              <h4 className="font-medium text-orange-900 dark:text-orange-200">
                Payoff Order
              </h4>
              <p className="text-sm font-medium text-orange-900 dark:text-orange-200">
                Smallest to Largest
              </p>
              <p className="text-xs text-orange-700 dark:text-orange-300">
                {results.debtOrder.length} debts total
              </p>
            </div>
          </div>

          {/* Debt Order */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Your Debt Snowball Order
            </h4>
            <div className="space-y-3">
              {results.debtOrder.map((debt, index) => (
                <div
                  key={debt.id}
                  className="flex items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-600"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white dark:bg-gray-100 dark:text-gray-900">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        {debt.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {debt.interestRate}% APR
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      {formatCurrency(debt.balance)}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Min: {formatCurrency(debt.minPayment)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
