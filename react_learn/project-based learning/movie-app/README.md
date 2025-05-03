

Api endpoints 
| Feature                | Endpoint                                              |
| ---------------------- | ----------------------------------------------------- |
| All Products           | `https://dummyjson.com/products`                      |
| Paginated Products     | `https://dummyjson.com/products?limit=10&skip=20`     |
| Search Products        | `https://dummyjson.com/products/search?q=phone`       |
| Product by ID          | `https://dummyjson.com/products/1`                    |
| Categories (list)      | `https://dummyjson.com/products/categories`           |
| Products in a Category | `https://dummyjson.com/products/category/smartphones` |


🚀 Use This Instead:
✅ Paginated Data
Use ?limit=10&skip=0, skip=10, etc. → perfect for useQuery

✅ Infinite Scroll
Use useInfiniteQuery with getNextPageParam to load more skip

🔧 Next Step:
I'll give you:

API wrapper (/api/products.js)

usePaginatedProducts.js hook

useInfiniteProducts.js hook

Component boilerplate