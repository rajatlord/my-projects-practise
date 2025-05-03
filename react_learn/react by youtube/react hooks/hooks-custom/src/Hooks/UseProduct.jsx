import { useState , useEffect} from "react";

export const  UseProduct =()=>{

    const [ products , setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    },[])

        const getProducts = async()=>{
            const productsList = await fetch('https://fakestoreapi.com/products');
            const productsListJson = await productsList.json();
            setProducts(productsListJson);
        }

        return {products};
}