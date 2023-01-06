const path = require("path")
const cwd = process.cwd()
const contentBase = "dist"
module.exports = {
    entry: "/src/index.ts",
    output: {
        filename: "script.js",
        path: path.join(cwd, `/${contentBase}`)
    },
    mode: "development",
    resolve: {
        alias: {
            // lib alias
            "@lib": path.join(cwd, "./lib"),
            "@utils": path.join(cwd, "./lib/utils"),
            "@helpers": path.join(cwd, "./lib/utils.ts"),
            "@components": path.join(cwd, "./lib/components"),
            // source alias
            "@root": path.join(cwd, "./src"),
            "@assets": path.join(cwd, "./src/assets"),
            "@config": path.join(cwd, "./src/config/dev"),
            "@entities": path.join(cwd, "./src/entities"),
            "@screens": path.join(cwd, "./src/screens"),
        },
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|mp3|ogg|wav|cson|bson)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: "assets",
                        esModule: false
                    }
                }
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },        
            // {
            //     test: /.js$/,
            //     exclude: "/node_modules",
            //     use: {
            //         loader: "babel-loader",
            //         options: {
            //             plugins: [ "@babel/plugin-proposal-class-properties" ],
            //             presets: [
            //                 [
            //                     "@babel/preset-env",
            //                     {
            //                         modules: false
            //                     }
            //                 ]
            //             ]
            //         }
            //     }
            // },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            import: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [],
    devtool: "inline-source-map",
    devServer: {
        port: 3000,
        contentBase: `./${contentBase}`
    }
}