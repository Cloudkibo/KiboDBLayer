const express = require('express')
const router = express.Router()
const validate = require('express-jsonschema').validate

const validationSchema = require('./validationSchema')
const controller = require('./templates.controller')

//                             =======================Bot Template ENDPOINTS============================

router.get('/bot', controller.indexBotTemplate)
router.post('/bot',
  validate({body: validationSchema.createBotTemplatePayload}),
  controller.createBotTemplate)
router.post('/bot/query',
  validate({body: validationSchema.queryBotTemplatePayload}),
  controller.queryBotTemplate)
router.put('/bot',
  validate({body: validationSchema.updateBotTemplatePayload}),
  controller.updateBotTemplate)
router.delete('/bot',
  validate({body: validationSchema.queryBotTemplatePayload}),
  controller.deleteBotTemplate)

//                             =======================Broadcast template ENDPOINTS============================

router.get('/broadcast', controller.indexBroadcastTemplate)
router.post('/broadcast',
  validate({body: validationSchema.createBroadcastTemplatePayload}),
  controller.createBroadcastTemplate)
router.post('/broadcast/query',
  validate({body: validationSchema.queryBroadcastTemplatePayload}),
  controller.queryBroadcastTemplate)
router.put('/broadcast',
  validate({body: validationSchema.updateBroadcastPayload}),
  controller.updateBroadcastTemplate)
router.delete('/broadcast',
  validate({body: validationSchema.queryBroadcastTemplatePayload}),
  controller.deleteBroadcastTemplate)

//                             =======================Category ENDPOINTS============================

router.get('/category', controller.indexCategory)
router.post('/category',
  validate({body: validationSchema.createCategoryPayload}),
  controller.createCategory)
router.post('/category/query',
  validate({body: validationSchema.queryCategoryPayload}),
  controller.queryCategory)
router.put('/category',
  validate({body: validationSchema.updateCategoryPayload}),
  controller.updateCategory)
router.delete('/category',
  validate({body: validationSchema.queryCategoryPayload}),
  controller.deleteCategory)

//                             =======================Poll Template ENDPOINTS============================

router.get('/poll', controller.indexPollTemplate)
router.post('/poll',
  validate({body: validationSchema.createPollTemplatePayload}),
  controller.createPollTemplate)
router.post('/poll/query',
  validate({body: validationSchema.queryPollTemplatePayload}),
  controller.queryPollTemplate)
router.put('/poll',
  validate({body: validationSchema.updatePollTemplatePayload}),
  controller.updatePollTemplate)
router.delete('/poll',
  validate({body: validationSchema.queryPollTemplatePayload}),
  controller.deletePollTemplate)

//                             =======================Survey Question ENDPOINTS============================

router.get('/survey/question', controller.indexSurveyQuestionTemplate)
router.post('/survey/question',
  validate({body: validationSchema.createSurveyQuestionTemplatePayload}),
  controller.createSurveyQuestionTemplate)
router.post('/survey/question/query',
  validate({body: validationSchema.querySurveyQuestionTemplatePayload}),
  controller.querySurveyQuestionTemplate)
router.put('/survey/question',
  validate({body: validationSchema.updateSurveyQuestionTemplatePayload}),
  controller.updateSurveyQuestionTemplate)
router.delete('/survey/question',
  validate({body: validationSchema.querySurveyQuestionTemplatePayload}),
  controller.deleteSurveyQuestionTemplate)

//                             =======================Survey Template ENDPOINTS============================

router.get('/survey', controller.indexSurveyTemplate)
router.post('/survey',
  validate({body: validationSchema.createSurveyTemplatePayload}),
  controller.createSurveyTemplate)
router.post('/survey/query',
  validate({body: validationSchema.querySurveyTemplatePayload}),
  controller.querySurveyTemplate)
router.put('/survey',
  validate({body: validationSchema.updateSurveyTemplatePayload}),
  controller.updateSurveyTemplate)
router.delete('/survey',
  validate({body: validationSchema.querySurveyTemplatePayload}),
  controller.deleteSurveyTemplate)

module.exports = router
