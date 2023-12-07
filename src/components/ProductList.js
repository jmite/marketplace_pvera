import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const products = [
  { id: 1, name: 'Producto 1', price: 20 },
  { id: 2, name: 'Producto 2', price: 30 },
  { id: 3, name: 'Producto 3', price: 25 },
];

function ProductList() {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
