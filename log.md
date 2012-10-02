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

