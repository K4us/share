const path = require('path');

const ROOT = path.resolve(__dirname, 'dist');

const umd = {
    context: ROOT,
    entry: {
        'k4us-share': './khmerChessPieces.js'
    },
    output: {
        path: ROOT,
        filename: '[name].umd.js',
        library: {
            name: 'khmerChessPieces',
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
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    }
};
const commonjs = {
    context: ROOT,
    entry: {
        'k4us-share': './khmerChessPieces.js'
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
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    }
};

module.exports = [umd, commonjs];

