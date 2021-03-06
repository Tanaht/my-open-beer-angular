module.exports=function($routeProvider,$locationProvider,$httpProvider) {
	//$httpProvider.defaults.useXDomain = true;
	//$httpProvider.defaults.withCredentials = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
	$routeProvider.
	when('/', {
		templateUrl: 'templates/main.html',
		controller: 'MainController'
	}).when('/home', {
		redirectTo : "/"
	}).when('/breweries', {
		templateUrl: 'templates/breweries/main.html',
		controller: 'BreweriesController'
	}).when('/breweries/refresh', {
		templateUrl: 'templates/breweries/main.html',
		controller: 'BreweriesController'
	}).when('/breweries/new', {
		templateUrl: 'templates/breweries/breweryForm.html',
		controller: 'BreweryAddController'
	}).when('/breweries/update', {
		templateUrl: 'templates/breweries/breweryForm.html',
		controller: 'BreweryUpdateController'
	}).when('/breweries/detail', {
		templateUrl: 'templates/breweries/brewery-detail.html',
		controller: 'BreweryShowController'
	}).when('/saves', {
		templateUrl: 'templates/saveMain.html',
		controller: 'SaveController'
	}).when('/config', {
		templateUrl: 'templates/config.html',
		controller: 'ConfigController'
	}).when('/beers', {
		templateUrl: 'templates/beers/main.html',
		controller: 'BeersController'
	}).when('/beers/refresh', {
		templateUrl: 'templates/beers/main.html',
		controller: 'beersController'
	}).when('/beers/new', {
		templateUrl: 'templates/beers/beerForm.html',
		controller: 'BeerAddController'
	}).when('/beers/update', {
		templateUrl: 'templates/beers/beerForm.html',
		controller: 'BeerUpdateController'
	}).when('/beers/detail', {
		templateUrl: 'templates/beers/beer-detail.html',
		controller: 'BeerShowController'
	}).when('/404', {
		templateUrl: 'templates/error/error404.html'
	}).when('/401', {
		templateUrl: 'templates/error/error401.html'
	}).otherwise({
		redirectTo: '/404'
	});
	if(window.history && window.history.pushState){
		$locationProvider.html5Mode(true);
	}
};