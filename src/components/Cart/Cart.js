import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart)
    // console.log(props.orders)
    const {cart} = props
    let totalPrice = cart.reduce((previous, product) => previous + product.price, 0);
    
    // let totalPrice = 0;
    // for(let productPrice of cart){
    //     totalPrice = totalPrice + productPrice.price
    // };
    const tax = parseFloat((totalPrice * 0.2).toFixed(2));
    const grandTotal = parseFloat(totalPrice + tax);

    return (
        <div>
            <h2>Order Items: {props.cart.length}</h2>
            <h3>Price: {totalPrice}</h3>
            <h4>Tax: {tax}</h4>
            <h4>Total Price: {grandTotal}</h4>
        </div>
    );
};

export default Cart;