module.exports=function($scope,config,$location,rest, modalService) {
	$scope.data = {};
	/*if(angular.isUndefined(config.activeBeer)){
		$location.path("beers/");
	};*/

	$scope.activeBeer=config.activeBeer;
};