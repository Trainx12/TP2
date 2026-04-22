import "../App.css";
import DeleteItem from './DeleteItem';

export default function ListItem({
  label,
  quantity,
  onDelete
}) {
  return (
    <div className="list-item">
      <label>{label}</label>

      <input name={label} value={quantity} readOnly />

      <DeleteItem onDelete={onDelete} />
    </div>
  );
}