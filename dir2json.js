const directoryTree = require('directory-tree')
const fs = require("fs");
console.log('about to create tree')
var tree = directoryTree('./', { exclude: /node_modules/});
console.log(tree)
fs.writeFileSync('file-structure.json', JSON.stringify(tree));

