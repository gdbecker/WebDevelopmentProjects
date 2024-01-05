const os = require('os');

// arch()
console.log(os.arch());

// platform()
console.log(os.platform());

// cpus()
console.log(os.cpus());

// freemem()
console.log(`Free memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);

// totalmem()
console.log(`Total memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);

// homedir()
console.log(os.homedir());

// uptime()
console.log(`Uptime: ${os.uptime()} seconds`);

// hostname()
console.log(os.hostname());