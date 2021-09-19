const path = require('path');

const ROOT = path.resolve(__dirname, 'dist');

module.exports = {
    context: ROOT,

    entry: {
        'k4us-share': './index.js'
    },

    output: {
        path: ROOT,
        filename: '[name].bundle.js',
        libraryTarget: 'umd'
    },

    mode: 'production',
    devtool: 'source-map',

    resolve: {
        extensions: ['.js'],
    },

    module: {
        rules: [
            /****************
            * LOADERS
            *****************/
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    }
};

