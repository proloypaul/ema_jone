import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb"
// products parameter came in orderReview.js file
const useCart = products => {
    const [cart, setCart] = useState([])

    useEffect(() =>{

        if(products.length){
            // getStoredCart() declare in fackdata.js 
            const saveCart = getStoredCart()
            const storageCart = [];
            for(let key in saveCart){
                const equalKeyProduct = products.find(product => product.key === key)
                if(equalKeyProduct){
                    const quantity = saveCart[key];
                    equalKeyProduct.quantity = quantity;
                    storageCart.push(equalKeyProduct);
                };
            };
            setCart(storageCart)
        }
    }, [products])
    return [cart, setCart]
}

export default useCart