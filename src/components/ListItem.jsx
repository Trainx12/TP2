import "../App.css";

export default function ListItem({
  label,
  quantity,
  onDelete
}) {
  return (
    <div className="list-item">
      <label>{label}</label>

      <input name={label} value={quantity} readOnly />

      <button type="button" onClick={onDelete}>❌</button>
    </div>
  );
}