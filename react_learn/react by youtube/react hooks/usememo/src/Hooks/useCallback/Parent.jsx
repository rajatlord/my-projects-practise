import React, { useState, useCallback, useEffect } from 'react';

const Child = React.memo(({ handleClick }) => {
  console.log('Child rendered');
  return <button onClick={handleClick}>Click me</button>;
});

export default function Parent() {
  console.log("Parent rendeing")
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // This function will stay the same unless dependencies change


//   // Inside Parent.jsx
// useEffect(() => {
//   throw new Error("Test error from Parent");
// }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <Child handleClick={handleClick} />
    </div>
  );
}
