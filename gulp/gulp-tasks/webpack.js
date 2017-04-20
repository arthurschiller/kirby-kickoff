var gulp = require('gulp'),
config = require('../config.js'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
sourcemaps = require('gulp-sourcemaps'),
gutil = require("gulp-util"),
webpack = require("webpack"),
webpackConfig = require("../../webpack.config.js"),
uglify = require('gulp-uglify'),
stream = require('webpack-stream');

gulp.task('webpack', function() {
	return gulp.src([config.paths.js, config.paths.jsx])
	.pipe(stream(webpackConfig))
	.pipe(sourcemaps.init())
		.pipe(gulp.dest(config.dist + '/js'))
		.pipe(uglify({
			preserveComments: 'license'
		}))
		.pipe(rename({suffix: '.min'}))
	.pipe(sourcemaps.write('maps'))
	.pipe(gulp.dest(config.dist + '/js'))
	.pipe(browserSync.reload({
		stream: true
	}))
});