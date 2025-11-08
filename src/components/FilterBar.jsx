export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-bar">
      <label>Filter by Category:</label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>
    </div>
  );
}

// end code
