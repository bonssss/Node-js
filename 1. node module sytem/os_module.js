const os = require('os')
 var freememo = os.freemem()
 var totalmemeory= os.totalmem()

// console.log(freememo);
// console.log(totalmemeory)

// ES6

console.log(`Total memory: ${totalmemeory}`)

console.log(`free memory: ${freememo}`)
