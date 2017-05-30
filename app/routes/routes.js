module.exports = function(ngModule){
	ngModule.config(function($routeProvider){
        $routeProvider.when('/home',
        {
            templateUrl:'views/home.html',
            controller:'HomeCtrl'
        });
        $routeProvider.when('/contacts',
        {
            templateUrl:'views/contacts.html',
            controller:'ContactCtrl'
        });
        $routeProvider.otherwise({
        	redirectTo: '/home'
        });
	});
};