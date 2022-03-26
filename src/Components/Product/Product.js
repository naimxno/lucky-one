import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
  const { img, name, price, addToCartHandler } = props.product;
  return (
    <div className='product-info'>
      <img src={img} alt="" />
      <h4>{name}</h4>
      <p>Price : ${price}</p>
      <button onClick={() => addToCartHandler(props.product)}><p>Add To Cart</p> <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
    </div>
  );
};

export default Product;