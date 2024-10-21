import React from 'react';
import './Product.css';

const Product = ({ title, price, title1, price1 }) => (
  <div className="Product">
    <h2 className="Product_title">{title}</h2>
    <div className="Product_price">Price: {price}</div>

    <h2 className="Product_title">{title1} </h2>
    <div className="Product_price">{price1}</div>
  </div>
);

export default Product;
