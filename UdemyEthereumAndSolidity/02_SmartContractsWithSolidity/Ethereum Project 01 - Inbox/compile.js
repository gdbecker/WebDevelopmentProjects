// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');

// .resolve works on windows and linux
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// compile .sol source code
module.exports = solc.compile(source, 1).contracts[':Inbox'];