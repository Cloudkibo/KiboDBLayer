const express = require('express')
const router = express.Router()
const validate = require('express-jsonschema').validate

const validationSchema = require('./validationSchema')
const controller = require('./whatsAppChat.controller')

router.post('/',
  validate({ body: validationSchema.createPayload }),
  controller.create)

router.get('/query',
  validate({ body: validationSchema.queryPayload }),
  controller.query)

router.patch('/',
  validate({ body: validationSchema.updatePayload }),
  controller.update)

router.delete('/',
  validate({ body: validationSchema.queryPayload }),
  controller.delete)

module.exports = router
