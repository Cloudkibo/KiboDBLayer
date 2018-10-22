const express = require('express')
const router = express.Router()
const validate = require('express-jsonschema').validate

const validationSchema = require('./validationSchema')
const controller = require('./surveys.controller')
const responseController = require('./response.controller')
const questionController = require('./question.controller')

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

router.get('/response', responseController.index)
router.post('/response',
  validate({body: validationSchema.responseCreate}),
  responseController.create)
router.post('/response/query',
  validate({body: validationSchema.responseQuery}),
  responseController.query)
router.put('/response',
  validate({body: validationSchema.responseUpdate}),
  responseController.update)
router.delete('/response',
  validate({body: validationSchema.responseQuery}),
  responseController.delete)

// Question Endpoints

router.get('/question', questionController.index)
router.post('/question',
  validate({body: validationSchema.questionCreate}),
  questionController.create)
router.post('/question/query',
  validate({body: validationSchema.questionQuery}),
  questionController.query)
router.put('/question',
  validate({body: validationSchema.questionUpdate}),
  questionController.update)
router.delete('/question',
  validate({body: validationSchema.questionQuery}),
  questionController.delete)

module.exports = router
