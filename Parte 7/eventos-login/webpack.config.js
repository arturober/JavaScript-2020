/* eslint-disable no-undef */
const path = require("path");

module.exports = {
    devServer: {
        contentBase: __dirname, // Raíz del servidor(directorio del proyecto)
        publicPath: "/dist/", // Ruta donde están los bundles generados
        compress: true, // Habilitar compresión gzip
        port: 8080 // Puerto donde ejecutaremos el servidor
    },
    mode: "development",
    devtool: "source-map",
    context: path.join(__dirname, "js"),
    entry: {
        index: "./index.js",
        "nuevo-evento": "./nuevo-evento.js",
        login: "./login.js",
        register: "./register.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist")
    }, // Genera dist/bundle.js (incluye este archivo en tu HTML)
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: "babel-loader",
                    options: { presets: ["@babel/env"] },
                }],
            },
            { 
                test: /\.handlebars$/, 
                loader: "handlebars-loader" 
            }
        ]
    },        
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "all",
                    name: "commons",
                    minChunks: 2, // Cuantos archivos (mínimo) deben importar el módulo para que se incluya en este archivo
                    minSize: 0 // Tamaño mínimo del código compartido para que genere el chunk
                },
                vendors: { // Esto generará vendors.bundle.js
                    test: /[\\/]node_modules[\\/]/, // sólo código dentro de node_modules
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
};
