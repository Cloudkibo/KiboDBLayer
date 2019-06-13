const express = require('express')
const router = express.Router()
const validate = require('express-jsonschema').validate

const validationSchema = require('./validationSchema')
const controller = require('./autoposting_messages.controller')
const subscriberMessagesController = require('./autoposting_subscriber_messages.controller')

router.get('/', controller.index)
router.post('/',
  validate({body: validationSchema.createPayload}),
  controller.create)
router.post('/query',
  validate({body: validationSchema.queryPayload}),
  controller.query)
router.post('/kiboDashQuery',
  controller.query)
router.put('/',
  validate({body: validationSchema.updatePayload}),
  controller.update)
router.delete('/',
  validate({body: validationSchema.queryPayload}),
  controller.delete)

// Response endpoints

router.get('/response', subscriberMessagesController.index)
router.post('/response',
  validate({body: validationSchema.subscriberMessagesCreate}),
  subscriberMessagesController.create)
router.post('/response/query',
  validate({body: validationSchema.subscriberMessageseQuery}),
  subscriberMessagesController.query)
router.put('/response',
  validate({body: validationSchema.subscriberMessagesUpdate}),
  subscriberMessagesController.update)
router.delete('/response',
  validate({body: validationSchema.subscriberMessagesQuery}),
  subscriberMessagesController.delete)

module.exports = router
