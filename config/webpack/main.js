// The main config for webpack, you probably don't need to edit this.
const webpack = require('webpack');
const path = require('path');
const rules = require('./rules');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('HappyPack');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '8080';

module.exports = {
  mode: 'development',
  entry: { main: './frontend/js/main.js' },
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  output: {
    publicPath: '/assets/build/',
    path: path.join(process.cwd(), 'assets', 'build'),
    filename: '[name].js',
    // Settings to better support source map file paths
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      js: path.join(process.cwd(), 'frontend', 'js'),
      img: path.join(process.cwd(), 'frontend', 'img'),
    },
  },
  module: { rules },
  devServer: {
    contentBase: './frontend',
    // Show our build stats
    noInfo: false,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST,
    watchOptions: {
      poll: 1000,
    },
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  plugins: [
    new HappyPack({
      threads: 4,
      loaders: ['babel-loader?cacheDirectory=true'],
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'frontend/index.html',
      files: {
        js: ['[name].js'],
      },
    }),
  ],
};
