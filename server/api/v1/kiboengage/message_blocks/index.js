const express = require('express')
const router = express.Router()
const validate = require('express-jsonschema').validate

const validationSchema = require('./validationSchema')
const controller = require('./messageBlocks.controller')

router.get('/', controller.index)

router.post('/',
  validate({ body: validationSchema.createPayload }),
  controller.create)

router.post('/bulkCreate',
  // validate({ body: validationSchema.bulkCreatePayload }),
  controller.bulkCreate)

router.post('/query',
  validate({ body: validationSchema.queryPayload }),
  controller.query)

router.put('/',
  validate({ body: validationSchema.updatePayload }),
  controller.update)

router.delete('/',
  validate({ body: validationSchema.queryPayload }),
  controller.delete)

module.exports = router
