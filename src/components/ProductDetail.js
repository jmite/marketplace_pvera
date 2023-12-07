import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  // Aquí puedes cargar los detalles del producto según su ID
  const product = { id, name: `Producto ${id}`, price: 25 };

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <p>ID: {product.id}</p>
      <p>Nombre: {product.name}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
}

export default ProductDetail;
