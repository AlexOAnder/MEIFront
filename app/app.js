require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.min.js');
// Как напоминание о том, как можно его все таки подрубить
require('angular/angular.min.js');
require('angular-route/angular-route.min.js');

let ngModule = angular.module('app', ['ngRoute']);

/*ngModule.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix("1");
}]);*/

require('./routes/routes.js')(ngModule);
require('./css/main.css');
require('./css/style.css');

require('./directives')(ngModule);
require('./controllers')(ngModule);
require('./services')(ngModule);
