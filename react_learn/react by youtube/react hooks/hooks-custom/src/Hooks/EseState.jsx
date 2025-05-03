import { useState , useEffect } from "react"

function EseState(){
    const [counter , SetCounter] = useState(0);

    const HandleOnClick = ()=>{
        SetCounter(counter+1)
    }

    useEffect(()=>{
        console.log("inside UseEffect");
    },[]);
    // here [] this shows that is a dependency array if add anyhing here it will run again again when that thing called , useEffect run when anything render or we can add when it should run
 
    return(
        <>
        <button style={{marginTop:'50px'}} onClick={HandleOnClick}>Click Me</button>
        <div style={{marginTop:'50px'}} >{counter}</div>
        </>
    )
}

export default EseState;