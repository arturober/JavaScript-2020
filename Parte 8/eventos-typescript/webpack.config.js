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
        index: "./index.ts",
        "nuevo-evento": "./nuevo-evento.ts",
        login: "./login.ts",
        register: "./register.ts"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist")
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"] // Así no necesitamos poner la extensión al importar módulos
    },        
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader",
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
