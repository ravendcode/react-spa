const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const debug = require('debug')('app:client')

const env = process.env.NODE_ENV || 'development'
const srcDir = './src/client'
const distDir = './dist/client'

const define = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(env)
  }
})

const html = new HtmlWebpackPlugin({
  title: 'React Webpack',
  template: srcDir + '/index.html',
  minify: {
    collapseWhitespace: env === 'production'
  }
})

const extractCss = new ExtractTextPlugin({
  filename: 'bundle.css',
  disable: env === 'development',
  allChunks: true
})

const extractSass = new ExtractTextPlugin({
  filename: 'bundle.css',
  disable: env === 'development',
  allChunks: true
})

const config = {
  entry: ['babel-polyfill', srcDir + '/app/index.js'],
  output: {
    path: path.resolve(__dirname, distDir),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.css$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(gif|png|jpg|ttf|otf|eot|svg|woff|woff2?)(\?.+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000000000000,
          name: 'assets/images/[name].[ext]'
        }
      },
      {
        test: /\.(ico?)(\?.+)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: 'assets/icons/[name].[ext]'
        }
      }
    ]
  },
  devServer: {
    contentBase: srcDir,
    compress: true,
    port: 3000,
    // https: true,
    // proxy: [{
    //   path: '**',
    //   target: 'http://localhost',
    //   secure: false
    // }]
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
