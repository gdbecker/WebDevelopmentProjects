import React from "react";

function App() {
  var now = new Date().toLocaleTimeString();
  const [time, setTime] = React.useState(now);

  function updateTime() {
    now = new Date().toLocaleTimeString();
    setTime(now);
  }
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
