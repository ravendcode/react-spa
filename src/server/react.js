import fs from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import reactRoutes from '../client/app/routes'
import * as config from './config'

module.exports = (app) => {
  app.get('*', (req, res, next) => {
    match({ routes: reactRoutes, location: req.url }, (err, redirect, props) => {
      if (err) {
        return next(err)
      } else if (redirect) {
        res.redirect(redirect.pathname + redirect.search)
      } else if (props) {
        const appHtml = renderToString(<RouterContext {...props} />)
        renderPage(appHtml).then((data) => {
          res.send(data)
        }).catch((e) => next(e))
      } else {
        // no errors, no redirect, we just didn't match anything
        res.status(404).send('Not Found')
      }
    })
  })
}

function renderPage(appHtml) {
  return new Promise((resolve, reject) => {
    fs.readFile(config.distClientDir + '/index.html', 'utf8', (err, contents) => {
      if (err) {
        reject(err)
      } else {
        let result = contents.replace(/<div id="app"><\/div>/, `<div id="app">${appHtml}</div>`)
        resolve(result)
      }
    })
  })
}
