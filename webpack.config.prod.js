// const webpack = require('webpack');
const merge = require('webpack-merge');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.common.js');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');


// const extractSass = new ExtractTextPlugin({
//   filename: '[name].css',
//   ignoreOrder: true   /* Disables order check (useful for CSS Modules!) */
// });

module.exports = merge(common, {
  module: {
    rules: [{
      test: /\.scss$/,
      // use: extractSass.extract({
      //   use: [{
      //     loader: 'css-loader',
      //     options: {
      //       camelCase: true,
      //       modules: true
      //     }
      //   }, {
      //     loader: 'sass-loader'
      //   }]
      // })
    }]
  },
  // plugins: [
  //   extractSass,
  //   new UglifyJSPlugin({ sourceMap: true }),
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: JSON.stringify('production')
  //     }
  //   })
  // ]
});
