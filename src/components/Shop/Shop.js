import { faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/UseCart/useCart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useCart()
    const [pagecount, setPagecount] = useState(0)
    const [page, setPage] = useState(0)
    const size = 10;
    useEffect(() => {
        const url = `http://localhost:5000/products?page=${page}&&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data =>{
                setProducts(data.products)
                setDispalySearchResult(data.products)
                const count = data.count;
                const pageNumber = Math.ceil(count/size)
                setPagecount(pageNumber)
            })
    },[page]);

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

    const [displaySearchResult, setDispalySearchResult ] = useState([])
    const handleSearch = event => {
        // console.log(event.target.value)
        const searchValue = event.target.value;
        const equalSearchName = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()))
        setDispalySearchResult(equalSearchName)
        // console.log(equalSearchName.length)

    };

    return (
        <div>
            <div>
                <div className="searchBox">
                    <input onChange={handleSearch} type="text" placeholder="Search your Product"/>
                </div>
            </div>
            <div className="shop-container">
                <div className="products">
                    {
                        displaySearchResult.map(product => <Product 
                            product={product}
                            key={product.key}
                            handleOrderItem={handleOrderItem}
                            ></Product>)
                    }
                    <div className="pagination">
                        {
                            [...Array(pagecount).keys()]
                            .map(number => <button
                            className={number === page ? 'selected': ''}
                            key={number}
                            onClick={() => setPage(number)}
                            >{number}</button>)
                        }

                    </div>
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

        </div>
    );
};

export default Shop;