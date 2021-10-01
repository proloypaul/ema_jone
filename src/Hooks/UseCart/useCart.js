import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb"

const useCart = products => {
    const [cart, setCart] = useState([])

    useEffect(() =>{

        if(products.length){
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
    return [cart]
}

export default useCart