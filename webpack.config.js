const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  mode: 'development', // Choose 'development' or 'production' mode
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the following rules to JavaScript files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpilation
          options: {
            presets: ['@babel/preset-env'] // Use @babel/preset-env for ES6+ compatibility
          }
        }
      },
      {
        test: /\.css$/, // Apply the following rules to CSS files
        use: ['style-loader', 'css-loader'] // Use style-loader and css-loader to handle CSS
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html' // Use index.html as template for HTMLWebpackPlugin
    })
  ]
};
