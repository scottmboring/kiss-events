let path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        "kiss-events": './src/main/javascript/index.js',
        "kiss-events.min": './src/main/javascript/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'kissEvents',
        libraryTarget: 'umd'
    },
    plugins: [
        new UglifyJSPlugin({
            test: /\.min\.js$/
        })
    ]
};