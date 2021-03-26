// Will only contain routes for KiboChat
const config = require('../config/environment/index')
const Sentry = require('@sentry/node')
const logger = require('../../server/components/logger')
const TAG = '/server/routes/kibochat.js'

module.exports = function (app) {
  // API middlewares go here
  app.use('/api/v1/test', require('./../api/v1/kibochat/test'))
  app.use('/api/v1/livechat', require('./../api/v1/kibochat/livechat'))
  app.use('/api/v1/notifications', require('./../api/v1/kibochat/notifications'))
  app.use('/api/v1/smart_replies', require('./../api/v1/kibochat/smart_replies'))
  app.use('/api/v1/sessions', require('./../api/v1/kibochat/sessions'))
  app.use('/api/v1/smsChat', require('./../api/v1/kibochat/smsChat'))
  app.use('/api/v1/whatsAppChat', require('./../api/v1/kibochat/whatsAppChat'))
  app.use('/api/v1/intents', require('./../api/v1/kibochat/intents'))
  app.use('/api/v1/chatbots', require('./../api/v1/kibochat/chatbot'))
  app.use('/api/v1/chatbots_backup', require('./../api/v1/kibochat/chatbot_backup'))
  app.use('/api/v1/whatsapp_bots_analtyics', require('./../api/v1/kibochat/whatsapp_bot_analytics'))
  app.use('/api/v1/messageBlocks_backup', require('./../api/v1/kibochat/messageBlocks_backup'))
  app.use('/api/v1/chatbot_analytics', require('./../api/v1/kibochat/chatbot_analytics'))
  app.use('/api/v1/chatbot_subscribers_journey', require('./../api/v1/kibochat/chatbotSubscribersJourney'))
  app.use('/api/v1/cannedResponses', require('./../api/v1/kibochat/cannedResponses'))
  app.use('/api/v1/superNumberPreferences', require('./../api/v1/kibochat/superNumberPreferences'))
  app.use('/api/v1/superNumberAnalytics', require('./../api/v1/kibochat/superNumberAnalytics'))
  app.use('/api/v1/superNumberMessageLogs', require('./../api/v1/kibochat/superNumberMessageLogs'))
  app.use('/api/v1/superNumberWidgetAnalytics', require('./../api/v1/kibochat/superNumberWidgetAnalytics'))
  app.use('/api/v1/codverificationpages', require('./../api/v1/kibochat/codverificationpages'))
  app.use('/api/v1/whatsAppChatbot', require('./../api/v1/kibochat/whatsAppChatbot'))
  app.use('/api/v1/cronStack', require('./../api/v1/kibochat/cronStack'))
  app.use('/api/v1/scripts', require('./../api/v1/scripts'))
  app.use('/api/v1/alerts/subscriptions', require('./../api/v1/kibochat/alertSubscriptions'))
  app.use('/api/v1/alerts', require('./../api/v1/kibochat/messageAlerts'))
  // auth middleware go here if you authenticate on same server
  // app.use('/auth', require('./auth'))

  app.route('/:url(api|auth)/*').get((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` })
  }).post((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` })
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
    app.use(Sentry.Handlers.errorHandler())
    app.use(Sentry.Handlers.requestHandler())
  }

  // app.route('/*').get((req, res) => {
  //   res.redirect('/')
  // }).post((req, res) => {
  //   res.redirect('/')
  // })
}
