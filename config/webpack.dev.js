const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
  entry: './src/index.js',

  devServer: {
    static: './dist',
    port: 3001,
    hot: true,
    
  },

  plugins: [
    new HtmlWebpackPlugin({
 title: 'Development mode activate',
}),
],


  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },


};