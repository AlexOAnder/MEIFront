//let angular = require('angular');
//надо добавлять, если охота юзать jquery из консоли
// по сути - дебажная фигня, но нужная
window.$ = jQuery;
let welcome = require('./welcome');
//angular.module('dfsd', []);
$("option").html( "Next Step..." );
welcome('home');
// экспортируем вывод welcome, что благодаря library:[name] в конфиге, позволяет достучаться до кода 
// используя home.welcome("someWord")
exports.welcome = welcome;