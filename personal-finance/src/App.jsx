import React, { useState } from "react";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import Chart from "./components/Chart";
import "./styles.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <TransactionForm onAdd={handleAddTransaction} />

        <div className="dashboard">
          {/* LEFT SIDE */}
          <div className="left-panel">
            <TransactionList transactions={transactions} />
            <Summary transactions={transactions} />
          </div>

          {/* RIGHT SIDE */}
          <div className="right-panel">
            <Chart transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
