const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    devServer: {
      port: 9000,
      hot: true,
      contentBase: './dist',
      watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env', {
                                targets: {node: 'current'}, // 노드일 경우만
                                modules: 'false'
                            }
                            ],
                        ],
                    },
                }],
                exclude: ['/node_modules', '/bower_components'],
            },
            ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {},
}