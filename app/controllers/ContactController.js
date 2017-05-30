module.exports = function(ngModule){
	ngModule.controller('ContactCtrl', ['$scope', function($scope){
		$scope.textValue = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod';
	}]);
};