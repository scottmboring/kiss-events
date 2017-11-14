const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/Events.js',
    output: {
        filename: './dist/Events.min.js'
    },
    plugins: [
        new UglifyJSPlugin()
    ]
};