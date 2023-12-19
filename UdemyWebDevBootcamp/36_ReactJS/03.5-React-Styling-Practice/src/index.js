//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
var today = new Date();
var hour = today.getHours();
var title = "";
var titleColor = "";

if (hour >= 0 && hour < 12) {
  title = "Good Morning";
  titleColor = "red";
} else if (hour >= 12 && hour < 18) {
  title = "Good Afternoon";
  titleColor = "green";
} else {
  title = "Good Evening";
  titleColor = "blue";
}

var customStyling = {
  color: titleColor
};

ReactDOM.render(
  <h1 style={customStyling}>{title}</h1>,
  document.getElementById("root")
);
