const path = require('path');
const HtmlWebpackPlugin = require('Html-Webpack-Plugin');

module.exports = {
    entry: {
        bundle: './src/script.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    mode: "development",
   
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
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
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'hello everyOne',
            template: 'index.html'
        }),
    ],

}