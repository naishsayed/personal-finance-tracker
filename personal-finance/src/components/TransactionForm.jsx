import React, { useState } from "react";

export default function TransactionForm({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;
    const finalAmount = type === "expense" ? -Math.abs(amount) : Math.abs(amount);
    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(finalAmount),
      type,
    };
    onAdd(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
}
