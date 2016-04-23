const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

const sassLoaders = [
  "css-loader?sourceMap",
  "postcss-loader",
  "sass-loader?sourceMap&outputStyle=expanded",
];

module.exports = {
    devtool: 'inline-source-map',
    entry: {
      app: [path.join(__dirname, './src/client/entry'),
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:8082']
    },
    output: {
        path: __dirname + '/public/build',
        filename: "scripts/[name].js",
        publicPath: 'http://localhost:8082/build/',
    },
    resolve: {
      extensions: ['', '.js', '.scss']
    },
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              loaders: ['react-hot', 'babel-loader'],
              exclude: /node_modules/
            },
            {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!"))
            }
        ]
    },
    postcss: [
      autoprefixer({ browsers: ['last 2 versions'] })
    ],
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new ExtractTextPlugin("styles/[name].css"),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
};
