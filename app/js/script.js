// Defining an Angular.js model. Modules are used to associate an Angular app with part of an 
// HTML document. They also provide access to Angular.js features.
var contactsApp = angular.module('contactsApp', []);


// The controller will have two purposes: 1) to store existing contact objects and 2) use form 
// input to create new contacts
contactsApp.controller('mainController', function($scope, $http) {

	$http.get('/contacts').then(function(response) {
		console.log('Requested data being received from http server.');
		$scope.contacts = response.data;
	});

	// ng-model from our html file will bind the input values to our AngularJS variables
	$scope.addContact = function() {
		$scope.contacts.push({firstname: $scope.firstname, middlename: $scope.middlename, lastname: $scope.lastname, 
			phone: $scope.phoneNumber, email: $scope.email});

		// clear input boxes
		$scope.firstname = '';
		$scope.middlename = '';
		$scope.lastname = '';
		$scope.phoneNumber = '';
		$scope.email = '';

	}

});