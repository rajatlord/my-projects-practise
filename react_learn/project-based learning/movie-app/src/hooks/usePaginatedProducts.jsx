import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";

export const usePaginatedProducts = ({page , limit=10})=>{

    return useQuery({   
        queryKey :['products' ,page],
        queryFn: fetchProducts({page ,limit}),
        keepPreviousData : true,
    });
};

// keepPreviousData: true = smooth pagination UX with no flickering
