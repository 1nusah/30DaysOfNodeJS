// requiring or importin the fs module
const fs = require('fs');
const file = fs.readFileSync('./lib.js').toString();
console.log(file);
fs.appendFileSync('./lib.js', 'niggas envious');
