import react, { useState, useCallback } from "react";
import React from 'react';



// 👶 A child component that only re-renders if props change
const ChildButton = React.memo(({ onClick }) => {
  console.log("ChildButton rendered");
  return <button onClick={onClick}>click Child button</button>;
});

export default function Parent() {
  console.log("parent renderend");
  const [count, setCount] = useState(0);

  // 👇 Memoized function — will not change unless dependencies change
  const handleChildClick = useCallback(() => {
    console.log("Child button clicked");
  }, []); // No dependencies = this function never changes

  return (
    <div>
      <h2>Parent count : {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        Increament count
      </button>

      {/* 🧠 Pass memoized function to child */}
      <ChildButton onClick={handleChildClick} />
    </div>
  );
}
