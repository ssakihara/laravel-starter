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
        extensions: ['.ts', '.tsx', '.json', '.scss'],
        alias: {
            '@': __dirname + '/resources/ts/src',
            '~': __dirname + '/resources/sass',
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                enforce: 'pre',
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
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

mix.react('resources/ts/src/app.tsx', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .version()
    .polyfill({
        enabled: true,
        useBuiltIns: 'usage',
        targets: { firefox: '50', ie: 11 },
    })
