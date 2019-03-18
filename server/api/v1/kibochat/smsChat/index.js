const express = require('express')
const router = express.Router()
const validate = require('express-jsonschema').validate

const validationSchema = require('./validationSchema')
const controller = require('./smsChat.controller')

router.post('/',
  validate({body: validationSchema.createPayload}),
  controller.create)

router.post('/query',
  validate({body: validationSchema.queryPayload}),
  controller.query)

module.exports = router
