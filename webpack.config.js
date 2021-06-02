const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const outputPath = path.resolve(__dirname, "dist")

exports.outputPath = outputPath

module.exports = () => {

    // const tsRule = {
    //     test: /\.(ts|tsx)$/,
    //     use: [
    //         {
    //             loader: "babel-loader",
    //             options: {
    //                 "presets": [
    //                     "@babel/preset-env",
    //                     [
    //                         "@babel/preset-typescript",
    //                         {
    //                             isTSX: true,
    //                             allExtensions: true,
    //                         },
    //                     ],
    //                 ],
    //                 "plugins": [
    //                     [
    //                         "@babel/plugin-transform-react-jsx",
    //                         {
    //                             "runtime": "automatic",
    //                             "importSource": "preact",
    //                         },
    //                     ],
    //                 ],
    //             },
    //         },
    //     ],
    // }

    return {
        entry: "./src/CustomHeader.tsx",
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "build.js",
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                "presets": [
                                    "@babel/preset-env",
                                    [
                                        "@babel/preset-typescript",
                                        {
                                            isTSX: true,
                                            allExtensions: true,
                                        },
                                    ],
                                ],
                                "plugins": [
                                    [
                                        "@babel/plugin-transform-react-jsx",
                                        {
                                            "runtime": "automatic",
                                            "importSource": "preact",
                                        },
                                    ],
                                ],
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            modules: [
                "node_modules"
            ],
        },
        plugins: [
            new HtmlWebpackPlugin(
                {
                    template: "./src/index.html"
                },
            ),
        ],
    }
}
