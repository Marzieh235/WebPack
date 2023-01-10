const path = require('path')

module.exports = {
    entry : {
        bundle : './src/script.js'
    },
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname,'build'),
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ['style-loader' , 'css-loader']
            },
            {
                test : /\.s[ac]ss$/,
                use : ['style-loader' , 'css-loader' , 'sass-loader']
            },
            {
                test : /\.(png|jpe?g|gif)$/,
                use : [
                   {
                       loader : 'file-loader',
                       options : {
                           publicPath : 'build/images',
                           outputPath : 'images',
                           name : '[name].[ext]'
                       }
                   } 
                ]
            },

            {
              test : /\.(woff|woff2|otf|ttf|eot)$/ ,
              use : [
                {
                    loader : 'file-loader',
                    options : {
                        publicPath : 'build/fonts',
                        outputPath : 'fonts',
                        name : '[name].[ext]'
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
    }
}