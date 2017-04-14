// load all the things we need
var OAuth2Strategy = require('passport-oauth2').Strategy;

// load the auth variables
var configAuth = require('./auth'); // use this one for testing

module.exports = function(passport) {
// =========================================================================
// OAUTH 2.0 ================================================================
// =========================================================================
  var oauth2Strategy = configAuth.conyacAuth;
  passport.use(new OAuth2Strategy(oauth2Strategy,
    function(accessToken, refreshToken, profile, cb){

    }));
};
