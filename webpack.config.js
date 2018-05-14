const path = require('path');

module.exports = {
	devtool: 'source-map',
	mode: 'development',
	entry: './src/myapp.js',
	output: {
		path: path.resolve(__dirname, './public/js/'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env']
				}
			}
		]
	}
};

// var HtmlWebpackPlugin = require('html-webpack-plugin')
// var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var webpack = require('webpack')
// var path = require('path')

// var isProd = process.env.NODE_ENV === 'production' // true or false
// var cssDev = ['style-loader', 'css-loader', 'sass-loader']
// var cssProd = ExtractTextPlugin.extract({
// 	fallback: 'style-loader',
// 	loader: ['css-loader', 'sass-loader'],
// 	publicPath: '/dist'
// })
// var cssConfig = isProd ? cssProd : cssDev

// module.exports = {
// 	entry: {
// 		app: './src/myapp.js'
// 	},
// 	output: {
// 		path: path.resolve(__dirname, './public/js/'),
// 		filename: 'bundle.js'
// 	},
// 	module: {
// 		rules: [{
// 				enforce: 'pre',
// 				test: /\.js$/,
// 				use: 'eslint-loader',
// 				exclude: /node_modules/
// 			},
// 			{
// 				test: /\.scss$/,
// 				use: cssConfig
// 			},
// 			{
// 				test: /\.js$/,
// 				exclude: /node_modules/,
// 				use: 'babel-loader'
// 			}
// 		]
// 	},
// 	plugins: [
// 		new HtmlWebpackPlugin({
// 			title: 'Project Demo',
// 			hash: true,
// 			template: './public/index.html'
// 		}),
// 		new ExtractTextPlugin({
// 			filename: './public/css/styles.css',
// 			disable: !isProd,
// 			allChunks: true
// 		}),
// 		new webpack.HotModuleReplacementPlugin(),
// 		new webpack.NamedModulesPlugin()
// 	]
// }