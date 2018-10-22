// Will only contain routes for KiboEngage

module.exports = function (app) {
  // API middlewares go here
  app.use('/api/v1/test', require('../api/v1/kiboengage/test'))
  app.use('/api/v1/automation_queue', require('./../api/v1/kiboengage/automation_queue'))
  app.use('/api/v1/autoposting', require('./../api/v1/kiboengage/autoposting'))
  app.use('/api/v1/page_broadcast', require('./../api/v1/kiboengage/page_broadcast'))
  app.use('/api/v1/page_poll', require('./../api/v1/kiboengage/page_poll'))
  app.use('/api/v1/page_survey', require('./../api/v1/kiboengage/page_survey'))
  app.use('/api/v1/pageadminsubscriptions', require('./../api/v1/kiboengage/pageadminsubscriptions'))
  app.use('/api/v1/polls', require('./../api/v1/kiboengage/polls'))
  app.use('/api/v1/surveys', require('./../api/v1/kiboengage/surveys'))
  app.use('/api/v1/sequence_messaging', require('./../api/v1/kiboengage/sequence_messaging'))
  app.use('/api/v1/sequence_subscribers', require('./../api/v1/kiboengage/sequence_subscribers'))

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
