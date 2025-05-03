import { useState } from "react";
import React , {Suspense , lazy , createContext } from "react";
import "./App.css";

// old componetsn using hooks
import NameComponents from "./Hooks/useMemo/NameComponents";
import ResultComponents from "./Hooks/useMemo/ResultComponents";
// import Parent from "./Hooks/useCallback/Parent";
import ErrorBoundary from "./ErrorBoundary";

// done between 20 april - 21 april
import HoverLogger from "./components/HoverLogger";
import Counter from "./Hooks/useReducer/Counter"
import Ref from "./Hooks/useRef/Ref"

// lazy loading
const Parent = lazy(()=>import("./Hooks/useCallback/Parent")) ;

// for usecontext
  const data = createContext();
  const data1 = createContext();

function App() {
  // const [state , SetState] = useState(0);
  const name = 'Rj';
  const city = 'Agra';
  return (
    <>
      {/* <p>inial state: {state}</p>
        <button onClick={()=> SetState(state +1)}>Plus 1</button>
      
      <input type="text" /> */}
      {/* <ErrorBoundary> */}
        {/* <Suspense  fallback={<p>Loading....</p>}> */}
        {/* <NameComponents name="ROMA"/> */}
        {/* <ResultComponents marks={80} subject="Science"/> */}
        {/* <Parent /> */}
        {/* </Suspense> */}
      {/* </ErrorBoundary> */}

      {/* <HoverLogger></HoverLogger> */}

      {/* let say in this component we are going to context data */}
      <data.Provider value={name}>
        <data1.Provider value={city}>
      <Counter/>
      </data1.Provider>
      </data.Provider>
        <Ref/>
    </>
  );
}

export default App;
export {data , data1}