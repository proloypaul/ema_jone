import React from 'react';
import useCart from '../../Hooks/UseCart/useCart';
import useProducts from '../../Hooks/UseProducts/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
    const handleRemove = key => {
        // console.log(key)
        const afterRemove = cart.filter(product => product.key !== key)
        setCart(afterRemove);
        removeFromDb(key)
    }
    return (
        <div>
            <div className="shop-container">
                <div className="products">
                    {
                        cart.map(product => <ReviewItem 
                            key={product.key}
                            product={product}
                            handleRemove={handleRemove}
                            ></ReviewItem>)
                    }
                </div>
                <div className="cart">
                    <h2>available Products: {products.length}</h2>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;