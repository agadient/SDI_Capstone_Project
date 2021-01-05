
var session = require('express-session');
var Keycloak = require('keycloak-connect');

var keycloak;

// var keycloakConfig = {
//     realm: 'baby-yoda',
//     serverUrl: 'http://localhost:5555/auth/',
//     clientId: 'express-keycloak-example',
//     bearerOnly: true,
// };

var keycloakConfig = 
{
    "realm": "baby-yoda",
    "bearer-only": true,
    "auth-server-url": "http://localhost:5555/auth/",
    "ssl-required": "external",
    "resource": "express-keycloak-example",
    "confidential-port": 0
  };



const initKeycloak = () =>{
    if (keycloak){

        return keycloak;
    }
    else { 
        console.log("init keycloak")
        var memoryStore = new session.MemoryStore();
        var keycloak = new Keycloak({
            store: memoryStore,
        },keycloakConfig);
        return keycloak;
        
    }
    
    
}

module.exports = { initKeycloak };