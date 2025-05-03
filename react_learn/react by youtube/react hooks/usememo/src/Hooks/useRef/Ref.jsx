// https://www.youtube.com/watch?v=nX9ShZo0COc

import React, {useRef , useState} from "react";




function Ref(){
    const [name , setName] = useState("Rajat");
    const refElement = useRef();

        function Reset(){
            setName('')
            refElement.current.focus()
        }
        
        function handleInput(){
            refElement.current.style.color="Grey";
            refElement.current.value="Hero";

        }

    return<>
    <h1>This is from Ref hook</h1>
    <input type="text" ref={refElement} value={name} name="name" placeholder="Write your name" onChange={(e)=>{setName(e.target.value)}} />
    <button onClick={Reset}>Reset</button>
    <button onClick={handleInput}>Handle input</button>
    </>
}

export default Ref;