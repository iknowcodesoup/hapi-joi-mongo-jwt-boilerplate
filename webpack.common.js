const path = require('path');
const nodeExternals = require('webpack-node-externals');
require('dotenv').config();

module.exports = {
  entry: './src/server/app.ts',
  node: {
    fs: "empty"
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  }
};