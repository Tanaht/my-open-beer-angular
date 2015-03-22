module.exports=function($scope,config,$location, rest){

	$scope.config=angular.copy(config);
	var connection = {
		mail : "admin@local.fr",
		password : "68CmvlwzY8u4k"
	};

	$scope.token = {};
	
	rest.post($scope.token, "user/connect", connection, function(){
		console.log("success callback");
	});

	$scope.setFormScope=function(form){
		$scope.frmConfig=form;
	};
	
	$scope.update=function(){
		if($scope.frmConfig.$dirty){
			config.server=$scope.config.server;
			config.breweries=$scope.config.breweries;
			config.beers=$scope.config.beers;
		}
		$location.path("/");
	};
	$scope.cancel=function(){
		$location.path("/");
	};
};