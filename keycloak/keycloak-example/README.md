Setup docker-compose with pgsql backend, exposed 5555 (internal 8080) for auth server

Resources used:
 https://www.keycloak.org/docs/latest/getting_started/index.html
 https://github.com/abhilashahyd/react-keycloak-app
 https://cagline.medium.com/authenticate-and-authorize-react-routes-component-with-keycloak-666e85662636
 https://www.npmjs.com/package/@react-keycloak/web#setup-keycloak-instance


Installed these packages:

react-router-dom

keycloak-js
@react-keycloak/web

Installed but didnt need:
jwt-decode

Keycloak LATEST used, had issues with 9.x that the docker-compose example I used originally

Will use keycloak instance instead of keycloak.json:
const keycloak = Keycloak({
   ...... 
});

Not sure if this is the right path:
created baby-yoda realm, added a client with name of app "react-keycloak-example"
Added test user/password.

setup a keycloak.js file in src/ with above config:
------------
import Keycloak from 'keycloak-js'

const keycloakConfig = {
  realm: 'baby-yoda',
  url: 'http://localhost:5555/auth/',
  clientId: 'react-keycloak-example',
}

const keycloak = new Keycloak(keycloakConfig);

export default keycloak

----------------
added to App.jsx:
     import { ReactKeycloakProvider } from '@react-keycloak/web' 
     import keycloak from './keycloak'

Wrapped anything needed Auth for inside ReactKeycloakProvider tag

See App.jsx for example usage

_________________ For Express

Installed:
Axios

Added Logic to App.jsx to include sending the token to the global scope, adding a require for Axios intercepter, and an API call to get some test data. 
