var webpack = require("webpack"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require("path");

var DEV = process.env.NODE_ENV === "development"

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

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader"
      }]
    }, {
      test: /\.css$/,
      exclude: [/flexboxgrid/, /material-design-icons/],
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          modules: true,
          localIdentName: DEV ? "[local]_[hash:base64:5]" : "[hash:base64:10]"
        }
      }]
    }, {
      test: [/flexboxgrid\.css$/, /material-design-icons.*\.css$/],
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }]
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg).*$/,
      use: [{
        loader: "url-loader",
        options: {
          limit: 1000000
        }
      }]
    }, {
      test: /\.less$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          modules: true,
          localIdentName: DEV ? "[local]_[hash:base64:5]" : "[hash:base64:10]"
        }
      }, {
        loader: "less-loader"
      }]
    }]
  },
  output: {
    path: "build",
    filename: "[name].[chunkhash].js"
  },
  devtool: DEV ? "inline-source-map" : "nosources-source-map",
  plugins: plugins
};
