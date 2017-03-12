const webpackConfig = require('./webpack.config')

module.exports = function (config) {
  config.set({
    basePath: '',
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    autoWatch: true,
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    frameworks: ['mocha'],
    files: [
      // 'node_modules/jquery/dist/jquery.min.js',
      // 'node_modules/foundation-sites/dist/foundation.min.js',
      'src/client/app/**/*.test.js'
    ],
    preprocessors: {
      'src/client/app/**/*.test.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    port: 9876,
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  })
}
