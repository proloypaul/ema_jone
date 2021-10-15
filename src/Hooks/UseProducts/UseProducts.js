import { useEffect, useState } from "react"
// this useProducts use orderReview.js file 
const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("../products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    },[]);
    return [products]
};

export default useProducts