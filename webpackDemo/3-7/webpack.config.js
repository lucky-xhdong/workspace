var path = require('path');
module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "./dist/",
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            // insertInto: '#app',
                            singleton: true,
                            transform: './css.transform.js'
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            minmize: true,
                            modules: true,
                            localIdentName: '[path][name]_[local]_[hash:5]'
                        }
                    }
                ]
            }
        ]
    },
    mode: 'none'
}