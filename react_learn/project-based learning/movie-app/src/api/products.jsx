import axios from "axios";

export const fetchProducts = async ({ page = 1, limit = 10 }) => {
  const skip = (page - 1) * limit;
  const response =
    await axios.get(`https://dummyjson.com/products?${limit}&skip=${skip}
`);
  return response.data;
};
