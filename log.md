# Logfile

This is a Charlie-generated record of the process of getting this going.

#### 2012-10-02 17:00

Okay. Thinking about writing this in Ruby, but I'd really like to keep it in JS if possible.

Can we open files with JS? Kind of crucial.

A few questions on StackOverflow suggest not. ([1](http://stackoverflow.com/questions/3582671/how-to-open-local-disk-file-with-javascript) [2](http://stackoverflow.com/questions/9181426/javascript-open-a-file)).

Something through Node? [fsopen looks promising.](http://nodejs.org/api/fs.html#fs_fs_open_path_flags_mode_callback)

Let's try it.

Using the documentation at [http://nodejs.org/api/fs.html#fs_file_system](http://nodejs.org/api/fs.html#fs_file_system) to get started. Created a sample file (sample.js) and a fileopen.js file, which is where I'm actually writing the fs experiment.

