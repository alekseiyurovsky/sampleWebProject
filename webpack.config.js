const webpack = require('webpack');
const glob = require("glob");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var scripts = ['./index.js'].concat(glob.sync('./js/**/*.js'));
const extractSass = new ExtractTextPlugin({
    filename: "style.css"
});


module.exports = {
    entry: scripts,
    output: {
        filename: "scripts.js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: false
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            minimize: false
                        }
                    }]
                })
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        extractSass
    ],
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    }
};