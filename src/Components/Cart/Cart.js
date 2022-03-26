import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './cart.css'

const Cart = (props) => {
  const { img, name } = props.cart;
  return (
    <div className='cart-info'>
      <img className='cart-img' src={img} alt="" />
      <h4>{name}</h4>
      <button className='cart-delete-btn'><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
    </div>
  );
};

export default Cart;