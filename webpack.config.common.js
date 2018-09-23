const path = require('path');

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties'
          ]
        }
      }
    }, {
      test: /\.(png|jpg|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {}
      }]
    }]
  }
};
