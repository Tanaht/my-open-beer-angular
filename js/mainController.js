module.exports=function($scope,$location,save,$window, config, user) {
	$scope.user = angular.copy(user.information);
	$scope.tempMail = "";//variable temporaire contenant le mail entrée par l'utilisateur

	$scope.userConnect = function(){
		//on assigne le mail et le password dans le service user
		user.information.posted.mail = $scope.tempMail;
		user.information.posted.password = $scope.user.password;
		user.getToken();//on récupère le token;
		console.log(user);
		$scope.user = user.information;//on met a jour les données du controller 
		console.log($scope.user);
	};

	$scope.userDeconnect = function(){
		user.deconnect();
		$scope.tempMail = "";
		$scope.user = user.information;
	};

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