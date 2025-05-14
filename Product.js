import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="container">
      <h1>CSS Positioning Task</h1>
      
      <div className="card">
 
        <img src="https://exstatic-in.vivo.com/Oz84QB3Wo0uns8j1/in/1742360640633/78e5a6d9c07e43e50d77212b48519ab1.png.webp" alt="Product" />
        <h3>Product Name</h3>
        <p className="price">$99.99</p>
      </div>

    </div>
  );
}

export default Product;