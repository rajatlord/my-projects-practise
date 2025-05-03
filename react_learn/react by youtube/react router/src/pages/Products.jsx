import {Link , Outlet , useNavigate} from "react-router-dom"

function Products(){
    const navigate = useNavigate();
    const goToHome =()=>{
        navigate("/");
    };

    const product = {
        id: 101,
        name: "React Mug",
        price: "$15",
      };

      const handleClick =()=>{
        navigate(`/products/${product.id}`, {state: product});
      }
    return( 
        <div>
            <h2>Product page</h2>
            <Link to="123" style={ {marginRight:"10px"}}>Product - 123</Link>
            <button onClick={handleClick}>view product details</button>
            <Link to="456" style={ {marginRight:"10px"}}>Product - 456</Link>
            <Link to="789" style={ {marginRight:"10px"}}>Product - 789</Link>
            <button onClick={goToHome}>Go to Home 🏠</button>
            <Outlet/>
        </div>
    )
}

export default Products;