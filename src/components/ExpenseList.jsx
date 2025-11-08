import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

export default function ExpenseList({ filter }) {
  const { expenses, deleteExpense } = useContext(ExpenseContext);
  const filtered =
    filter === "All" ? expenses : expenses.filter((e) => e.category === filter);

  return (
    <div className="expense-list">
      {filtered.length === 0 ? (
        <p>No expensses found</p>
      ) : (
        filtered.map((exp) => (
          <div key={exp.id} className="expense-item">
            <div>
              <strong>{exp.title}</strong> - ₹{exp.amount} ({exp.category})
            </div>
            <button onClick={() => deleteExpense(exp.id)}>❌</button>
          </div>
        ))
      )}
    </div>
  );
}
