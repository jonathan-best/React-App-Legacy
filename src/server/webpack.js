var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require("../../webpack.config.dev");

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    stats: {
      colors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
});

server.listen(8082, "localhost", function() {});
