const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: "development",
  entry: "./src/content/inject/index.js",
  output: {
    path: path.resolve(__dirname, "..", "dist", "content"),
    filename: "inject.js"
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
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {loader: 'html-loader'}
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['to-string-loader', 'css-loader'],
      },
    ]
  }
}