const path = require('path');
const HtmlWebpackPlugin = require('Html-Webpack-Plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Notifier = require('./webpack-plugins/Notifier')
const webpack = require('webpack');

const config = {
    entry: {
        bundle: './src/script.js',
        admin: './src/admin.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },

    optimization: {
        splitChunks: {
          // include all types of chunks
          chunks: 'all',
        }
      },

      stats: {
        all: undefined,
      },


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
        new webpack.ProgressPlugin(),
        new Notifier({
            name : 'hello everyOne'
        }),
        new HtmlWebpackPlugin({
            title: 'good morning',
            template: 'index.html',
            filename: 'index.html',
            chunks: 'bundle',
        }),
        new HtmlWebpackPlugin({
            title: 'good night',
            template: 'index.html',
            filename: 'admin.html',
            chunks: 'admin',
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],


}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
      config.devtool = 'source-map';
    }
  
    if (argv.mode === 'production') {
        config.plugins.push(
            new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        )
    }
  
    return config;


    
  };