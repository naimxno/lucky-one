import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])
  return (
    <div className='shop-container'>
      <div className='products'>
        {
          books.map(book => <Product
            key={book.id}
            product={book}
          ></Product>)
        }
      </div>
      <div>
        <h2>cart list</h2>
      </div>
    </div>
  );
};

export default Shop;