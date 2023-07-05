const path = require('path');

console.log(path.sep);

const fPath = path.join('/content', 'subfolder', 'test.txt');
console.log(fPath);

const base = path.basename(fPath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
