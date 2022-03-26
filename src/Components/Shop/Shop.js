import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  const [carts, setCart] = useState([]);
  const addToCartHandler = (selectedProduct) => {
    let selectedBookArray = [];
    const exists = carts.find(book => book.id === selectedProduct.id);
    if (!exists) {
      if (carts.length <= 3) {
        selectedBookArray = [...carts, selectedProduct];
        setCart(selectedBookArray);
      }
      else {
        alert('All ready Four book Selected')
      }
    }
    else {
      alert("This book selected")
    }
  }
  const chooseRandom = () => {
    const randomNumber = Math.random() * carts.length;
    let randomIntNumber = Math.floor(randomNumber);
    let chooseProduct = carts[randomIntNumber];
    setCart([chooseProduct])
  }
  return (
    <div className='shop-container'>
      <div className='products'>
        {
          books.map(book => <Product
            key={book.id}
            product={book}
            addToCartHandler={addToCartHandler}
          ></Product>)
        }
      </div>
      <div className='Cart-container'>
        <h2>Added Book ({carts.length})</h2>
        {
          carts.map(cart => <Cart
            key={cart.id}
            cart={cart}
          ></Cart>)
        }
        <div>
          <button className='choose-btn' onClick={() => chooseRandom()}>CHOOSE RANDOM ONE</button>
          <button className='choose-btn' onClick={() => setCart([])}>CHOOSE AGAIN</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;