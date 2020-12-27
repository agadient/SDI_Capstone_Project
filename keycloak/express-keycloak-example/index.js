var express = require('express');
var cors = require('cors')

var router = express.Router();
var app = express();
var PORT = 7001;

app.use(cors({
    origin: 'http://localhost:3000'}));
const keycloak = require('./config/keycloak-config').initKeycloak();

app.use(keycloak.middleware());


app.get('/', (req,res) => {
    
    res.send("Root Route");
});

app.get('/user',keycloak.protect(), (req,res) => {
    console.log("sending protected user route");
    res.send("user logged in");
});

app.listen(PORT);