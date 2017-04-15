var gulp = require('gulp'),
php = require('gulp-connect-php');

gulp.task('php', function() {
	php.server({ base: './', port: 8010});
});