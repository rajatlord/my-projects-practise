import React from "react";

const ExpensiveComponent = React.memo(({ position }) => {
    console.log("Re-rendering ExpensiveComponent...");
    return <h1>Mouse Position: {position.x}, {position.y}</h1>;
  });
  
  const MouseTracker = ({ render }) => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
  
    React.useEffect(() => {
      const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
  
    return <>{render(position)}</>;
  };
  
  // Usage
  const Expensivee = () => {
    // return (
    //   <MouseTracker render={(position) => <ExpensiveComponent position={position} />} />
    // );
    const renderExpensiveComponent = React.useCallback(
      (position) => <ExpensiveComponent position={position} />,
      []
    );
  
    return <MouseTracker render={renderExpensiveComponent} />;

  };

  
  export default Expensivee;