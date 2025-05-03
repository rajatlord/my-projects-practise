import react from "react";
import {useState} from "react";

function InputForm ({name}){
    const [Name , setName]= useState(name);
    return <>
    <input
    type="Text"
    placeholder="Enter Your Name"
    value={Name}
    onChange={(e)=>setName(e.target.value)}
    />
    <h2>Hello, {Name}!</h2>
    </>
}

export default InputForm;