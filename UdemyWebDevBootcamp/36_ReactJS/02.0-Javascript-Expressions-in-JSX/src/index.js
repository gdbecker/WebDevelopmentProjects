import React from "react";
import ReactDOM from "react-dom";

const fName = "Garrett";
const lName = "B";
var luckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
