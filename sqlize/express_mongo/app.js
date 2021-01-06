// app.js
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
// initialize our express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const mongoose = require('mongoose');
let mongoDB = 'mongodb://root:root@localhost:8010/admin';
mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology:true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let port = 8000;
app.use('/products', product);

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

module.exports = app;
