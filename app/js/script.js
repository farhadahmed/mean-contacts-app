// Defining an Angular.js model. Modules are used to associate an Angular app with part of an 
// HTML document. They also provide access to Angular.js features.
var contactsApp = angular.module('contactsApp', []);

// The controller has two purposes: 
// 		1) send get request to http server to retrieve contact data 
//		2) on form submission, send post request to http server to create a new contact.
contactsApp.controller('mainController', function ($scope, $http) {

	// Retrieve contact data from server. '/contacts' is the route that we'll get the data from.
	$http.get('/contacts').then(function (response) {
		// $scope allows us to use this contacts variable in the html file and loads the data into browser.
		$scope.contacts = response.data;
	});

	// ng-model from the html's form inputs will bind the input values to the AngularJS variables.
	$scope.addContact = function () {
		console.log($scope.contact);

		// Send the new contact's properties to server as a post
		$http.post('/contacts', $scope.contact).then(function (response) {
			console.log(response);
		});

	}

});