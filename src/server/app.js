import path from 'path'
// import http from 'http'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import i18n from 'i18n'
import favicon from 'serve-favicon'
import compression from 'compression'
import cors from 'cors'
import * as config from './config'
// import db from './databases/connections/mongoose'
import routes from './routes'

const app = express()

app.use(compression())
app.use(cors())

if (config.env === 'development') {
  app.use(morgan('dev'))

  // // redirect http server
  // app.all('*', function (req, res, next) {
  //   if (req.secure) {
  //     return next()
  //   }
  //   res.redirect('https://' + req.hostname + ':' + config.httpsPort + req.url)
  // })
  // http.createServer(app).listen(config.httpPort)

  // Seeds
}

i18n.configure({
  locales: ['en', 'ru'],
  defaultLocale: config.locale,
  directory: path.join(__dirname, 'locales'),
  queryParameter: 'lang',
  register: global
})

app.use(i18n.init)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.static(config.distClientDir))
app.use(favicon(config.distClientDir + '/assets/icons/favicon.ico'))
// Middlewares
app.use((req, res, next) => {
  // req.db = db

  app.locals.app = {
    env: config.env,
    httpPort: config.httpPort,
    httpsPort: config.httpsPort,
    host: config.host,
    locale: res.getLocale()
  }

  next()
})

// app.use(require('./middlewares/log.middleware').default)

// Routes
routes(app)

// if (config.env === 'development') {
//   app.get('*', (req, res, next) => {
//     res.sendFile(config.distClientDir + '/index.html')
//   })
// }

app.get('*', (req, res, next) => {
  res.sendFile(config.distClientDir + '/index.html')
})

// Catch 404 and forward to error handler
// app.use((req, res, next) => {
//   var err = new Error(req.__('error.not found'))
//   err.status = 404
//   next(err)
// })

// Error handler
app.use((err, req, res, next) => {
  let message = err.message
  let status = err.status || 500
  let error = {
    message,
    status
  }
  if (config.env === 'development' && status !== 404) {
    error.stack = err.stack
  }
  res.status(status).send({
    error
  })
})

export default app
