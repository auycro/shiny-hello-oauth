// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'conyacAuth' : {
        'authorizationURL': 'https://dev-conyac.com/oauth/authorize',
        'tokenURL'        : 'aaaaaaaaa',
        'clientID'        : 'c4902b65900d941100977db24e18a33edf842edac090f8262252c9f611537715a12345', // your App ID
        'clientSecret'    : 'a643832b408f7745c35fbb1f741005499787e67e89a9409d179a7799333e861ba12345', // your App Secret
        'callbackURL'     : 'http://localhost:3000/auth/conyac/callback'
    },

};
