



module.exports = {
    entry: {
        bundle: './src/script.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/build'
    },

    
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      },



}


