// import files and packages up here
var express = require('express')
var morgan = require('morgan')
var topspots = require('../server/data.json')

// create your express server below
var app = express();

// add your routes and middleware below
app.use(morgan('dev'));

app.get('/data', function (req, res) {
    res.status(200).send(topspots);
    res.end();
});

app.get('/', function (req, res) {
    res.status(200).send("It's working");
    res.end();
});

// var server = app.listen(8080, function () {
//     console.log('Listening on port 8080')
// });
// finally export the express application
module.exports = app;
