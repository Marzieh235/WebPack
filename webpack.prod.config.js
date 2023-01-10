const path = require('path');
const HtmlWebpackPlugin = require('Html-Webpack-Plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: {
        bundle: './src/script.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    mode :"production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: 'images',
                            outputPath: 'images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },

            {
                test: /\.(woff|woff2|otf|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: 'fonts',
                            outputPath: 'fonts',
                            name: '[name].[ext]'
                        }
                    }
                ]

            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'hello everyOne',
            template: 'index.html'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],

}