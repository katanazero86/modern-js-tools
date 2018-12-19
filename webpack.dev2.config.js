const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/"
    },
    devServer: {
        port: 9000,
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        watchContentBase: true,
        compress: true,
        open: true,
        index: 'index.html',
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