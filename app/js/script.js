// Defining an Angular.js model. Modules are used to associate an Angular app with part of an 
// HTML document. They also provide access to Angular.js features.
var contactsApp = angular.module('contactsApp', []);


// The controller will have two purposes: 1) to store existing contact objects and 2) use form 
// input to create new contacts
contactsApp.controller('mainController', function($scope) {
	$scope.contacts = [
		{firstname: 'Sherlock', middlename: '', lastname: 'Holmes', phone: '444-4444', email: 'holmes@bakerstreet.com'},
		{firstname: 'Gregory', middlename: '', lastname: 'House', phone: '333-3333', email: 'housemd@itsnotlupus.com'},
		{firstname: 'James', middlename: 'T.', lastname: 'Kirk', phone: '222-2222', email: 'youropinion@mrspock.com'},
		{firstname: 'Tyrion', middlename: '', lastname: 'Lannister', phone: '444-5555', email: 'idrinkandiknowthings@got.com'}
	];

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