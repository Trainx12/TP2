import React, { useState } from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';

export function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [newQuantity, setNewQuantity] = useState(1);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editItem, setEditItem] = useState('');
  const [editQuantity, setEditQuantity] = useState(1);

  function addItem(e) {
    e.preventDefault();
    if (newItem.trim() === '') return;
    setItems([...items, { item: newItem, quantity: newQuantity, purchased: false }]);
    setNewItem('');
    setNewQuantity(1);
  }

  function deleteItem(indexToDelete) {
    setItems(items.filter((_, index) => index !== indexToDelete));
  }

  function startEdit(index) {
    setEditingIndex(index);
    setEditItem(items[index].item);
    setEditQuantity(items[index].quantity);
  }

  function saveEdit(index) {
  if (editItem.trim() === '') return;  
  if (editQuantity < 1) return;
  const updated = [...items];
  updated[index] = { item: editItem, quantity: editQuantity, purchased: items[index].purchased };
  setItems(updated);
  setEditingIndex(null);
}

  function togglePurchased(index) {
    const updated = [...items];
    updated[index] = { ...updated[index], purchased: !updated[index].purchased };
    setItems(updated);
  }

  return (
    <div className='shopping-list'>
      <h1>Mis Compras</h1>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Producto"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <input
          type="number"
          min="1"
          value={newQuantity}
          onChange={(e) => setNewQuantity(Number(e.target.value))}
        />
        <AddItem />
      </form>

      <div className="items-list">
        {items.map((prod, index) => (
          editingIndex === index ? (
            <div key={index} className="list-item editing">
              <input
                type="text"
                value={editItem}
                onChange={(e) => setEditItem(e.target.value)}  
              />
              <input
                type="number"
                min="1"
                value={editQuantity}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val >= 1) setEditQuantity(val); 
                }}
              />
              <button type="button" onClick={() => saveEdit(index)}>✅</button>
              <button type="button" onClick={() => setEditingIndex(null)}>❌</button>
            </div>
          ) : (
            <ListItem
              key={index}
              label={prod.item}
              quantity={prod.quantity}
              purchased={prod.purchased}
              onDelete={() => deleteItem(index)}
              onEdit={() => startEdit(index)}
              onTogglePurchased={() => togglePurchased(index)}
            />
          )
        ))}
      </div>
    </div>
  );
}