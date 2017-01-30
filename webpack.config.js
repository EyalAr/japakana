var webpack = require("webpack"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require("path");

var DEV = process.env.NODE_ENV === "development"

var cssLoaderOptions = "?modules";
var plugins = [];

plugins.push(new webpack.DefinePlugin({
  __DEV__: DEV,
  "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
}));

plugins.push(new HtmlWebpackPlugin({
  title: "Kana Practice",
  filename: "index.html",
  template: "./src/index.tpl"
}))

if (DEV) {
  plugins.push(new webpack.SourceMapDevToolPlugin(
    "[file].map", null, "../[resource-path]", "../[resource-path]"
  ));
  cssLoaderOptions += "&localIdentName=[local]_[hash:base64:5]"
}

module.exports = {
  entry: "./src/index.js",
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader" + cssLoaderOptions,
      exclude: [/flexboxgrid/, /material-design-icons/]
    }, {
      test: [/flexboxgrid\.css$/, /material-design-icons.*\.css$/],
      loader: "style-loader!css-loader"
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg).*$/,
      loader: "url-loader?limit=1000000"
    }, {
      test: /\.json$/,
      loader: "json-loader"
    }, {
      test: /\.less$/,
      loader: "style-loader!css-loader" + cssLoaderOptions + "!less-loader"
    }]
  },
  output: {
    path: "build",
    filename: "[name].[chunkhash].js"
  },
  plugins: plugins
};
