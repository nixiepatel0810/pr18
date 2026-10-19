
import React, { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 }
  ]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [editId, setEditId] = useState(null);

  function editProduct(product) {
    setName(product.name);
    setPrice(product.price);
    setEditId(product.id);
  }

  function updateProduct(e) {
    e.preventDefault();

    const updatedProducts = products.map((product) =>
      product.id === editId
        ? { ...product, name: name, price: Number(price) }
        : product
    );

    setProducts(updatedProducts);
    setName('');
    setPrice('');
    setEditId(null);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-md rounded bg-white p-6 shadow">
        <h1 className="mb-5 text-center text-2xl font-bold">
          Update Product
        </h1>

        <form onSubmit={updateProduct}>
          <label>Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 mt-1 w-full rounded border p-2"
            required
          />

          <label>Product Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mb-4 mt-1 w-full rounded border p-2"
            required
          />

          <button
            type="submit"
            disabled={editId === null}
            className="w-full rounded bg-green-600 p-2 text-white disabled:bg-gray-400"
          >
            Update Product
          </button>
        </form>

        <h2 className="mb-3 mt-6 text-xl font-bold">
          Product List
        </h2>

        {products.map((product) => (
          <div
            key={product.id}
            className="mb-3 rounded border p-3"
          >
            <p>Name: {product.name}</p>
            <p>Price: ₹{product.price}</p>

            <button
              onClick={() => editProduct(product)}
              className="mt-2 rounded bg-blue-600 px-4 py-1 text-white"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
