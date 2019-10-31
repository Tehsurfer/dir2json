const directoryTree = require('directory-tree')
const fs = require("fs");

exports.generate = function(){

  console.log('Creating tree from current folder:')
  var tree = directoryTree('./', { exclude: /node_modules/});
  console.log(tree)
  fs.writeFileSync('directory-meta.json', JSON.stringify(tree));
  console.log("Tree created at './directory-meta.json'")
}

