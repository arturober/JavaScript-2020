const path = require('path');

module.exports = {
    context: path.join(__dirname, './src'),
    devtool: 'source-map',
    entry: {
        index: './index',
        'add-product': './add-product'
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
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.handlebars$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                }],
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial', // Optimize chunks generation
                    name: 'commons', // chunk name
                    minChunks: 2, // How many files import this chunk
                    minSize: 0 // Minimum size of the separated chunk
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};

