'use client';

import { useState } from 'react';

export default function AddProduct() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  
  const addProduct = async () => {
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, category, price })
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Product added:', data);
    } else {
      console.error('Error adding product:', data.error);
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}
