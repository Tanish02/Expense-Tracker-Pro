import { useContext, useState } from "react";

function ExpenseForm() {
  const { addExpense } = useContext(ExpenseContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleDateString(),
    };

    addExpense(newExpense);
    setTitle("");
    setAmount("");
};

return (
  <form className="expense-form" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Expense title..."
      value={title}
      onChange={(e) => setTitle(e,EventTarget.value)}
    />
    <input
      type="number"
      placeholder="Amount"
      value={ amount }
      onChange={(e) => setAmount(e.target.value)}
    />
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option>Food</option>
      <option>Travel</option>
      <option>Shopping</option>
      <option>Other</option>
    
    </select> 
    <button type="submit">
      Add
    </button>
  </form>
);

}

export default ExpenseForm;


// end code