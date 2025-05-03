import { useState } from "react";

function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <h2>{isLoggedIn ? "Welcome Back!" : "Please Log In."}</h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
}

export default AuthButton;
