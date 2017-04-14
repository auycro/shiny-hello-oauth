module.exports = function(app, passport) {

  // normal routes ===============================================================

      // show the home page (will also have our login links)
      app.get('/', function(req, res) {
          res.render('index', { title: 'Hey', message: 'Hello there!' });
      });

      app.get('/success', function(req, res) {
          res.render('success', { title: 'Hey', message: 'Hello there!' });
      });

      app.get('/fail', function(req, res) {
          res.render('fail', { title: 'Hey', message: 'Hello there!' });
      });
/*
      app.post('/send', function(req, res) {
          console.log('req:',req.body.endpoint);
          console.log('res:',req.body.txtArea);
          //res.render('index', { title: 'Hey', message: 'Hello there!' });
          res.send(req.body.txtArea);
      });
*/
      // =============================================================================
      // AUTHENTICATE ================================================================
      // =============================================================================

      // facebook -------------------------------

      // send to facebook to do the authentication
      app.get('/auth/conyac', passport.authenticate('oauth2', { failureRedirect: '/fail' }));

      // handle the callback after facebook has authenticated the user
      app.get('/auth/conyac/callback',
        passport.authenticate('oauth2', {
          successRedirect : '/success',
          failureRedirect : '/'
        }
      ));

};
