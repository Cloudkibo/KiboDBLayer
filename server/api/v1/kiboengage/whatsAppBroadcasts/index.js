const express = require('express')
const router = express.Router()
const validate = require('express-jsonschema').validate

const validationSchema = require('./validationSchema')
const controller = require('./whatsAppBroadcasts.controller')

router.post('/',
  validate({body: validationSchema.createPayload}),
  controller.create)

router.post('/query',
  validate({body: validationSchema.queryPayload}),
  controller.query)

router.put('/',
  validate({body: validationSchema.updatePayload}),
  controller.update)

module.exports = router
