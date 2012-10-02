var fs = require('fs');

fs.readFile('sample.js', "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

console.log("ran");