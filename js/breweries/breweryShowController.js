module.exports=function($scope,config,$location,rest) {
	if(angular.isUndefined(config.activeBrewery)){
		$location.path("breweries/");
	}
	$scope.activeBrewery=config.activeBrewery;
}