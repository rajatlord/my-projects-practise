import React from "react";

const NameComponents =( {name})=>{
    console.log("inside namecomponents");
    return(
        <div>
            <h2>Name is : {name}</h2>
        </div>
    )

}

export default React.memo(NameComponents);