var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var replay = require('./replay.js');
var app = express();

console.log(replay.countRunes());

// Log requests
app.use(express.logger());

// Compile Stylus files
app.use(stylus.middleware({
  src: __dirname + '/public/styles/',
  dest: __dirname + '/public/styles/',
  compile: function(str, path) {
    return stylus(str)
      .set('filename', path)
      .set('compress', true)
      .use(nib());
  }
}));

//api routes
require('./routes.js')(app);

// Serve static files
app.use(express.static(__dirname + '/public'));

// Get the port from environment variables
var port = process.env.PORT || 3000;

app.listen(port);
