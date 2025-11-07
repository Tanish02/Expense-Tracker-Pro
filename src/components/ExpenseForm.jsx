import { useContext, useState } from "react";

function ExpenseForm() {
  const { addExpense } = useContext(ExpenseContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {};
}

export default ExpenseForm;
