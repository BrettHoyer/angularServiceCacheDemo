angular.module('pubsub', ['ui.router'])
.config(function($stateProvider){
	$stateProvider
	.state('main', {
		url: '/main',
		views:{
			'':{
				templateUrl: 'templates/main.html',
				controller: 'MainController'
			},
			'secondary@main':{
				templateUrl: 'templates/secondary.html',
				controller: 'SecondaryController'
			}
		}
	})
	.state('secondary', {
		url: '/secondary',
		templateUrl: 'templates/secondary.html',
		controller: 'SecondaryController'
	})
})
