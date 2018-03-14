'use strict';

var autoprefixer = require('autoprefixer');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/app.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: path.resolve(__dirname, './dist'),
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'node_modules/@HiFiSamurai/ui-toolkit'),
            ],
            use: [{
                loader: 'babel-loader',
                options: { cacheDirectory: true },
            }],
        }, {
            test: /\.html$/,
            loader: 'html-loader',
        }, {
            test: /\.s*css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer('last 2 versions')],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve(__dirname, './node_modules')],
                        },
                    },
                ],
            }),
        }, {
            test: /\.svg$/,
            use: [{
                loader: 'svg-sprite-loader',
                options: { name: 'icon-[name]' },
            }],
        }],
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
    ],
    resolve: {
        modules: [__dirname, 'node_modules'],
    },
};
