import React, { useEffect, useState } from 'react';
import useAuth from '../../Context/useAuth';

const MyOrders = () => {
    const {user} = useAuth()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/orderproducts?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    })
    return (
        <div>
            <h1>My order section</h1>
            <div>
                <div>

                </div>
                <div>
                    {orders.map(order => <div key={order._id}>
                        <h4>{order.name} and {order.email}</h4>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;