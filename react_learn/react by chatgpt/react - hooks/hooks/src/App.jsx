// import { useState } from "react";
// import "./App.css";

// // import Parent from './Hooks/useCallback/Parent'

// // for composition
// function Card({ title, children }) {
//   return (
//     <div className="card">
//       <h2>{title}</h2>
//       <div>{children}</div>
//     </div>
//   );
// }

// // adVanced compositon
// function Modal({ header, body, footer }) {
//   return (
//     <div className="modal">
//       <div className="header">{header}</div>
//       <div className="body">{body}</div>
//       <div className="footer">{footer}</div>
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Card title="Welcome!">
//         <p>This is a composition example.</p>
//         <button>Click me</button>
//       </Card>

//       <Modal
//         header={<h2>Title</h2>}
//         body={<p>Are you sure you want to proceed?</p>}
//         footer={<button>Confirm</button>}
//       />

//       {/* implemention of useCallback */}
//       {/* <Parent/> */}
//     </>
//   );
// }

// export default App;

//from here i willl use these Hooks of react 
// useReducer, useCallback, useRef, useContext, and finally but not least our useMemo

import React, {
    useReducer,
    useRef,
    useContext,
    useCallback,
    useMemo,
    createContext,
} from "react"

// create context
const TodoContext = createContext();


//Reducer Function
const todoReducer = (state , action) =>{
  switch (action.type){
    case 'ADD':
    return [...state , {id:Date.now(), text: action.payload}];
    case "remove":
      return state.filter((todo)=>todo.id !== action.payload);
    default : 
    return state;
  }
};

function App(){
  const [todos , dispatch] = useReducer(todoReducer,[]);
  const inputRef = useRef();
}



