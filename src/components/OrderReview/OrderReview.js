import React from 'react';
import useCart from '../../Hooks/UseCart/useCart';
import useProducts from '../../Hooks/UseProducts/UseProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts()
    const [cart] = useCart(products)
    return (
        <div>
            <div className="shop-container">
                <div className="products">
                    {
                        cart.map(product => <ReviewItem product={product}></ReviewItem>)
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