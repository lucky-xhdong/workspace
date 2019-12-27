module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        filename: '[name].[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: {
                                    browsers: ['> 1%', 'last 2 versions']
                                    // chrome: '52'
                                }
                            }]
                        ]
                    }
                },
                exclude: '/node_modules/' //过滤不需要被打包的文件
            }
        ]
    }
}