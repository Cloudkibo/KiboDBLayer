const express = require('express')
const router = express.Router()
const validate = require('express-jsonschema').validate

const validationSchema = require('./validationSchema')
const controller = require('./smart_replies.controller')

//                             =======================BOT ENDPOINTS============================

router.get('/', controller.indexBot)
router.post('/',
  validate({body: validationSchema.createBotPayload}),
  controller.createBot)
router.post('/query',
  validate({body: validationSchema.queryBotPayload}),
  controller.queryBot)
router.put('/',
  validate({body: validationSchema.updateBotPayload}),
  controller.updateBot)
router.delete('/',
  validate({body: validationSchema.queryBotPayload}),
  controller.deleteBot)

//                             =======================Answer ENDPOINTS============================

router.get('/answers', controller.indexAnswer)
router.post('/answers',
  validate({body: validationSchema.createAnswerPayload}),
  controller.createAnswer)
router.post('/answers/query',
  validate({body: validationSchema.queryAnswerPayload}),
  controller.queryAnswer)
router.put('/answers',
  validate({body: validationSchema.updateAnswerPayload}),
  controller.updateAnswer)
router.delete('/answers',
  validate({body: validationSchema.queryAnswerPayload}),
  controller.deleteAnswer)

//                             =======================Unanswered ENDPOINTS============================

router.get('/unanswered', controller.indexUnanswered)
router.post('/unanswered',
  validate({body: validationSchema.createUnansweredPayload}),
  controller.createUnanswered)
router.post('/unanswered/query',
  validate({body: validationSchema.queryUnansweredPayload}),
  controller.queryUnanswered)
router.put('/unanswered',
  validate({body: validationSchema.updateUnansweredPayload}),
  controller.updateUnanswered)
router.delete('/unanswered',
  validate({body: validationSchema.queryUnansweredPayload}),
  controller.deleteUnanswered)

//                             =======================Waiting ENDPOINTS============================

router.get('/waiting', controller.indexWaiting)
router.post('/waiting',
  validate({body: validationSchema.createWaitingPayload}),
  controller.createWaiting)
router.post('/waiting/query',
  validate({body: validationSchema.queryWaitingPayload}),
  controller.queryWaiting)
router.put('/waiting',
  validate({body: validationSchema.updateWaitingPayload}),
  controller.updateWaiting)
router.delete('/waiting',
  validate({body: validationSchema.queryWaitingPayload}),
  controller.deleteWaiting)

module.exports = router
