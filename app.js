var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('GET request to the homepage')
})

app.get('/about', function (req, res) {
    res.send('about')
})

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})

module.exports = app
