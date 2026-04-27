import "../App.css";
import DeleteItem from './DeleteItem';

export default function ListItem({ label, quantity, purchased, onDelete, onEdit, onTogglePurchased }) {
  return (
    <div className={`list-item ${purchased ? 'purchased' : ''}`}>
      <div className="list-item-info">
        <label className={purchased ? 'label-purchased' : ''}>{label}</label>
        <div className="quantity-wrapper">
          <input name={label} value={quantity} readOnly />
          <div className="checkbox-wrapper">
            <span className="checkbox-label">Comprado</span>
            <input
              type="checkbox"
              checked={purchased}
              onChange={onTogglePurchased}
              title="Marcar como comprado"
            />
          </div>
        </div>
      </div>
      <div className="list-item-actions">
        <button type="button" onClick={onEdit}>✏️ Editar</button>
        <DeleteItem onDelete={onDelete} />
      </div>
    </div>
  );
}