import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");
  const [hover, setHover] = React.useState(false);
  const sectionStyle = {
    background: hover ? "black" : "white"
  };

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseNotOver() {
    setHover(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={sectionStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseNotOver}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
