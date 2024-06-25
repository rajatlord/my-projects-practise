import "./index.css"
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdFamilyRestroom } from "react-icons/md";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code >src/App.js</code> and save to reload.
        </p>
        <a
          className="text-3xl	font-black	"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React<BsFillCartCheckFill /><MdFamilyRestroom />

        </a>
        <h1 className="font-black text-9xl">
      Hello world!<BsFillCartCheckFill />
    </h1>
      </header>
      
    </div>
  );
}

export default App;
