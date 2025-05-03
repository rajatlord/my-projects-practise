
// First class components
// basic sturcture of class based components 
// --- Imports --- 
// import React , {Component}from "react";

// class Cls extends Component {
//     render(){
//         return<>        
//         <h1>Hello!!, {this.props.name}</h1>
//         </>
//     }
// }

// export default Cls;


// if our class components have consturcotr so it must to pass prop from the constructor 
// import React , {Component}from "react";

// class Cls extends Component {
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return<>        
//         <h1>Hello!!, {this.props.name}</h1>
//         </>
//     }
// }

// export default Cls;


// ---components inside components--- 
// imports 
// import React , {Component}from "react";

// 'Who' is a simple components that we'll use in cls components
// class Who extends Component{
//     render(){
//         return<><h1>who's there??</h1></>
//     }
// }

// ___Main class components___
// Demonstrating constructor usage and nested components
// class Cls extends Component {
//     constructor(props){
//         super(props);
        // Note: You can initialize state here later if needed
//     }
//     render(){
//         return<>        
//         <Who />
//         <h1>Me!!, {this.props.name}</h1>
//         </>
//     }
// }


// export default Cls;

/* 
🧠 CORE CLASS COMPONENT CONCEPTS:
1. Class components use `render()` to return JSX.
2. Use `constructor(props)` and `super(props)` if you're accessing props or initializing state.
3. You can compose components inside other components.
4. State = internal memory (you'll add this in the next steps).
*/

// --- 1. State ---
// what is a state?
// state is a object that is managed inside the class

// import
// import React , {Component}from "react";
// we're going to creating a counter for updating and using a state.

// class Cls extends Component{
//     constructor(props){
//         super(props);
//         this.state ={
//             count:0,
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick=()=>{
//         alert("Hello I am " + this.props.name );
//     }
//     render(){
//         return(
//             <>
//             <h1>Count : {this.state.count}</h1>
//             <button onClick={()=>{this.setState({count : this.state.count +1 })}}>update this count</button>
//             <h1 >Hello!!, {this.props.name}</h1>
//             <button onClick={this.handleClick}>Click me!!</button>
//             </>
//         )
//     }
// }

// export default Cls; 
// here we're doing using event handling and with state updation 


//              _____componenent life cycle methods__________
/*
 components life cycle methods with conditional rendering 
 Lifecycle Methods (React's version of “Janam, Jeevan, Mrityu”)
componentDidMount() — Called after the component is added to the DOM.

componentDidUpdate(prevProps, prevState) — Called after a re-render.

componentWillUnmount() — Called before removal.
*/

//                  _____component did mount_______

 /*
1. componentDidMount() — Janam (Birth)
This method runs once after the component first appears (is mounted) on the DOM.

Use cases:
Fetch data from an API 🛰️

Set up subscriptions (e.g., WebSocket, events)

DOM manipulations 
 */

import React , {Component}from "react";

class Cls extends Component{
    constructor(props){
        super(props);
        this.state ={
            count:0,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        console.log("Component did mount - born and ready!");
        // this.timer = setInterval(() => {
        //     console.log("Tick...");
        //   }, 5000);
    }
    // component did update
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
          console.log(`Updated from ${prevState.count} to ${this.state.count}`);
        }
      }

    
    
      componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Component is dead. Cleanup done.");
      }
    handleClick=()=>{
        alert("Hello I am " + this.props.name );
    }
    render(){
        return(
            <>
            <h1>Count : {this.state.count}</h1>
            <button onClick={()=>{this.setState({count : this.state.count +1 })}}>update this count</button>
            <h1 >Hello!!, {this.props.name}</h1>
            <button onClick={this.handleClick}>Click me!!</button>
            </>
        )
    }
}

export default Cls; 