// declare os module --> build in module
const os = require('node:os');
console.log(os.arch())
console.log(os.freemem())
console.log(os.hostname())
console.log(os.platform())
console.log(os.totalmem())