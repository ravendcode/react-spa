const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const debug = require('debug')('app:server')

const env = process.env.NODE_ENV || 'development'
const srcDir = './src/server'
const distDir = './dist/server'

const config = {
  entry: [srcDir + '/index.js'],
  target: 'node',
  output: {
    path: path.resolve(__dirname, distDir),
    filename: 'bundle.js'
  },
  externals: fs.readdirSync('node_modules')
    .reduce(function (acc, mod) {
      if (mod === '.bin') {
        return acc
      }

      acc[mod] = 'commonjs ' + mod
      return acc
    }, {}),
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      },
      // {
      //   test: /\.(gif|png|jpg|ttf|otf|eot|svg|woff|woff2?)(\?.+)?$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10000000000000,
      //     name: 'assets/images/[name].[ext]'
      //   }
      // },
      // {
      //   test: /\.(ico?)(\?.+)?$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10000000000000,
      //     name: 'assets/icons/[name].[ext]'
      //   }
      // }
    ]
  },
  plugins: [
  ]
}

if (env === 'production') {
  console.log(chalk.yellow(`env is ${env}`))
}

debug('env is ' + env)

module.exports = config
