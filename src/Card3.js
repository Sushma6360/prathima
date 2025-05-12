import React from 'react';
import ProductCard from './ProductCard';

const Card3 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard image="https://homafy.com/wp-content/uploads/2023/11/Acrylic-oil-painting-3.jpeg"
        title="Phones"
        price="$29.99"
        grid-trmplete-column
      />
    </div>
  );
};

export default Card3;