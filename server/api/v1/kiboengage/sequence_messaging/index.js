const express = require('express')
const router = express.Router()
const validate = require('express-jsonschema').validate

const validationSchema = require('./validationSchema')
const controller = require('./sequence.controller')
const messageController = require('./message.controller')

router.get('/', controller.index)
router.post('/',
  validate({body: validationSchema.createPayload}),
  controller.create)
router.post('/query',
  validate({body: validationSchema.queryPayload}),
  controller.query)
router.put('/',
  validate({body: validationSchema.updatePayload}),
  controller.update)
router.delete('/',
  validate({body: validationSchema.queryPayload}),
  controller.delete)

// Response endpoints

router.get('/message', messageController.index)
router.post('/message',
  validate({body: validationSchema.messageCreate}),
  messageController.create)
router.post('/message/query',
  validate({body: validationSchema.messageQuery}),
  messageController.query)
router.put('/message',
  validate({body: validationSchema.messageUpdate}),
  messageController.update)
router.delete('/message',
  validate({body: validationSchema.messageQuery}),
  messageController.delete)

module.exports = router
