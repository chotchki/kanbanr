var app = angular.module('app', [
	'ui.router',
	]);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/login");

	$stateProvider
		.state('login',{
			url: "/login",
			templateUrl: "/js/views/login.html"
		});
});