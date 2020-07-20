
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const itemRoute = require('./routes/itemRoute');
const path = require('path');
var short = require('short-uuid');

const mongoPath = applicationPropertiesSingleton.VAR_DB_LUNCHBOX_CUSTOMER_REGISTERATION;
const appPort = 3000;

// Mongoose Configuration
mongoose.Promise = global.Promise;
mongoose.connect(mongoPath);
mongoose.set('debug', true);

// Express Config
app.use(bodyParser.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.set("view engine", "html");
app.use(bodyParser.json());

// // Routes
app.use('flooid/cart', itemRoute);



// Run Server
const server = app.listen(appPort, function () {
    console.log("app is listening to port 3000")
});

module.exports = app;
