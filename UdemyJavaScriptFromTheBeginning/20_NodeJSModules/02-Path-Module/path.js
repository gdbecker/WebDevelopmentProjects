const path = require('path');

const myFilePath = 'subfolder/anotherfolder/index.js';

// basename()
const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, '.js');

console.log(base1); // Output: index.js
console.log(base2); // Output: index

// extname()
const ext = path.extname(myFilePath);
console.log(ext); // Output: .js

// dirname()
const dir = path.dirname(myFilePath);
console.log(dir); // Output: subfolder/anotherfolder

// join()
const joinedPath = path.join('subfolder', 'anotherfolder', 'index.js');
console.log(joinedPath); // Output: subfolder/anotherfolder/index.js

// resolve()
const resolvedPath = path.resolve('subfolder', 'anotherfolder', 'index.js');
console.log(resolvedPath); // Output: /home/runner/Node-Modules/subfolder/anotherfolder/index.js

// __dirname
console.log(__dirname); // Output: /home/runner/Node-Modules

// __filename
console.log(__filename); // Output: /home/runner/Node-Modules/path.js