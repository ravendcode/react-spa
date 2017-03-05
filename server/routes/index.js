
export default (app) => {
  app.use('/', require('./index.route').default)
}
