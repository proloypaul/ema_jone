import { faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = `../products.JSON`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    },[]);

    const [orderItem, setOrderItem] = useState([])



    

    useEffect(() =>{
        const saveData = getStoredCart()
        // console.log(saveData)
        let storageCart = [];
        if(products.length){    // if products.length 0 hy tbe false products.length 1 hy tbe true
            for(let key in saveData){
                // console.log(key)
                // display localStorage cart to the UI 
                const collectEqualDataproduct  = products.find(product => product.key === key)
                // console.log(key, collectEqualDataproduct)
                if(collectEqualDataproduct){
                    const quantity = saveData[key] // get quantity value
                    // console.log(key, quantity)
                    collectEqualDataproduct.quantity = quantity // set quantity in collectEqualDataproduct object
                    storageCart.push(collectEqualDataproduct)

                }; 
                // console.log(collectEqualDataproduct);
            };
        }
        setOrderItem(storageCart);

    },[products])

    const handleOrderItem = (product) => {
        // console.log(product)
        const exisist = orderItem.find(item => item.key === product.key)
        let newCart = []
        if(exisist){
            const rest = orderItem.filter(item => item.key !== product.key)
            exisist.quantity = exisist.quantity + 1;
            newCart = [...rest, product]
        }else{
            product.quantity = 1
            newCart = [...orderItem, product];
        }

        // const newCart = [...orderItem, product]
        setOrderItem(newCart)
        // save to localStorage (for now)
        addToDb(product.key)
        // console.log("done ")

    };

    return (
        <div className="shop-container">
            <div className="products">
                {
                    products.map(product => <Product 
                        product={product}
                        key={product.key}
                        handleOrderItem={handleOrderItem}
                        ></Product>)
                }
            </div>
            <div className="cart">
                {/* {orderItem.map(order => <Cart orders={order} cart={orderItem}></Cart>)} */}
                <Cart cart={orderItem}>
                    <Link to="/order" >
                        <button className="addToCartBtn">Review Your Order</button>
                    </Link>
                </Cart>
                {/* <h2>Total Item: {products.length}</h2>
                <h3>Your Order Item: {orderItem.length}</h3>
                <h3>Cart</h3>
                <h3>Price: </h3> */}
            </div>
        </div>

    );
};

export default Shop;