import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;