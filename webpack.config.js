'use strict';
// переменная окружения - нужна для управления кодом для прода и дева (в моем случае всегда дев)
//var NODE_ENV = process.env.NODE_ENV || "dev";
// зависимость на вебпак т.к. требуется подключения плагинов из самого вебпака
var webpack = require('webpack');
// нужно для резолва путей т.к. в винде некоторые пути пишутся с \ , а не /
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
//var HtmlWebpackPlugin = require('html-webpack-plugin');

//var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	// отсюда берется папка, от которой будут браться остальные пути
	// т.е. точки входа entry будут искаться от папки app
	context: path.resolve(__dirname + '/app'),

	// точка входа - т.е. откуда собираются js файлы
	entry: {
		index:"./app.js"
	},
	// точка выхода - т.е. куда файлы собираются из точки/точек входа
	// в данном случае - будут найдены все файлы точек входа и созданы соответсвующие им файлы выхода
	output: {
		path: __dirname + "/build",
		filename: "[name].js",
		library: "[name]"
	},
	// параметр, который запускает ватчер на вебпак 
	// т.е. если мы меняем файлы при запуенном webpack 
	// он их автоматом подтянет и создаст новую сборку автоматически
	/*watch: true,
	watchOptions:{
		aggregateTimeout: 300
	},*/

	devtool: "source-map" ,//NODE_ENV === "dev" ? "source-map": null,

	plugins:[
		// не ломаем существующий билд, если произошла ошибка сборки
		new webpack.NoErrorsPlugin(),
		/*// собираем общие зависимости в один файл
		new webpack.optimize.CommonsChunkPlugin({
			name: "common"
		}),*/
		new webpack.ProvidePlugin({
			//angular: "angular/angular.min.js",
			$: "jquery/dist/jquery.min.js",
		    jQuery: "jquery/dist/jquery.min.js",
		   //  "window.jQuery": "jquery/dist/jquery.min.js",
		}),
		// копируем файлы html глобально 
		// (вроде как даже следит за изменениями 
		// и можно просто обновлять браузер)
		new CopyWebpackPlugin([
			{
				from:{
					glob:'./index.html',
					dot: true
				},
				to: './'
			},
			{ 
			from: {
				glob:'./directives/*/*.html',
				dot: true
				},
			to: './' 
			},
			{ 
			from: {
				glob:'./views/*.html',
				dot: true
				},
			to: './' 
			}
		]),

		// создает более менее иллюзию ватчера 
		// за html т.к. меняет файл html в билде
		/*new HtmlWebpackPlugin({
	      template: './index.html'
	    }),*/

		// офигенная штука, что запускает нам сервак и даже ! 
		//следит за изменениями и рефрешит страницу (получается что дважды, но нет - нам надо собирать js/css
		/*// поэтому он только html реагирует сам )
	    new BrowserSyncPlugin({
	      // browse to http://localhost:3000/ during development, 
	      // ./public directory is being served 
	      host: 'localhost',
	      port: 4000,
	      server: { baseDir: ['build'] }
	    })*/
	],
    module: {

    	loaders:[
    		{ test: /\.css$/,loaders: ['style','css']},
			// для бутстрапа пондобилось очень много всего т.к. шрифты и свг так просто не грузятся
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
			{ test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
			{ 
                test: /\.jpg$/, 
                loader: "file-loader" 
            }
	    	,{
	    		test: /\.js$/,
	    		exclude:  /node_modules/,
				// для пресета 2015 нужно дополнительно грузить babelloaderpreset
	    		loader: 'babel-loader?presets[]=es2015'
	    	}
    	],
    	// не парсим либы, которые самостоятельные - ускоряет время сборки
    	noParse: /(angular\/angular|jquery)/
    }
	
};
