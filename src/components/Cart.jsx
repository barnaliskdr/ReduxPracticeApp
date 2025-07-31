import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./HomeStyle.css";
import { useReducer } from 'react';
import Homereducer from '../Services/Reducers/Homereducer';
import { useSelector } from 'react-redux';
import { Badge } from 'primereact/badge';
import cart from "../assets/cart.jpg";

const Cart = () => {
    
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.cartItems.itemData.length);
  console.log(cartCount);

  const handleCartClick = () =>
  {
    navigate('/cart');
  }

  return (
    <div>
        <div onClick={handleCartClick} className="cart-container">
            <img style={{height: 55, width: 50}} src={cart}/>
            <Badge value={cartCount} severity="success"></Badge>
        </div>
    </div>
  )
}

export default Cart;
