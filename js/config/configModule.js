var configApp=angular.module("ConfigApp", []).
controller("ConfigController", ["$scope","config","$location", "rest" ,require("./configController")]);
module.exports=configApp.name;