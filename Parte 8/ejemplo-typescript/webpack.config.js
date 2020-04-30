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
    context: path.join(__dirname, "src"),
    entry: {
        index: "./index.ts"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist")
    },
    resolve: {
        extensions: [".ts", ".js"] // Así no necesitamos poner la extensión al importar módulos
    },        
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            }
        ]
    }
};
