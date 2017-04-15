var gulp = require('gulp'),
config = require('../config.js'),
browserSync = require('browser-sync');

gulp.task('browserSync', ['php'], function(){
	browserSync({
		proxy: '127.0.0.1:8010',
		port: 8080,
		notify: false,
		open: true,
        snippetOptions: {
          ignorePaths: ["./panel/**"]
        },
	})
})