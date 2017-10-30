// Defining an Angular.js model. Modules are used to associate 
// an Angular app with part of an HTML document. They also 
// provide access to Angular.js features.
var contactsApp = angular.module('contactsApp', []);

contactsApp.controller('mainController', function($scope) {
	$scope.contacts = [
		'Sherlock Holmes', 
		'Gregory House', 
		'Leonard Nemoy'
	];

});