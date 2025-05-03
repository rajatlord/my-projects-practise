import { UseProduct } from "./UseProduct";
import ProductCard from "./ProductCard"

function EustomHooks(){

    const {products} = UseProduct();

    return(
        <div className="productlist">
            {
                products.map(product =><ProductCard key={product.id} imgurl={product.image} title={product.title} price={product.price}  />)
            }


        </ div>

    )

}

export default EustomHooks;