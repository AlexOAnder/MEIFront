module.exports = function (ngModule) {
	ngModule.directive('helloWorld', helloWorldFn);
	function helloWorldFn() {
		// Runs during compile
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			restrict: 'E', //= Element,
			templateUrl: 'directives/hello-world/hello-world.html',
			controllerAs: 'vm',
			controller: function () {
				let vm = this;

				vm.greeting = [1, 3, 5, 2].map(x => x * 2).reduce((sum, cur) => sum + cur);

				function makeCounter() {
					var currentCount = 1;

					return function () {
						return currentCount++;
					};
				};
				var buttons = document.getElementsByClassName('ss1');
				var clicker = function () {
					var value = this.counter();
					console.log(this.defaultValue + " - " + value);
				};

				for (var i=0;i<buttons.length;i++)
				{
					buttons[i].counter = makeCounter();
					buttons[i].onclick = function(e){clicker.apply(this);};
				}
				
				
				
			}
		};
	}
};