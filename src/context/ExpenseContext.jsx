import { createContext, useEffect, useReducer } from "react";
import { expenseReducer } from "../reducers/expenseReducer";

const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(expenseReducer, [], () => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) =>
    dispatch({ type: "ADD_EXPENSE", payload: expense });
  const deleteExpense = (id) =>
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  const updateExpense = (expense) =>
    dispatch({ type: "UPDATE_EXPENSE", payload: expense });

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, deleteExpense, updateExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export { ExpenseContext, ExpenseProvider };

// end code
