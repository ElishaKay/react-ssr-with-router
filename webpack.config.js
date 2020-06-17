var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

var browserConfig = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
            test: /\.(css)$/,
            include: [/stylesheets/, /node_modules/],
            use: [
              'css-loader',
            ],
      },
      {
            test: /\.css$/,
            exclude: [/stylesheets/, /node_modules/],
            use: [
              'css-loader?sourceMap&modules,localIdentName=[local]-[hash:base64]',
            ],
      },
    ]
  },
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}

var serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
            test: /\.(css)$/,
            include: [/stylesheets/, /node_modules/],
            use: [
              'css-loader',
            ],
      },
      {
            test: /\.css$/,
            exclude: [/stylesheets/, /node_modules/],
            use: [
              'css-loader?sourceMap&modules,localIdentName=[local]-[hash:base64]',
            ],
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]