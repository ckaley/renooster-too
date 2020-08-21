// dependencies
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

// // configure dotenv
require('dotenv').config();

// new express app
var app = express();

// configure middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// configure api routes
app.use('/api', require('./routes'))

// // serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')));
}

// // connect to database
mongoose.connect(process.env.MONGODB_URI)

// define PORT
var PORT = process.env.PORT || 5000;

// start the server
app.listen(PORT, function () {
    console.log('server running on port http://localhost:' + PORT);
});
