const path = require("path");

module.exports = {
    devServer: {
        contentBase: __dirname, // Raíz del servidor(directorio del proyecto)
        publicPath: '/dist/', // Ruta donde están los bundles generados
        compress: true, // Habilitar compresión gzip
        port: 8080 // Puerto donde ejecutaremos el servidor
    },
    mode: "development",
    devtool: 'source-map',
    context: path.join(__dirname, 'js'),
    entry: {
        index: './index.js',
        "nuevo-evento": "./nuevo-evento.js"
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "all",
                    name: "commons", // Generará commons.bundle.js
                    minChunks: 2, // Mínimo archivos deben importar módulo para que se incluya aquí
                    minSize: 0 // Tamaño mínimo del código compartido para que se genere el trozo
                }
            }
        }
    }

};
