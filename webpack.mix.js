const mix = require('laravel-mix')

require('laravel-mix-polyfill')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue', '.json', '.scss'],
        alias: {
            '@': __dirname + '/resources/js',
            '~': __dirname + '/resources/sass',
        },
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
                test: /\.(js|vue)?$/,
                options: {
                    fix: true,
                },
            },
        ],
    },
})
mix.options({
    terser: {
        terserOptions: {
            compress: {
                drop_console: true,
            },
        },
    },
})
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .version()
    .polyfill({
        enabled: true,
        useBuiltIns: 'usage',
        targets: { firefox: '50', ie: 11 },
    })
