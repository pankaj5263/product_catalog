'use client';

import { useState } from 'react';

export default function UpdateProduct({ id }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const updateProduct = async () => {
    const response = await fetch(`/api/products?id=${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price })
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Product updated:', data);
    } else {
      console.error('Error updating product:', data.error);
    }
  };

  return (
    <div>
      <h2>Update Product</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
      <button onClick={updateProduct}>Update Product</button>
    </div>
  );
}
