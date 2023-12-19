//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

var myName = "Garrett";
var currentDate = new Date();

ReactDOM.render(
  <div>
    <p>Created by {myName}.</p>
    <p>Copyright {currentDate.getFullYear()}.</p>
  </div>,
  document.getElementById("root")
);
