References used: 
https://chamith.medium.com/secure-front-end-react-js-and-back-end-node-js-express-rest-api-with-keycloak-daf159f0a94e
https://github.com/keycloak/keycloak-documentation/blob/master/securing_apps/topics/oidc/nodejs-adapter.adoc
https://masteringjs.io/tutorials/axios/interceptors



Installed:

express
keycloak-connect
express-session
cors
nodemon

Added config/keycloak-config.js from reference

added these lines to the top of index.js beyond standard express app setup:
    
    const keycloak = require('./config/keycloak-config').initKeycloak();
    app.use(keycloak.middleware());

added client to realm baby-yoda ith client id to mtch keycloak config in keycloak.js and the root URL localhost:7001 as thats the port I picked, set client to bearer-only so no login redirects as the idea is to login to react and use the same auth session - Used Keycloak admin page to export installation JSON for config

Modified react app from here to test. Login session is not "shared" with the API backend automatically, instead the token is appended to the header of the request. This is accomplished in this implementation by using axios intercepters, which I will configure in a file "intercepter.js" in the react app root. Then we include the axios in the .jsx that needs to make API calls and require the interceptor.js in the file as well:

    const axios = require('axios');
    require('./interceptor');

Each axios.get request will have the required modification without have to setup the modification on each request.

The react-app will also add a "dummy" token to pass in the event there is no logged in session, otherwise an error occurs on access. Direct access to the express does not work without a mock session. 
