// Defining an Angular.js model. Modules are used to associate an Angular app with part of an 
// HTML document. They also provide access to Angular.js features.
var contactsApp = angular.module('contactsApp', []);

// The controller will have two purposes: 
// 		1) send request to http server for contact data 
//		2) use form input to create new contacts.
contactsApp.controller('mainController', function($scope, $http) {

	// Retrieve contact data from server. '/contacts' is the route that we'll get the data from.
	$http.get('/contacts').then(function(response) {
		// $scope allows us to use this contacts variable in the html file and loads the data into browser.
		$scope.contacts = response.data;
	});

	// ng-model from the html file will bind the input values to the AngularJS variables.
	$scope.addContact = function() {
		// $scope.contacts.push({firstname: $scope.firstname, middlename: $scope.middlename, lastname: $scope.lastname, 
		// 	phone: $scope.phoneNumber, email: $scope.email});
		console.log($scope.contact);

		// Send the new contact's properties to server as a post
		$http.post('/contacts', $scope.contact);

		// clear input boxes
		$scope.contact.firstname = '';
		$scope.contact.middlename = '';
		$scope.contact.lastname = '';
		$scope.contact.phoneNumber = '';
		$scope.contact.email = '';

	}

});