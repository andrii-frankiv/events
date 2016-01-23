/** Events application back-end */
var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.sendFile('index.html');
});

app.get('/data', function(request, response) {
    response.send('Get all users');
});

app.listen(8080, function() {
    console.log('Server is running on http://localhost:8080/');
});
