const path = require('node:path');
console.log(path.basename('C:\\temp\\myfile.html'))
const a1 = path.extname(__filename)
console.log(a1)
const a2 = path.extname('C:\\temp\\myfile.html')
console.log(a2)
