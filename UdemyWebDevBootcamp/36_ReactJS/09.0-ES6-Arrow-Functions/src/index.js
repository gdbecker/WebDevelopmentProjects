import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

var newNumbers1 = numbers.map((x) => {
  return x * x;
});
console.log(newNumbers1);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

var newNumbers2 = numbers.filter((num) => {
  return num < 10;
});
console.log(newNumbers2);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

var newNumbers3 = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
});
console.log(newNumbers3);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
var newNumbers4 = numbers.find((num) => {
  return num > 10;
});
console.log(newNumbers4);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
var newNumbers5 = numbers.findIndex((num) => {
  return num > 10;
});
console.log(newNumbers5);
