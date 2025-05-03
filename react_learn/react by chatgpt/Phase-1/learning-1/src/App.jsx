import { useState } from "react";
// import Greet from "./Greeting";
import Counter from "./during-1/Counter";
import InputForm from "./during-1/InputForm";
import AuthButton from "./during-1/AuthButton.Jsx";
import UserList from "./during-1/UserList";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
    <Counter/>
    <InputForm name="RJ"/>
      {/* <Greet name="RJ" />
      <Greet name="Emily" /> */}
      <AuthButton/>
      <UserList/>
    </>
  );
}

export default App;
