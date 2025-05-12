import React from 'react';
import ProductCard from './ProductCard';

const Card2 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard image="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
        title="Books"
        price="$39.99"
        grid-trmplete-column
      />
    </div>
  );
};

export default Card2;