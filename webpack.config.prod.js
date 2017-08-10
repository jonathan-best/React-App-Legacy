const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: '../build/styles/[name].css',
});

module.exports = {
    devtool: 'inline-source-map',
    entry: {
      app: path.join(__dirname, './src/client/entry')
    },
    output: {
        path: __dirname + '/public/build/',
        filename: "scripts/[name].js",
        publicPath: '/build/',
    },
    resolve: {
      extensions: ['.js', '.scss']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.css$|\.scss$/,
          loader: extractSass.extract({
            fallback: "style-loader",
            use: [
              { loader: 'css-loader' },
              { loader: 'postcss-loader' },
              { loader: 'sass-loader', options: {} }
            ]
          })
        }
      ]
    },
    plugins: [
      extractSass,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.EnvironmentPlugin(['NODE_ENV'])
    ]
};
