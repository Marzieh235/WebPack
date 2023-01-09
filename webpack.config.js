



module.exports = {
    entry: {
        admin : './src/admin.js',
        home : './src/home.js',
        logger : './src/logger.js',
    },
    output: {
        filename: '[name].js',
        path : __dirname + '/build'
    }
}