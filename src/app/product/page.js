"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './product.css';

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data.products);
        setProduct(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='main'>
      <center><h1 className='header'>Our Products</h1></center>
      <div className="product-list">
        {product.map((item, index) => (
          <div key={index} className="product">
            <div className='product-title'>
              {item.title}
            </div>
            <img src={item.images[0]} alt={`Product ${item.title}`} />
            <span>
              <h5 className='product-price'>Price: ${item.price}</h5>
              <Link href={`/cart?productId=${item.id}`}>
                <button className="button1">Add to Cart</button>
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
