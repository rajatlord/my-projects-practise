import React, { useEffect, useState } from "react";

function HoverLogger() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const divElement = document.getElementById("hoverDiv");

    if (divElement) {
      divElement.addEventListener("mouseenter", handleMouseEnter);
      divElement.addEventListener("mouseleave", handleMouseLeave);
    }

    if (isHovered) {
      console.log("Hovered over the div!");
    }

    return () => {
      if (divElement) {
        divElement.removeEventListener("mouseenter", handleMouseEnter);
        divElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isHovered]); // Depend on `isHovered` to log only when hover state changes

  return (
    <div
      id="hoverDiv"
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: isHovered ? "lightcoral" : "lightblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Hover over me!
    </div>
  );
}

export default HoverLogger;
