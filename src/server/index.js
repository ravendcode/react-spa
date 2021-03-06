require('babel-register')
require('babel-polyfill')

const http = require('http')
// const https = require('https')
const debug = require('debug')('app:server')
const app = require('./app').default
const config = require('./config')

// console.log(config.env)
// if (config.env === 'production') {
//   require('./react')(app)
// }

let port = config.httpPort
let server = http.createServer(app)

// if (config.env === 'development') {
//   port = config.httpsPort
//   server = https.createServer(config.httpsOptions, app)
// }

app.set('port', port)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

// const io = require('socket.io')(server)
// require('../socket')(io)

/**
 * Event listener for HTTP server 'error' event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server 'listening' event.
 */
function onListening() {
  debug(`env is ${config.env}`)
  var addr = server.address()
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  // debug('http redirect server listening on ' + config.httpPort)
  debug('http server listening on ' + bind)
}
