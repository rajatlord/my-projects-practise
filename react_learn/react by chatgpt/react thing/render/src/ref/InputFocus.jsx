import { useRef, useEffect } from "react";

function InputFocus() {
  const inputRef = useRef(null); // Creating a ref

  useEffect(() => {
    inputRef.current.focus(); // Auto-focus the input on mount
  }, []);

  return <input ref={inputRef} placeholder="Type something..." />;
}

export default InputFocus;
