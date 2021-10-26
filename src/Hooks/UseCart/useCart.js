import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb"
// products parameter came in orderReview.js file
// const useCart = products => {
//     const [cart, setCart] = useState([])

//     useEffect(() =>{

//         if(products.length){
//             // getStoredCart() declare in fackdata.js 
//             const saveCart = getStoredCart()
//             const storageCart = [];
//             for(let key in saveCart){
//                 const equalKeyProduct = products.find(product => product.key === key)
//                 if(equalKeyProduct){
//                     const quantity = saveCart[key];
//                     equalKeyProduct.quantity = quantity;
//                     storageCart.push(equalKeyProduct);
//                 };
//             };
//             setCart(storageCart)
//         }
//     }, [products])
//     return [cart, setCart]
// }

// export default useCart


// database set this web
const useCart = () => {
    const [cart, setCart] = useState([])

    useEffect(() =>{
        // getStoredCart() declare in fackdata.js 
        const saveCart = getStoredCart()
        // console.log(saveCart)
        const keys = Object.keys(saveCart)
        fetch('http://localhost:5000/products/collectkey', {
            method: 'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                // console.log(products)
                if(products.length){
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
            })
    }, [])
    return [cart, setCart]
}

export default useCart