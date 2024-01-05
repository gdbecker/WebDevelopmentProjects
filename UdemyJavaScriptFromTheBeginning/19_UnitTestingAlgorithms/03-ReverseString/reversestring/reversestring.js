// My Solution
// function reverseString(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     result = result + str[str.length - 1 - i];
//   }
//   return result;
// }

// Solution 1
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// Solution 2
// function reverseString(str) {
//   let rev = "";

//   for (let char of str) {
//     rev = char + rev;
//   }

//   return rev;
// }

// Solution 3
function reverseString(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverseString;
