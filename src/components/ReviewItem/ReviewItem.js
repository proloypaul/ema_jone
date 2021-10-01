import React from 'react';

const ReviewItem = (props) => {
    const {name, price, quantity, key} = props.product
    return (
        <div className="product">
            <div>
                <h3 className="name">{name}</h3>
                <h2>Price: {price}</h2>
                <h3>Quantity: {quantity}</h3>
                <button onClick={() => props.handleRemove(key)} className="addToCartBtn">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;