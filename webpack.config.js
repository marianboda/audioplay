module.exports = {
  entry: {
    javascript: "./src/index.js",
    html: "./src/static/index.html",
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + "/app",
    publicPath: 'http://localhost:8080/app',
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"]},
      {test: /\.html$/, loader: "file?name=[name].[ext]"},
      {test: /\.sass$/, loader: "style!css!sass?indentedSyntax=sass"},
    ]
  }
}
