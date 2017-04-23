var gulp = require('gulp'),
config = require('../config.js'),
php = require('gulp-connect-php')

gulp.task('php', function() {

	if (config.settings.useCustomProxy) {
		console.log('Using custom proxy server..')
		return
	}

	console.log('Starting regular PHP server.')
	php.server({ base: './', port: config.devServer.phpServerPort})
});