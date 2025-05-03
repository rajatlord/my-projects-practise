// import  EseState  from './Hooks/EseState'
import { useEffect } from "react";
import EustomHooks from "./Hooks/EustomHooks";
import './App.css'

function App() {
  useEffect(() => {
    document.title = "Custom Hooks"; // Change this to desired title
  }, []);
  

  return (
    <>
    {/* <EseState /> */}
    <EustomHooks/>
     </>
  )
}

export default App
