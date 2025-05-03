// import './App.css'
import styles from "./styles.module.css"
import styled from "styled-components";


function App() {

  const divStyle = {
    color: "white",
    backgroundColor: "grey",
    padding: "10px",
    borderRadius: "5px",
    textAlign : "center", 
  };

  const Button = styled.button`
  background-color: pink;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: hotpink;
  }
`;
  const P = styled.p`
  cursor: pointer;
  &:hover {
    background-color: hotpink;
  }`;

  return (
    <>
     <h1>Hello Rajat is there.</h1>
     <div style={divStyle}>Hello, I'm styled inline</div>
     <div className={styles.container}>Hello, I'm styled through external file 💅</div>
     <Button>Click ME  💖</Button>
     <P>HI there</P>
    </>
  )
}

export default App
