const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	stats: {
		colors: true
	}
};