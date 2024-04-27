const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'production',
  entry: './src/index.js',

  devServer: {
    static: './dist',
    port: 3001,
    
  },

  plugins: [
    new HtmlWebpackPlugin({
 title: 'Production',
}),
],


  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },


};