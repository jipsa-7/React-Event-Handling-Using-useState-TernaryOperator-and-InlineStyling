import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  function handleClick() {
    setHeadingText("Submitted");
  }
  const [isMouseOver, setBackGroundColor] = useState(false);
  function handleMouseOver() {
    setBackGroundColor(true);
  }
  function handleMouseOut() {
    setBackGroundColor(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
