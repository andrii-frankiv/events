/** Events application back-end */
var express = require('express');

var app = express();
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
mongoose.connect('mongodb://localhost/events');

app.get('/', function(request, response) {
    response.sendFile('index.html');
});

app.get('/data/accounts', function(request, response) {
    var Account = require('./models/account');

    Account.find({}, function(err, accounts) {
        if (err) throw err;

        response.json(accounts);
    });
});

app.listen(8080, function() {
    console.log('Server is running on http://localhost:8080/');
});
