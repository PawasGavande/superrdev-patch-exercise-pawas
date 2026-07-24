export default function SearchBar({ value, onChange }) {
  return (
    <input
      id="task-search"
      name="taskSearch"
      type="text"
      className="search-input"
      placeholder="Search tasks..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}