var express = require('express');
var app = express();
var passport = require('passport');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');

// configuration ===============================================================

require('./config/passport')(passport); 

// set up our express application
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));     // to support URL-encoded bodies

app.set('view engine', 'pug'); // set up pug for templating
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(3000, function () {
  console.log('Listening on port 3000!');
})
