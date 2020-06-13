const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            // style and css loader
            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },

                ]
            }
        ]
    },
    // plugins
    plugins: [
        // html webpack plugin
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: "index.html"
        })
    ]
}