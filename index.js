var express = require('express');
var app = express();
var passport = require('passport');

app.set('view engine', 'pug'); // set up pug for templating

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

app.listen(3000, function () {
  console.log('istening on port 3000!');
})
