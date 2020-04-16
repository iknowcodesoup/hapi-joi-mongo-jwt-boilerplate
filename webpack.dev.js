const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  entry: [
    './src/server/app.ts'
  ],
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new Dotenv({
      path: `./.env.development`,
      safe: true
    })
  ]
});