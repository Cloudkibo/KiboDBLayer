// Will only contain routes for KiboEngage

const config = require('../config/environment/index')
const Sentry = require('@sentry/node')
const logger = require('../../server/components/logger')
const TAG = '/server/routes/kiboengage.js'

module.exports = function (app) {
  // API middlewares go here
  app.use('/api/v1/test', require('../api/v1/kiboengage/test'))
  app.use('/api/v1/automation_queue', require('./../api/v1/kiboengage/automation_queue'))
  app.use('/api/v1/autoposting', require('./../api/v1/kiboengage/autoposting'))
  app.use('/api/v1/tweets_queue', require('./../api/v1/kiboengage/tweets_queue'))
  app.use('/api/v1/page_broadcast', require('./../api/v1/kiboengage/page_broadcast'))
  app.use('/api/v1/page_poll', require('./../api/v1/kiboengage/page_poll'))
  app.use('/api/v1/page_survey', require('./../api/v1/kiboengage/page_survey'))
  app.use('/api/v1/pageadminsubscriptions', require('./../api/v1/kiboengage/pageadminsubscriptions'))
  app.use('/api/v1/polls', require('./../api/v1/kiboengage/polls'))
  app.use('/api/v1/surveys', require('./../api/v1/kiboengage/surveys'))
  app.use('/api/v1/sequence_messaging', require('./../api/v1/kiboengage/sequence_messaging'))
  app.use('/api/v1/sequence_subscribers', require('./../api/v1/kiboengage/sequence_subscribers'))
  app.use('/api/v1/sequence_message_queue', require('./../api/v1/kiboengage/sequence_message_queue'))
  app.use('/api/v1/broadcasts', require('./../api/v1/kiboengage/broadcasts'))
  app.use('/api/v1/smsBroadcasts', require('./../api/v1/kiboengage/smsBroadcasts'))
  app.use('/api/v1/autoposting_messages', require('./../api/v1/kiboengage/autoposting_messages'))
  app.use('/api/v1/notifications', require('./../api/v1/kiboengage/notifications'))
  app.use('/api/v1/tags', require('./../api/v1/kiboengage/tags'))
  app.use('/api/v1/tags_subscriber', require('./../api/v1/kiboengage/tags_subscriber'))
  app.use('/api/v1/templates', require('./../api/v1/kiboengage/templates'))
  app.use('/api/v1/urls', require('./../api/v1/kiboengage/urls'))
  app.use('/api/v1/scripts', require('./../api/v1/scripts'))
  app.use('/api/v1/whatsAppBroadcasts', require('./../api/v1/kiboengage/whatsAppBroadcasts'))
  app.use('/api/v1/whatsAppBroadcastMessages', require('./../api/v1/kiboengage/whatsAppBroadcastMessages'))
  app.use('/api/v1/autoposting_fb_post', require('./../api/v1/kiboengage/autopostingFacebookPosts'))
  app.use('/api/v1/abandoned_cart', require('./../api/v1/kiboengage/abandoned_cart'))
  app.use('/api/v1/messageStatistics', require('./../api/v1/kiboengage/messageStatistics'))
  app.use('/api/v1/messageBlocks', require('./../api/v1/kiboengage/message_blocks'))
  app.use('/api/v1/newsSections', require('./../api/v1/kiboengage/newsSections'))
  app.use('/api/v1/newsPosts', require('./../api/v1/kiboengage/newsPosts'))
  app.use('/api/v1/newsSubscriptions', require('./../api/v1/kiboengage/newsSubscriptions'))
  app.use('/api/v1/newsPostSubscribers', require('./../api/v1/kiboengage/newsPostSubscribers'))
  app.use('/api/v1/sponsoredMessaging', require('./../api/v1/kiboengage/sponsoredMessaging'))
  app.use('/api/v1/queue', require('./../api/v1/kiboengage/queue'))
  app.use('/api/v1/broadcasts/responses', require('./../api/v1/kiboengage/broadcastResponses'))
  // auth middleware go here if you authenticate on same server
  // app.use('/auth', require('./auth'))

  app.route('/:url(api|auth)/*').get((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`})
  }).post((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`})
  })

  /*
    Setup a general error handler for JsonSchemaValidation errors.
  */
  app.use(function (err, req, res, next) {
    if (err.name === 'JsonSchemaValidation') {
      const responseData = {
        statusText: 'Bad Request',
        jsonSchemaValidation: true,
        validations: err.validations
      }

      const message = err || `JsonSchemaValidation error`
      logger.serverLog(message, `${TAG}: ${req.path ? req.path : req.originalUrl}`, req.body, {responseData}, 'error')

      res.status(400).json(responseData)
    } else {
    // pass error to next error middleware handler
      next(err)
    }
  })

  if (config.env === 'production' || config.env === 'staging') {
    app.use(Sentry.Handlers.requestHandler())
    app.use(Sentry.Handlers.errorHandler())
  }
  // app.route('/*').get((req, res) => {
  //   res.redirect('/')
  // }).post((req, res) => {
  //   res.redirect('/')
  // })
}
