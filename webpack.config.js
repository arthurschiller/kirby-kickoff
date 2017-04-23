var path = require('path'),
webpack = require('webpack');

function fromRootDir(matchPath) {
	return new RegExp(process.cwd() + matchPath);
}

module.exports = {
	context: path.resolve(__dirname, './resources/js'),
	entry: {
		main: './main.js',
	},
	output: {
		path: path.resolve(__dirname, './assets/js'),
		filename: './bundle.js'
	},
	resolve: {
		extensions: ['.js', '.json', '.coffee']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules|bower_components/],
				loader: 'eslint-loader'
			},
			{
				test: /\.js$/,
				exclude: [/node_modules|bower_components/],
				loader: 'babel-loader',
				options: { presets: ['es2015'] }
			},
		]
	}
}