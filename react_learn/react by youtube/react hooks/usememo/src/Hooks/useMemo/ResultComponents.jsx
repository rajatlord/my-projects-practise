import React, { useMemo } from "react";

const ResultComponents =( {marks , subject})=>{

    console.log("inside Resultcomponents");

    const percentagemarks = useMemo(()=>{
        
        console.log("inside useMemo");

        return (marks*100)/100
    },[marks])

    return(
        <div>
            <h2>Result is : {marks}</h2>
            <h2>Percentage marks :{percentagemarks}%</h2>
            <h2>subject :{subject}</h2>
        </div>
    )

}

export default React.memo(ResultComponents);