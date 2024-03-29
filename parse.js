//  # cleanOutDocsFolder
//
//  Internal: Deletes all the previously-generated files, so we can see what's working.
//
//  Returns nothing.
cleanOutDocsFolder = function(){
  var files = fs.readdirSync('docs');
  var l = files.length;
  while(l>0){
    l--;
    var filePath='docs/'+files[l];
    if (fs.statSync(filePath).isFile()){
      fs.unlinkSync(filePath);
    }
  }
  console.log('Cleaned out all previously-generated files.');
};

//  # copyTheCSSFileOver
//
//  Internal: Takes the CSS file in the /template directory and copies it to the /docs directory.
//
//  Returns nothing.
copyTheCSSFileOver = function(){
  fs.readFile('template/docstyle.css', "utf8", function (err, data) {
    if (err) throw err;
    fs.writeFile("docs/docstyle.css", data, "utf8", function(err){
      if (err) throw err;
      console.log('Copied CSS.');
    });
  });
};

//  # generateHTML
//
//  Internal: reads the named JS file and converts it into HTML,
//    which it then writes to the /docs directory, as output.html
//
//  Returns nothing.
generateHTML = function(){
  var html = fs.readFileSync('template/top.txt', "utf8");
  fs.readFileSync('sample.js', "utf8").toString().split('\n').forEach(function(line){
    if(line.slice(0,2) == "//"){
      html += line.replace("//  #","<h1>");
    }
  });
  html += fs.readFileSync('template/bottom.txt', "utf8");

  fs.writeFileSync("docs/output.html", html, "utf8", function(err){
    if (err) throw err;
  });
  console.log('Wrote to output.html');
};

// # requireExternalStuff
//
// Internal: Sets up global variables we'll need
//
// Returns nothing.
requireExternalStuff = function(){
  fs = require('fs');
};

// fs.readFile('sample.js', "utf8", function (err, data) {
//   if (err) throw err;
//   Content = data;
//   console.log(data);
//   fs.writeFile("output.html", Content, "utf8", function(err){
//     if (err) throw err;
//     console.log('Wrote to output.html');
//   });
// });


requireExternalStuff();
cleanOutDocsFolder();
copyTheCSSFileOver();
generateHTML();
