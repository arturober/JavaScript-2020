const path = require('path');

module.exports = {
    context: path.join(__dirname, './src'),
    entry: {
        index: './index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname + '/dist')
    },
    devServer: {
        contentBase: __dirname,
        publicPath: '/dist/',
        compress: true,
        port: 8080,
        open: 'google-chrome'
    }
};

