import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart)
    // console.log(props.orders)
    const {cart} = props
    // console.log(cart);
    
    // let totalPrice = parseFloat(cart.reduce((previous, product) => previous + product.price, 0).toFixed(2));
    let totalPrice = cart.reduce((previous, product) => previous + (product.price * product.quantity), 0)
    
    const totalQuantity = cart.reduce((previous, product) => previous + product.quantity, 0);

    // let totalQuantity = 0;
    // // let totalPrice = 0;
    // for(let productQuantity of cart){
    //     totalQuantity = totalQuantity + productQuantity.quantity
    //     // console.log(productQuantity.quantity);
    //     // totalPrice = totalPrice + (productQuantity.price * productQuantity.quantity)
    // };

    // const tax = parseFloat((totalPrice * 0.2).toFixed(2));
    const tax = totalPrice * 0.2;
    // const grandTotal = parseFloat(totalPrice + tax).toFixed(2);
    const grandTotal = totalPrice + tax;

    return (
        <div>
            <h2>Order Items: {totalQuantity}</h2>
            <h3>Price: {totalPrice.toFixed(2)}</h3>
            <h4>Tax: {tax.toFixed(2)}</h4>
            <h4>Total Price: {grandTotal.toFixed(2)}</h4>
            {props.children}
        </div>
    );
};

export default Cart;