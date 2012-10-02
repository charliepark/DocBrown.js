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

var html = fs.readFileSync('template/top.txt', "utf8");
html += fs.readFileSync('sample.js', "utf8");
html += fs.readFileSync('template/bottom.txt', "utf8");

fs.writeFileSync("docs/output.html", html, "utf8", function(err){
  if (err) throw err;
  console.log('Wrote to output.html');
});

fs.readFile('template/docstyle.css', "utf8", function (err, data) {
  if (err) throw err;
  fs.writeFile("docs/docstyle.css", data, "utf8", function(err){
    if (err) throw err;
    console.log('Copied CSS.');
  });
});
