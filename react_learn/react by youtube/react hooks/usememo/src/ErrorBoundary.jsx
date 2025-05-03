import React from "react";


class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError:false};
    }
    static getDerivedStateFromError(error){

        return {hasError:true};
    }
    
    componentDidCatch(error,errorinfo){
        console.log("Error caught by ErrorBoundary: " , error , errorinfo);
    }
    
    render(){
        if(this.state.hasError){
            return <h2 style={{color:"red"}}>Something went Wrong!</h2>;
        }
        return this.props.children;
    }

}

export default ErrorBoundary;