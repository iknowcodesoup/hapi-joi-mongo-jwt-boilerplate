const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
//const webpack = require('webpack');

module.exports = merge(common, {
  entry: [
    //'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
    //'./src/server/app.dev.ts'
   // './src/server/app.test.js'
    './src/server/app.ts'
  ],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: `./.env.development`,
      safe: true
    })
  ]
});