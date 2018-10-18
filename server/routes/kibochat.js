// Will only contain routes for KiboChat

module.exports = function (app) {
  // API middlewares go here
  app.use('/api/v1/test', require('./../api/v1/kibochat/test'))

  // auth middleware go here if you authenticate on same server
  // app.use('/auth', require('./auth'))

  app.route('/:url(api|auth)/*').get((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`})
  }).post((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`})
  })

  app.route('/*').get((req, res) => {
    res.redirect('/')
  }).post((req, res) => {
    res.redirect('/')
  })
}
