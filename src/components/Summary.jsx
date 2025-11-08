import { useContext, useMemo } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

export default function Summary() {
  const { expenses } = useContext(ExpenseContext);

  const total = useMemo(
    () => expenses.reduce((sum, e) => sum + e.amount, 0),
    [expenses]
  );

  return (
    <div className="summary">
      <h3>Total Expenses: ₹{total.toFixed(2)}</h3>
      <p>Transactions: {expenses.length}</p>
    </div>
  );
}

// end code
