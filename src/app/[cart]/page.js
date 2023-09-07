"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from "react";
import "./cart.css"

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Cart = (params) => {
  const prod = params.searchParams.productId;
  console.log(prod)
  const [product, setProduct] = useState([]);
  const [quan, setQuan] = useState(1);
  const [price, setPrice] = useState();
  const [picture, setPicture] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        let data = await fetch("https://dummyjson.com/products");
        data = await data.json();
  
        setProduct(data.products[prod]);
        console.log(data.products[prod]);
        setPrice(data.products[prod].price);
        setPicture(data.products[prod].thumbnail);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    fetchData();
  }, [prod]);

  function add() {
    setQuan(quan + 1);
  }

  function sub() {
    setQuan(quan - 1);
  }

  function show1() {
    setShow(true);
  }



  return (
    <div className='main1'>
      <h1 className='hh'>My Cart</h1>
    <div className="cart">
      <h3 className="cart-title">{product.title}</h3>
      <img src={picture} className="cart-img" />
      <h4 className="cart-price">Price: ${price}</h4>
      <p className="cart-quantity">Enter Quantity: {quan}</p>
      <button className="cart-button" onClick={add}>+</button>
      <button className="cart-button" onClick={sub}>-</button>
      <p className="cart-total">Total: ${price * quan}</p>
      <div>
      <button className="cart-button" onClick={show1}>Confirm Order</button>
      <Link href="/product">
      <button className="shopping-cart-button">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span>Back to Shopping</span>
    </button>
    </Link>
      </div>

      {show && (
        <Confirm
          className="confirm"
          cart={{
            total: price * quan,
            picture: picture,
            show:show,
            setShow:setShow
          }}
        />
      )}



    </div>
    </div>
  );
};

const Confirm = ({ cart }) => {
  const { total, picture,show,setShow } = cart;
  // const [show,setshow]=useState(true);
  function hide(){
    setShow(false);
  }

  return (
    <div className="confirm">
      <h1>Your Order</h1>
      <img src={picture} className="confirm-img" />

      <input type='text' placeholder='Enter Your Adress' className="confirm-input" />
      <input type="tel" placeholder="Phone Number" className="confirm-input" />
      <p className="confirm-total">Your Total: ${total}</p>
      <p>Delivery Charges: $10</p>
      <p>Total Amount: ${total + 10}</p>
      <button className="confirm-button">Confirm</button>
      <button className="confirm-button" onClick={hide}>Cancel</button>
     

    </div>
  );

};

export default Cart;
