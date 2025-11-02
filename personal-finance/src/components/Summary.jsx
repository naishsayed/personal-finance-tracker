import React from "react";

export default function Summary({ transactions = [] }) {
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income + expense;

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Income: ₹{income.toFixed(2)}</p>
      <p>Expense: ₹{Math.abs(expense).toFixed(2)}</p>
      <h3>Balance: ₹{balance.toFixed(2)}</h3>
    </div>
  );
}
