/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");

const env = dotenv.config().parsed || {};
console.debug(env)
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});


module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    port: 3000
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      }

    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    
new HtmlWebpackPlugin({
    template: "./public/index.html"
  }),
    new webpack.DefinePlugin(envKeys)

  ]
};