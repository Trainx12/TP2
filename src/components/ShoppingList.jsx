import React, { useState } from 'react';
import ListItem from './ListItem';

export function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [newQuantity, setNewQuantity] = useState(1);

  function addItem(e) {
    e.preventDefault();

    if (newItem.trim() === '') return;

    setItems([
      ...items,
      { item: newItem, quantity: newQuantity }
    ]);

    setNewItem('');
    setNewQuantity(1);
  }

  function deleteItem(indexToDelete) {
    setItems(items.filter((_, index) => index !== indexToDelete));
  }

  function onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let object = {};
    formData.forEach((value, key) => object[key] = value);
    alert(`You purchased: ${JSON.stringify(object)}`);
  }

  return (
    <div className='shopping-list'>
      <h1>Shopping List</h1>

      {/* FORM AGREGAR */}
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

        <button type="submit">Agregar</button>
      </form>

      {/* LISTA */}
      <form onSubmit={onFormSubmit}>
        {items.map((prod, index) => (
          <ListItem
            key={index}
            label={prod.item}
            quantity={prod.quantity}
            onDelete={() => deleteItem(index)}
          />
        ))}

        {items.length > 0 && <button>Checkout</button>}
      </form>
    </div>
  );
}