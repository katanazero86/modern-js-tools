const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
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
            }],
    },
    plugins: [],
    optimization: {},
}