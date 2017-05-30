//надо добавлять, если охота юзать jquery из консоли
// по сути - дебажная фигня, но нужная
window.$ = jQuery;
let welcome = require('./welcome');
    $("body").attr("style","padding:200px");
welcome('about');