module.exports=function($scope,config,$location,rest, modalService) {
	$scope.data = {};
	
	if(angular.isUndefined(config.activeBrewery)){
		$location.path("breweries/");
	};

	$scope.activeBrewery=config.activeBrewery;
	$scope.imgBrewery = "http://127.0.0.1/dev/my-open-beer-angular/img/" + config.activeBrewery.photo;
	
	var what = "beers/brewery/" + config.activeBrewery.id;
	rest.getAll($scope.data, what);

	$scope.countBeers = function(){
		if($scope.data[what] == undefined)//si il n'y a pas de bière au brasseur
			return 0;
		else{	
			return $scope.data[what].length;
		}
	};

	$scope.showBreweries = function(){
		$location.path("breweries/");
	};

	$scope.showBeers = function(){
		var listShowBeers = "";
		var title = "Liste des bières de " + config.activeBrewery.name;
		for(i = 0 ; i<$scope.countBeers() ; i++){
			listShowBeers = listShowBeers + "<beer id='" + $scope.data[what][i].id + "' name='" + $scope.data[what][i].name + "'></beer><hr/>";
		}
		modalService.showModal(title, listShowBeers, undefined);
	}
}