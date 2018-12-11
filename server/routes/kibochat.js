// Will only contain routes for KiboChat

module.exports = function (app) {
  // API middlewares go here
  app.use('/api/v1/test', require('./../api/v1/kibochat/test'))
  app.use('/api/v1/livechat', require('./../api/v1/kibochat/livechat'))
  app.use('/api/v1/notifications', require('./../api/v1/kibochat/notifications'))
  app.use('/api/v1/smart_replies', require('./../api/v1/kibochat/smart_replies'))
  app.use('/api/v1/sessions', require('./../api/v1/kibochat/sessions'))
  app.use('/api/v1/scripts', require('./api/v1/scripts'))

  // auth middleware go here if you authenticate on same server
  // app.use('/auth', require('./auth'))

  app.route('/:url(api|auth)/*').get((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`})
  }).post((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`})
  })

  // app.route('/*').get((req, res) => {
  //   res.redirect('/')
  // }).post((req, res) => {
  //   res.redirect('/')
  // })
}
