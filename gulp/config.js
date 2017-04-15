module.exports = {
	src: './resources',
	dist: './assets',
	paths: {
		js: './resources/js/**/*.js',
		jsx: './resources/js/**/*.jsx',
		scss: './resources/scss/**/*.scss',
		//html: './resources/**/*.html',
		svg: './resources/svg/raw/*.svg',
		fonts: './assets/fonts/**/*',
		images: './assets/images/**/*'
	},
	sassPaths: './resources/scss',
	autoprefixerOptions: {
		browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
	},
};