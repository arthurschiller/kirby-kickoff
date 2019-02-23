const gulp = require('gulp'),
    config = require('../config.js'),
    modernizr = require('gulp-modernizr')
    
gulp.task('modernizr', function() {
    gulp.src(config.paths.js).pipe(modernizr()).pipe(gulp.dest(config.dist + '/js/vendor/'))
})