module.exports=function($scope,config,$location,rest, modalService) {
	$scope.data = {};
	if(angular.isUndefined(config.activeBeer)){
		$location.path("beers/");
	};

	$scope.activeBeer=config.activeBeer;

	var what = "breweries/" + config.activeBeer.idBrewery;
	rest.getAll($scope.data, what);

	$scope.showBeers = function(){
		$location.path("beers/");
	};

	$scope.showBreweryName = function(){
		return $scope.data[what].name; 
	}

	$scope.showBrewery = function(){
		if(angular.isDefined($scope.data[what]))
		config.activeBrewery=angular.copy($scope.data[what]);
		config.activeBrewery.reference=$scope.data[what];
		$location.path("breweries/detail");
	}
};