# Logfile

This is a Charlie-generated record of the process of getting this going.

#### 2012-10-02 17:00

Okay. Thinking about writing this in Ruby, but I'd really like to keep it in JS if possible.

Can we open files with JS? Kind of crucial.

A few questions on StackOverflow suggest not. ([1](http://stackoverflow.com/questions/3582671/how-to-open-local-disk-file-with-javascript) [2](http://stackoverflow.com/questions/9181426/javascript-open-a-file)).

Something through Node? [fsopen looks promising.](http://nodejs.org/api/fs.html#fs_fs_open_path_flags_mode_callback)

Let's try it.

Using the documentation at [http://nodejs.org/api/fs.html#fs_file_system](http://nodejs.org/api/fs.html#fs_file_system) to get started. Created a sample file (sample.js) and a fileopen.js file, which is where I'm actually writing the fs experiment.

Okay. That works. What I have:

    var fs = require('fs');
    fs.open('/sample.js', 'r');
    console.log("ran");

Doesn't do anything, but it works.

#### 2012-10-02 17:15

Now going to try appending to the file.

Not sure what "offset" and "length" refer to in the Node documentation. Looking into that.

Copying [an answer at StackOverflow](http://stackoverflow.com/questions/2496710/nodejs-write-to-file) got it to write to the file, but overwrote my old code. Which will actually be useful down the road, but not at the moment.

Actually, just focusing on reading the file. Easy. What I have:

    var fs = require('fs');
    fs.readFile('sample.js', "utf8", function (err, data) {
      if (err) throw err;
      console.log(data);
    });
    console.log("ran");

#### 2012-10-02 17:28

So we're currently writing to output. Let's try to write to a file.

Renamed "fileopen.js" to "parse.js".

Okay. Added fileWrite in as part of the callback in the readFile function. Seems to be working, as a straight copy. Now to actually parse it.

#### 2012-10-02 17:43

Okay, Had to make a slight adjustment, as we'll be working with the Sync versions if the file I/O.

Okay, now created a template directory, and "top" and "bottom" files for wrapping the content. Gives stylesheet. We should probably extract stylesheet out, to make it easier to tweak and to decouple style from content.

Now writing to a "docs" folder. And CSS is externalized. docstyle.css in /template is the master CSS file.

#### 2012-10-02 18:14

Starting to modularize code, and to actually write TomDocs for it (merp). Also, created a "clean out docs folder" function to run first.

Taking a break. Started in on actual parser, but it isn't really working yet and needs to be further modularized.

#### 2012-10-03 05:10

Last night, while playing with this, I tried running various JS files through Docco, and they generated relatively well. So now planning to shift this around, and write my own specification documentation plan. More after I get coffee.

Okay, I've updated name to DocBrown.js.

#### 2012-10-03 12:27

Oh, hey. Look at that. Same thought process going on over at http://doctestjs.org/. Will read up on that and report back.

It's not quite the same, but [jashkenas makes a good point](https://news.ycombinator.com/item?id=4608119): "*good* tests are very rarely the same thing as good examples. Good examples often elide bits of code that aren't pertinent to the API function being demonstrated ... and good tests often involve the edge cases that are poorly suited to learning examples." So that's interesting.


