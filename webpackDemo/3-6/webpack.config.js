var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'pageA': './src/pageA',
        'pageB': './src/pageB',
        'vendor': ['lodash']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: "./dist/",
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },
    plugins: [
        new webpack.optimize.SplitChunksPlugin({
            async: 'async-common',
            chunks: "all",
            minSize: 20000,
            minChunks: Infinity,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: 'vendor'
        })
    ],
    mode: 'development'
}