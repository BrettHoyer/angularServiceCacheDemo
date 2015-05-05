angular.module('pubsub').controller('SecondaryController', function($scope, DataService){
	$scope.hello = 'world'
	$scope.messages = DataService.messages;
})