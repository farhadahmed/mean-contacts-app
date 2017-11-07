'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
  res.status(500).sendFile(__dirname + '/app/index.html');
});

app.get('/contacts', function(req, res) {

	// I've moved our dummy data out of our angular controller into
	// a server response. This dummy data will be used to populate 
	// the contacts table
	var contacts = [
		{firstname: 'Sherlock', middlename: '', lastname: 'Holmes', phone: '444-4444', email: 'holmes@bakerstreet.com'},
		{firstname: 'Gregory', middlename: '', lastname: 'House', phone: '333-3333', email: 'housemd@itsnotlupus.com'},
		{firstname: 'James', middlename: 'T.', lastname: 'Kirk', phone: '222-2222', email: 'youropinion@mrspock.com'},
		{firstname: 'Tyrion', middlename: '', lastname: 'Lannister', phone: '444-5555', email: 'idrinkandiknowthings@got.com'}
	];

	res.json(contacts);

});

// app.use(function(req, res, next) {
//   res.status(404).sendFile(__dirname + '/app/404.html');
// });

app.listen(port, function() {
  console.log('server running on port ' + port);
});