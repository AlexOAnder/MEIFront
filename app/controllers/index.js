module.exports = function(ngModule){
	require('./HomeController.js')(ngModule);
	require('./ContactController.js')(ngModule);
};