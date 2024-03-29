const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_module/,
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }    
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [  
    /*
    local 확인 => HtmlWebpackPlugin On, CopyWebpackPlugin Off
    Extension 확인 => HtmlWebpackPlugin Off, CopyWebpackPlugin On
    */
    // new HtmlWebpackPlugin({
    //   template: './public/index.html',
    // }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns:[
        { from: './public/background.js', to: './' },
        { from: './public/manifest.json', to: './' },
        { from: './public/root.css', to: './' },
				{ from: './public/icon.png', to: './'},
      ]
    })
  ],
  optimization: {
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    host: 'localhost',
    overlay: true,
    port: 8080,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: true,
  },
};