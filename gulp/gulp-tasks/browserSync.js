const gulp = require('gulp'),
config = require('../config.js'),
gulpif = require('gulp-if'),
browserSync = require('browser-sync')

gulp.task('browserSync', ['php'], function(){
	browserSync({
		proxy: config.settings.useCustomProxy ? config.devServer.customProxy : config.devServer.phpProxy,
		port: config.devServer.browserSyncPort,
		notify: false,
		open: true,
        snippetOptions: {
        	ignorePaths: ["./panel/**"]
        },
	})
})