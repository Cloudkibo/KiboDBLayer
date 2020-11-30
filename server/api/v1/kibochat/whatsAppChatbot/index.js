const express = require('express')
const router = express.Router()
const validate = require('express-jsonschema').validate

const validationSchema = require('./validationSchema')
const controller = require('./whatsAppChatbot.controller')

router.post('/',
  controller.create)

router.post('/query',
  validate({ body: validationSchema.queryPayload }),
  controller.query)

router.put('/',
  validate({ body: validationSchema.updatePayload }),
  controller.update)

router.delete('/',
  validate({ body: validationSchema.queryPayload }),
  controller.delete)

// NOTE: this is temporary script, we will remove this, once running it on production
const scripts = require('./scripts')
router.get('normalizeVerticals', scripts.normalizeVerticals)

module.exports = router
