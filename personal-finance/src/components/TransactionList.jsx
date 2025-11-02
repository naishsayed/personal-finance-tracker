import React from "react";

export default function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      {transactions.length === 0 ? (
        <p className="empty">No transactions yet.</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li
              key={t.id}
              className={`transaction-item ${t.amount < 0 ? "expense" : "income"}`}
            >
              <span>{t.text}</span>
              <span className="amount">
                {t.amount < 0 ? "-" : "+"}₹{Math.abs(t.amount)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
