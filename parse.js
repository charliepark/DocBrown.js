var fs = require('fs');

// fs.readFile('sample.js', "utf8", function (err, data) {
//   if (err) throw err;
//   Content = data;
//   console.log(data);
//   fs.writeFile("output.html", Content, "utf8", function(err){
//     if (err) throw err;
//     console.log('Wrote to output.html');
//   });
// });

var content = fs.readFileSync('sample.js', "utf8");
console.log(content);