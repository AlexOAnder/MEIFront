module.exports = function(ngModule){
	ngModule.controller('LandingCtrl', ['$scope','smoothScroll','$location', function($scope,smoothScroll,$location){
		$scope.isAuthPanelOpen = false;
        $scope.homeLink = "#home";
        $scope.goToElement = function(eID){
            smoothScroll.scrollTo(eID);
        }
        $scope.startAuth = function() {
            var form = $scope.auth;
            var s = form.emailInput.$viewValue;
            var s2 = form.pass.$viewValue;
            console.log(s + s2);
            if (!(form.$error.required && form.$error.email))
            {
                console.log("Vse ok");
                $location.path('/home');
            }
        }
	}]);

};