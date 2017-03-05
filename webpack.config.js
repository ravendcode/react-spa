const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const debug = require('debug')('app:client')

const env = process.env.NODE_ENV || 'development'
const srcDir = './client'
const distDir = './public'

const define = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(env)
  }
})

const html = new HtmlWebpackPlugin({
  title: 'Start SPA React',
  template: srcDir + '/index.html',
  minify: {
    collapseWhitespace: env === 'production'
  }
})

const extractCss = new ExtractTextPlugin({
  filename: 'styles.css',
  disable: env === 'development',
  allChunks: true
})

const extractSass = new ExtractTextPlugin({
  filename: 'styles.css',
  disable: env === 'development',
  allChunks: true
})

const config = {
  entry: ['babel-polyfill', srcDir + '/index.js'],
  output: {
    path: path.resolve(__dirname, distDir),
    filename: 'scripts.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.(js|jsx)$/,
      use: ['babel-loader']
    }, {
      test: /\.css$/,
      use: extractSass.extract({
        fallback: 'style-loader',
        use: ['css-loader']
      })
    }, {
      test: /\.scss$/,
      use: extractSass.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, distDir),
    compress: true,
    port: 3000,
    https: true,
    proxy: [{
      path: '**',
      target: 'https://localhost',
      secure: false
    }]
  },
  plugins: [
    define,
    html,
    extractCss,
    extractSass,
  ]
}

if (env === 'production') {
  console.log(chalk.yellow(`env is ${env}`))
}

debug('env is ' + env)

module.exports = config
