import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {
    // console.log(props)
    const {name, price, img, seller, stock} = props.product
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <img src={img} alt="Empty!"/>
            <div>
                <h4 className="name">{name}</h4>
                <p>by: {seller}</p>
                <h3>Price: {price}</h3>
                <p>Only {stock} left in stock order soon</p>
                <button onClick={() => props.handleOrderItem(props.product)} className="addToCartBtn">{element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;