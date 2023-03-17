const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: 'https://localhost:8080/src',
        filename: 'bundle.js'
    },

    module: {
        rules: [{
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|woff|woff2|ttf|eot|mp3|m4a|aac)$/,
                use: [{
                    loader: 'file-loader',
                }]
            }
        ]
    },

    Plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}