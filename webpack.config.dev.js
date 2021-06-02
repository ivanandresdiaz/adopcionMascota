const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename:'[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
    publicPath: '/'
  },
  mode:'development',
  devtool:'source-map',
  resolve: {
    extensions:['.js']
  },
  module:{
    rules:[
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
        }
      },
      {
        test: /\.s[ac]ss$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type:'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject:true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css'
    })
  ],
  devServer:{
    open:true,
    contentBase: path.join(__dirname, 'dist'),
    compress:true,
    historyApiFallback:true,
    port: 3006,
  }
}