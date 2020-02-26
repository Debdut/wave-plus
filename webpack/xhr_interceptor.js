const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: "development",
  entry: "./src/inject/xhr_interceptor/index.js",
  output: {
    path: path.resolve(__dirname, "..", "dist", "inject"),
    filename: "xhr_interceptor.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
}