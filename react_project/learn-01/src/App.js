import "./index.css"
import Round from "./Round";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p style={{color:"black" , backgroundColor:"#ccc"}}> */}
        <p>
          Edit <code >src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Round/>
    </div>
  );
}

export default App;