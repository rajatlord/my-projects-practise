import { useParams, useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state;

  const params = useParams();
  return (
    <div>
      inside product details {params.id}
      <h2>Product Details</h2>
      <p>ID: {product?.id}</p>
      <p>Name: {product?.name}</p>
      <p>Price: {product?.price}</p>
    </div>
  );
};

export default ProductDetails;
