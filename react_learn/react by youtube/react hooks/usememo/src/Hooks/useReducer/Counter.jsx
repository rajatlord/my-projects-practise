import React , {useReducer, useContext } from 'react';
import {data ,data1} from "../../App"

const initialState = {count : 0 };

function reducer(state , action){
    switch (action.type) {
        case 'INCREMENT' :
            return {count : state.count +1 };
        case 'DECREMENT' :
            // return {count : state.count - 1 };
            return { count: state.count === 0 ? 0 : state.count - 1 }
        case 'RESET' :
            return {count : 0 };
        default :
            return state;
    }
}

function Counter(){
    const [state , dispatch] = useReducer(reducer , initialState);

    // for usecontext hook
    const name = useContext(data);
    const city = useContext(data1);
    return(
        <div>
            <h1>Count : {state.count}</h1>
            <button onClick={()=>dispatch({type: 'INCREMENT'})}>+</button>
            <button onClick={()=>dispatch({type: 'DECREMENT'})}>-</button>
            <button onClick={()=>dispatch({type: 'RESET'})}>Reset</button>
        {/* for usecontext hooks */}
            <h1>It's me {name} and i am living in {city}</h1>
        </div>
    )
} 

export default Counter;
