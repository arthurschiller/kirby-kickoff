const gulp = require('gulp'),
config = require('../config.js'),
svgSprite = require('gulp-svg-sprite')

const svgSpriteConfig = {
	mode: {
		symbol: {
			dest: '',
			sprite: 'svg_spritesheet.svg'
		}
	}
}

gulp.task('svg', function () {
	return gulp.src(config.paths.svg)
	.pipe(svgSprite(svgSpriteConfig))
	.pipe(gulp.dest(config.src + '/svg'))
})