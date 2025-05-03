import React , {useState} from "react";
import { usePaginatedProducts } from "../hooks/usePaginatedProducts";

const PaginatedPage =()=>{
    const [page , setPage] = useState(1);
    const limit = 10;

    const [data ,isLoading , isError , isFetching] = usePaginatedProducts(page , limit);

    if(isLoading) return <h1>loading data....</h1>
    if(isError) return <p>something went wrong...</p>

    return(
        <div>
            <h1>Paginated Products</h1>
        

        </div>



    )
}

export default PaginatedPage;