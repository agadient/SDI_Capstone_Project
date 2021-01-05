const express = require('express');
const bodyParser = require('body-parser');
const keycloak = require("./config/keycloak").initKeycloak();
const cors = require('cors')
// Set up the express app
const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(keycloak.middleware(
  { admin: '/auth'}
))
app.use(cors({origin: 'http://localhost:8000'}));

// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./routes')(app);
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.get('/auth', keycloak.protect(), (req, res)=> res.status(200).send({message: "Hi!"}))

module.exports = app;