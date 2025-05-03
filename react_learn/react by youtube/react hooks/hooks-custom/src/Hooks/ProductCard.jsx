

function ProductCard ({imgurl , title , price}){
    return(
        <div className="productcard">
            <img   src={imgurl} alt="Img"/>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}

export default ProductCard;

// style={{width:"50px"}}