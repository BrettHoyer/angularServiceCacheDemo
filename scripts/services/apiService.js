angular.module('pubsub').factory('ApiService', function($http, DataService){

	var api = {};
	var formSubRedditUrl = function(subReddit){
		return 'http://www.reddit.com/r/' + subReddit + '.json';
	}

	api.fetchSubReddit = function(subReddit){
		$http.get(formSubRedditUrl(subReddit)).then(function(resp){
			DataService.setRedditData(subReddit, resp.data.data.children);
		})
	}

	return api;
})