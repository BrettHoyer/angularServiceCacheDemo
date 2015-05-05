angular.module('pubsub').controller('MainController', function($scope, DataService, ApiService){
	$scope.hello = DataService.hello;

	$scope.redditData = DataService.getRedditData();
	$scope.subReddits = [
	{
		name: 'tech'
	},
	{
		name: 'nba'
	},
	{
		name: 'nfl'
	}
	]

	// $scope.$on('REDDIT_DATA_UPDATED', function(context, data){
	// 	$scope.redditData = data;
	// })


	$scope.messageList = DataService.messages

	$scope.createMessage = function(message){
		alert('message saved:' + message)
		DataService.addMessage(message);
	}

	$scope.changedSubReddit = function(subReddit){
		ApiService.fetchSubReddit(subReddit);
	}
})