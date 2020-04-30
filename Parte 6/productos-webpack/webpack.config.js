const path = require('path');

module.exports = {
    context: path.join(__dirname, './src'),
    entry: {
        index: './index.js',
        'add-product': './add-product.js'
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
    module: {
        rules: [
            {
                test: /\.handlebars$/,
                loader: 'handlebars-loader'
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

