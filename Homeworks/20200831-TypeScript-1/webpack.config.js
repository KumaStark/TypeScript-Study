/*jshint esversion: 6 */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: './src/main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./template/index.html"
        })
    ],

    devServer: {
        // hot:true,
        // hotOnly: true,
        port:8080
    }
};