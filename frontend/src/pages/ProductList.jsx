import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  // Dummy data for products
  const products = [
    { id: 1, name: 'Product A', price: '$10' },
    { id: 2, name: 'Product B', price: '$20' },
    { id: 3, name: 'Product C', price: '$30' },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
