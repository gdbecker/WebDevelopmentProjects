// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";

var [honda, tesla] = cars;

const {
  model: teslaModel,
  coloursByPopularity: teslaColours,
  speedStats: teslaSpeedStats
} = tesla;

const [teslaTopColour, teslaSecondColour] = teslaColours;

const {
  topSpeed: teslaTopSpeed,
  zeroToSixty: teslaZeroToSixty
} = teslaSpeedStats;

const {
  model: hondaModel,
  coloursByPopularity: hondaColours,
  speedStats: hondaSpeedStats
} = honda;

const [hondaTopColour, hondaSecondColour] = hondaColours;

const {
  topSpeed: hondaTopSpeed,
  zeroToSixty: hondaZeroToSixty
} = hondaSpeedStats;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
