import { useState } from "react";
import { ExpenseProvider } from "./context/ExpenseContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import FilterBar from "./components/FilterBar";

function App() {
  const [filter, setFilter] = useState("All");

  return (
    <ExpenseProvider>
      <div className="container">
        <h1> Expense Tracker-Pro 💰</h1>
        <ExpenseForm />
        <FilterBar filter={filter} setFilter={setFilter} />
        <ExpenseList filter={filter} />
        <summary />
      </div>
    </ExpenseProvider>
  );
}

export default App;

// end code
