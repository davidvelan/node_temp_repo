const path = require('path')

// console.log(path.join);

const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
const res = path.resolve('content','subfolder','test.txt')
console.log(absolute)
console.log(res);