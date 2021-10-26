import React, { useRef } from 'react';
// import { useState } from 'react/cjs/react.development';
// import useAuth from '../../Context/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './OrderForm.css';

const OrderForm = () => {
    // const {user} = useAuth()
    // const [orderPerson, setOrderPerson] = useState('')
    const nameRef = useRef()
    const emailRef = useRef()
    const addressRef = useRef()
    const cityRef = useRef()
    const dateRef = useRef()
    const numberRef = useRef()

    const handleForm = event => {
        event.preventDefault()
        // console.log(nameRef.current.value)
        // console.log(emailRef.current.value)
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const city = cityRef.current.value;
        const data = dateRef.current.value;
        const number = numberRef.current.value;
        
        const OrderPersonDetails = {
            name,
            email,
            address,
            city,
            number,
            data
        };
        // setOrderPerson(OrderPersonDetails)
        // console.log(OrderPersonDetails)

        // set products order key in orderPersonDetails
        const saveCart = getStoredCart()
        // console.log(saveCart)
        OrderPersonDetails.order = saveCart;
        console.log(OrderPersonDetails)

        fetch('http://localhost:5000/orderproducts', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(OrderPersonDetails)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert("Okay Your product will reached your home on 30 min. You can sleep now")
                    clearTheCart()
                    event.target.reset()

                }
            })

        
    }

    return (
        <div className="form-container">
            <div>
                <h1>fill up this form and get your products</h1>
                <form onSubmit={handleForm}>
                    <div>
                        <input ref={nameRef} type="text" placeholder="Name"/>
                    </div>
                    <div>
                        <input ref={emailRef} type="email"  placeholder="abc@gmail.com"/>
                    </div>
                    <div>
                        <input ref={addressRef} type="text" placeholder="Address"/>
                    </div>
                    <div>
                        <input ref={cityRef} type="text" placeholder="city"/>
                    </div>
                    <div>
                        <input ref={numberRef} type="number" placeholder="Phone Number" />
                    </div>
                    <div>
                        <input ref={dateRef} type="date" />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default OrderForm;