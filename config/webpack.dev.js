const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.resolve('src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    chunkFilename: `bundle-[name]-[hash:5].js`
  },
  module: {
    rules: [
      {
				test: /\.(js|jsx)$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				enforce: 'pre',
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true
					}
				}
			},
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
		new HtmlWebpackPlugin({
			alwaysWriteToDisk: true,
			template: 'index.html',
			filename: path.resolve(__dirname, './index.html')
		}),
    new webpack.DefinePlugin({
      __DEBUG__: true,
      __DEV__: true,
      'process.env.NODE_ENV': JSON.stringify('env')
    }),
  ],
  resolveLoader: {
    modules: [
      'node_modules',
    ],
  },
}
