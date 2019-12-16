const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackMd5HashPlugin = require('webpack-md5-hash');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry : {
    app : './src/scripts/app.js',
  },
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : "[name].[chunkhash].bundle.js",
  },
  devServer : {
    port : 3000,
  },
  plugins : [
    // new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      filetype : 'pug',
      template : './src/pug/index.pug',
      hash : true,
    }),
    new WebpackMd5HashPlugin(),
    new MiniCssExtractPlugin({
      filename : 'style.[contenthash].css',
    }),
  ],
  target : 'node',
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        use : {
          loader : 'babel-loader',
        },
      },
      {
        test : /\.pug$/,
        use : [ 'pug-loader' ],
      },
      {
        test : /\.less$/,
        use : [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader' ],
      },
    ],
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
  }
  return config;
}
