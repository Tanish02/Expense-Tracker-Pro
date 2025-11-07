import { createContext, useEffect, useReducer } from "react";

const ExpenseContext = createContext();

const ExpenseProvider = ({ Children }) => {
  const [expenses, dispatch] = useReducer(expenseReducer, [], () => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {});
};

export { ExpenseContext, ExpenseProvider };

// end code
