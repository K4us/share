const path = require('path');

const ROOT = path.resolve(__dirname, 'dist');

const kcpUmd = {
    context: ROOT,
    entry: {
        'k4us-share': './index.js'
    },
    output: {
        path: ROOT,
        filename: '[name].umd.js',
        library: {
            name: 'k4usShare',
            type: 'umd',
        },
    },
    mode: 'production',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|ttf|eot|woff(2)?|mp3)(\?[a-z0-9=&.]+)?$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    }
};
const kcpCommonjs = {
    context: ROOT,
    entry: {
        'k4us-share': './index.js'
    },
    output: {
        path: ROOT,
        filename: 'index.js',
        libraryTarget: 'commonjs'
    },
    mode: 'production',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|ttf|eot|woff(2)?|mp3)(\?[a-z0-9=&.]+)?$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    }
};

module.exports = [kcpUmd, kcpCommonjs];

