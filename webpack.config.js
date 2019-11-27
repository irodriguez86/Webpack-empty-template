var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var MiniCSSExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "src/css/main.css",
            chunkFilename: 'main.css'
        }),
        new HtmlWebpackPlugin({
            title: 'Your awesome template',
            // Load a custom template (lodash by default)
            template: 'src/html/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    }
};
