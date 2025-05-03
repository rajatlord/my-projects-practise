import { useState, createContext } from 'react'
import Home from "./components/Home"
import './App.css'


export const LogInContext = createContext(); 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin =()=>{
    setIsLoggedIn(true);
  };
  const handleLogout =()=>{
    setIsLoggedIn(false);
  };
  
  return (
    <LogInContext.Provider value={{ isLoggedIn,onLogin: handleLogin,onLogout:handleLogout }} >
    <div className='App'>
        <h1>Authentication App</h1>
        <Home />
    </div>
    </LogInContext.Provider>
  )
}

export default App

// isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout}