const path = require('path');

module.exports = {
    entry: './app/main.jsx',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react'],
                    plugins: [require('babel-plugin-transform-object-rest-spread')]
                }
            }
        }, {
            test: /\.(png|jpg|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {}
                }
            ]
        }]
    }
};
