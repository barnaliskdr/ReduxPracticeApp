import React from 'react'
import "./HomeStyle.css"
import cart from "../assets/cart.jpg";
import kiwi from "../assets/kiwi.jpg";
import orange from "../assets/orange.jpg";
import apple from "../assets/apple.jpg";
import { initialState } from '../Services/Reducers/Homereducer';
import { addToCart, removeFromCart } from '../Services/Actions/Homeaction';
import { useReducer } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import Homereducer from '../Services/Reducers/Homereducer';
import Cart from './Cart';
import { Card } from 'primereact/card';

const Home = () => {

    const dispatch = useDispatch();
    const itemData = useSelector(state => state.cartItems.itemData);
    console.log(itemData);

    const items = [
        {
            id: 1,
            name: "Kiwi",
            price: 30,
            count: 1,
            image: kiwi
        },
        {
            id: 2,
            name: "Apple",
            price: 10,
            count: 1,
            image: apple
        },
        {
            id: 3,
            name: "Orange",
            price: 15,
            count: 1,
            image: orange
        },
    ]

    const addToCartHandler = (item) => {
        console.log("clicked");
        dispatch(addToCart(item));
    }

    const removeCartHandler = (item) => {
        
        dispatch(removeFromCart(item));
    }

  return (
        <div>
            <Cart/>
            <h1>Home Component</h1>
            {items.map((item)=>{ return (
            // <div className="cart-wrapper">
            <>
            <Card>
                <div className="img-wrapper item">
                    <img src={item.image}/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        {item.name}
                    </span>
                    <span>
                        Price: {item.price} INR
                    </span>
                </div>
                <div className="btn-wrapper align-items-center mt-5 flex flex-row flex-wrap">
                    <div className="flex align-items-center mr-2">
                        <button onClick = { () => addToCartHandler(item)}>Add To Cart</button>
                    </div>
                    <div class="flex align-items-center">
                        <button onClick={ () => removeCartHandler(item)}>Remove From Cart</button>
                    </div>
                </div>
                </Card>
            {/* </div> */}
            </>
            )
            })}
            
            
        </div>

  )
}

export default Home
