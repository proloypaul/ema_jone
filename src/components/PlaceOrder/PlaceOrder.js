import React from 'react';
import img from '../../images/giphy.gif';
import './PlaceOrder.css';

const PlaceOrder = () => {
    return (
        <div className="order-Success">
            <h1>Wow! Congratualtions Your Product Order has successful</h1>
            <img src={img} alt="Empty"/>
        </div>
    );
};

export default PlaceOrder;