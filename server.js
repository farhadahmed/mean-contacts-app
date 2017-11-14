'use strict';

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('meancontactsapp', ['meancontactsapp']);
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

// THe /app directory is the location of the static assets for the server to use.
app.use(express.static(__dirname + '/app'));
// Parse json
app.use(bodyParser.json());

// Create endpoint to retrieve contacts data
app.get('/contacts', function (req, res) {

	console.log('Server received a GET request for contacts data');

	//grab test data inside of our database
	db.meancontactsapp.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});

});

app.post('/contacts', function (req, res) {
	// should log inputs in terminal as json
	console.log(req.body);
	db.meancontactsapp.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

// app.use(function(req, res, next) {
//   res.status(404).sendFile(__dirname + '/app/404.html');
// });

app.listen(port, function() {
  console.log('server running on port ' + port);
});