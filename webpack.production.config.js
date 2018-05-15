const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require(
	"optimize-css-assets-webpack-plugin"
);
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssnano = require("cssnano");

module.exports = {
	devtool: 'source-map',
	mode: 'development',
	entry: './src/myapp.js',
	output: {
		path: path.resolve(__dirname, './public/js/'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env'],
					plugins: ["angularjs-annotate"]
				}
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [{
					loader: 'file-loader'
				}]
			},
			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "styles.css",
			chunkFilename: "[id].css"
		})
	],
};