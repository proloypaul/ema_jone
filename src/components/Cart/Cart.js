import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart)
    // console.log(props.orders)
    const {cart} = props
    // console.log(cart);
    
    let totalPrice = parseFloat(cart.reduce((previous, product) => previous + product.price, 0).toFixed(2));
    
    let totalQuantity = 0;
    for(let productQuantity of cart){
        totalQuantity = totalQuantity + productQuantity.quantity
        // console.log(productQuantity.quantity);
    };
    const tax = parseFloat((totalPrice * 0.2).toFixed(2));
    const grandTotal = parseFloat(totalPrice + tax).toFixed(2);

    return (
        <div>
            <h2>Order Items: {totalQuantity}</h2>
            <h3>Price: {totalPrice}</h3>
            <h4>Tax: {tax}</h4>
            <h4>Total Price: {grandTotal}</h4>
        </div>
    );
};

export default Cart;