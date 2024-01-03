// const message = require('./utils');
// console.log(message);

// Export multiple items from a file
const { capitalizeWords, makeMoney } = require('./utils');
console.log(capitalizeWords('hello world'));
console.log(makeMoney(100));

const Person = require('./Person');
const p1 = new Person('Jon', 30);
p1.greet();
