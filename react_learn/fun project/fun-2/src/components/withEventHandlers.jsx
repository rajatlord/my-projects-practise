import React, { useState } from "react";

const withEventHandlers = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const [score, setScore] = useState(0);
    const [position, setPosition] = useState({ top: "50%", left: "50%" });

    const getRandomPosition = () => {
      const top = Math.floor(Math.random() * 80) + "%";
      const left = Math.floor(Math.random() * 80) + "%";
      return { top, left };
    };

    const handleEmojiClick = () => {
      setScore((prev) => prev + 1);
      setPosition(getRandomPosition());

      if (navigator.vibrate) navigator.vibrate(100);
    };

    const handleClick = (e) => {
      console.log("Mouse click", e.clientX, e.clientY);
    };

    const handleTouch = (e) => {
      const touch = e.touches[0];
      console.log("Touch event", touch.clientX, touch.clientY);
    };

    return (
      <div
        onClick={handleClick}
        onTouchStart={handleTouch}
        className="text-white font-bold p-4"
      >
        <div className="mb-4 text-xl ">
          <h1 className="text-black">Score:{score}</h1>
          
          <WrappedComponent
            onEmojiClick={handleEmojiClick}
            position={position}
            {...props}
          />
        </div>
      </div>
    );
  };
};

export default withEventHandlers;
