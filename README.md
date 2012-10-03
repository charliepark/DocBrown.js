# DocBrown.js

A probably-not-working-yet documentation parser for JavaScript files.

## What is this?

I've recently fallen in love with the [TomDoc](http://tomdoc.org/) documentation specification. At the moment, though, I'm having to generate and maintain a separate internal HTML file for recording the different functions, their parameters, their expected output, and so on. Seems like needless work, right? Ideally, this will create a simpler way of generating documentation, based off the documentation in my JS files.

It's supposed to work hand-in-hand with the TomDoc specification, but be flexible when necessary. Also, ideally, it'll generate Qunit tests based off the examples listed in the documentation. We'll see if we make it that far.

**There's a very good chance this doesn't work.** I've never built a JS parser before, and this could get messy. But I'd like to learn. Let's see how this goes.