const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/index.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Name',
      template: './src/template.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    static: './dist',
    port: 8080,
    open: true,
  },
  output: {
     filename: '[name]_[hash].js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /.svg$/,
        type: 'asset/resource',
      },
      {
        test: /.[sc]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  }
};
