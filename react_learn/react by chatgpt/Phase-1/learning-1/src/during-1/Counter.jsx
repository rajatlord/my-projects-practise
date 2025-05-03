import { useState } from "react";

function counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count :{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default counter;
