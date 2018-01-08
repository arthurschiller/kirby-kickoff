module.exports = {
    settings: {
        useCustomProxy: false
    },
    devServer: {
        browserSyncPort: 8080,
        phpServerPort: 8010,
        phpProxy: '127.0.0.1:8010',
        customProxy: '127.0.0.1',
    },
    src: './resources',
    dist: './assets',
    paths: {
        js: './resources/js/**/*.js',
        jsx: './resources/js/**/*.jsx',
        scss: './resources/scss/**/*.scss',
        svg: './resources/svg/raw/*.svg',
        fonts: './assets/fonts/**/*',
        images: './assets/images/**/*'
    },
    sassPaths: './resources/scss',
    autoprefixerOptions: {
        browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    },
}