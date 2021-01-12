// app.js
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');
const product_controller = require('./controllers/product.controller');
const cors = require('cors')
// initialize our express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const mongoose = require('mongoose');
let mongoDB = 'mongodb://root:root@localhost:8010/admin';
mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology:true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let port = 8000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

app.use(product)

module.exports = app;
