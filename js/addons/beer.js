module.exports=function($location) {
	return {
		restrict:'E',
		scope : {id: "@", name: "@"},
		templateUrl: 'js/addons/templates/beer.html',
		transclude: true,
		replace:true			
	}
};