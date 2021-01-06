var session = require("express-session");
var Keycloak = require("keycloak-connect");

var keycloak;

var keycloakConfig = {
  realm: "baby-yoda",
  "bearer-only": true,
  "auth-server-url": "http://localhost:5555/auth/",
  "ssl-required": "external",
  resource: "express",
  "confidential-port": 0,
};

const initKeycloak = () => {
  var memoryStore = new session.MemoryStore();
  var keycloak = new Keycloak(
    {
      store: memoryStore,
    },
    keycloakConfig
  );
  return keycloak;
};

module.exports = { initKeycloak };
