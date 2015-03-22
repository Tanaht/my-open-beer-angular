module.exports=function($scope,$location,save,$window, config, user) {
	$scope.user = {
		connected : user.connexion,
		mail : "non connecté",
		password: "",
		setting : false
	};

	$scope.tempMail = "";

	if(user.connexion){
		$scope.user.mail = user.information.mail;
	}

	$scope.userConnect = function(){
		$scope.user.mail = $scope.tempMail;
		user.information.connexion = true;
		$scope.user.connected = true;
		$scope.user.setting = false;
	}

	$scope.userDeconnect = function(){
		console.log('déconnexion');
	}
	$scope.hasOperations=function(){
		return save.operations.length>0;
	};
	
	$scope.opCount=function(){
		return save.operations.length;
	};
	$scope.buttons=[{caption:"Okay"},{caption:"Annuler",dismiss:"true"}];
	
	var beforeUnload=function(e) {
		if($scope.hasOperations())
			return "Attention, vous allez perdre les modifications("+$scope.opCount()+") non enregistrées si vous continuez...";
	};
	angular.element($window).on('beforeunload',beforeUnload);
	
	$scope.$on("$destroy", function () {
		$window.removeEventListener('beforeunload', beforeUnload);
	});
	
};