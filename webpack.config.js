const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: `./src/pages/index.jsx`,

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                loader: 'babel',
                include: [
                    path.join(__dirname, 'src')
                ],
                query: { presets: ['latest', 'react', 'stage-2'] },
            },
            { 
                test: /\.pug$/, 
                loader: 'pug' 
            },
            { 
                test: /\.(css|styl)/, 
                loader: ExtractTextPlugin.extract('css!stylus') 
            },
        ]
    },

  plugins: [
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new HtmlWebpackPlugin({ 
        template: `${__dirname}/src/pages/index.pug`, 
        filename: 'index.html', 
        chunks: ['main'] 
    }) 
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  devtool: 'cheap-inline-module-source-map',

  watch: true,

  devServer: {
    contentBase: `./build`, 
    headers: { 'Access-Control-Allow-Origin': '*' }
  },

};