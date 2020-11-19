const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const IS_PROD = process.env.NODE_ENV === 'production';
const SOURCE_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'build');

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? 'none' : 'eval-source-map',
  entry: './src/index.js',
  output: {
    path: OUTPUT_DIR,
    publicPath: '/',
    filename: 'js/[name].[hash:7].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts']
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          IS_PROD ? MiniCssExtractPlugin.loader : {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag',
            }
          }, {
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader',
          }, {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [SOURCE_DIR]
              }
            }
          }
        ]
      }, {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }, {
        test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
        use: IS_PROD ? {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        } : {
          loader: 'url-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React App',
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:7].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/api/*.json',
          to: 'api/',
          flatten: true,
        }
      ]
    })
  ],
  devServer: {
    hot: true,
    compress: true,
    contentBase: SOURCE_DIR,
    historyApiFallback: true,
    port: 3000,
    host: 'localhost'
  }
};