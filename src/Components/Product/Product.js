import React from 'react';
import './Product.css'

const Product = (props) => {
  const { img, name, price } = props.product;
  return (
    <div className='product-info'>
      <img src={img} alt="" />
      <h4>{name}</h4>
      <p>Price : ${price}</p>
      <button>Add To Cart</button>
    </div>
  );
};

export default Product;