// Web layer of this API node
const logger = require('../../../../components/logger')
const DataLayer = require('./templates.datalayer')
const BotTemplateModel = require('./botTemplate.model')
const CategoryModel = require('./category.model')
const BroadcastTemplateModel = require('./broadcastTemplate.model')
const PollTemplateModel = require('./pollTemplate.model')
const SurveyQuestionModel = require('./surveyQuestion.model')
const SurveyTemplateModel = require('./surveyTemplate.model')
const TAG = '/api/v1/kiboengage/templates/templates.controller.js'
const { sendSuccessResponse, sendErrorResponse } = require('../../../../global/response')

// // // // // // // =======================Bot template ENDPOINTS============================ // // // // //

exports.indexBotTemplate = function (req, res) {
  DataLayer.findAllObjects(BotTemplateModel)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all bot templates'
      logger.serverLog(message, `${TAG}: exports.indexBotTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.createBotTemplate = function (req, res) {
  DataLayer.createOneBotTemplateObject(BotTemplateModel, req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      const message = err || 'Failed to create bot template'
      logger.serverLog(message, `${TAG}: exports.createBotTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.queryBotTemplate = function (req, res) {
  DataLayer.findUsingQuery(BotTemplateModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find bot templates'
      logger.serverLog(message, `${TAG}: exports.queryBotTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.updateBotTemplate = function (req, res) {
  DataLayer.update(BotTemplateModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to update bot template'
      logger.serverLog(message, `${TAG}: exports.updateBotTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.deleteBotTemplate = function (req, res) {
  DataLayer.delete(BotTemplateModel, req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      const message = err || 'Failed to delete bot template'
      logger.serverLog(message, `${TAG}: exports.deleteBotTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

// // // // // // // =======================Broadcast template ENDPOINTS============================ // // // // //

exports.indexBroadcastTemplate = function (req, res) {
  DataLayer.findAllObjects(BroadcastTemplateModel)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all broadcast templates'
      logger.serverLog(message, `${TAG}: exports.indexBroadcastTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.createBroadcastTemplate = function (req, res) {
  DataLayer.createOneBroadcastTemplateObject(BroadcastTemplateModel, req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      const message = err || 'Failed to create broadcast template'
      logger.serverLog(message, `${TAG}: exports.createBroadcastTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.queryBroadcastTemplate = function (req, res) {
  DataLayer.findUsingQuery(BroadcastTemplateModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find broadcast templates'
      logger.serverLog(message, `${TAG}: exports.queryBroadcastTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.updateBroadcastTemplate = function (req, res) {
  DataLayer.update(BroadcastTemplateModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to update broadcast template'
      logger.serverLog(message, `${TAG}: exports.updateBroadcastTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.deleteBroadcastTemplate = function (req, res) {
  DataLayer.delete(BroadcastTemplateModel, req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      const message = err || 'Failed to delete broadcast template'
      logger.serverLog(message, `${TAG}: exports.deleteBroadcastTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

// // // // // // // =======================category ENDPOINTS============================ // // // // //

exports.indexCategory = function (req, res) {
  DataLayer.findAllObjects(CategoryModel)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all categories'
      logger.serverLog(message, `${TAG}: exports.indexCategory`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.createCategory = function (req, res) {
  DataLayer.createOneCategoryObject(CategoryModel, req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      const message = err || 'Failed to create category'
      logger.serverLog(message, `${TAG}: exports.createCategory`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.queryCategory = function (req, res) {
  DataLayer.findUsingQuery(CategoryModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find categories'
      logger.serverLog(message, `${TAG}: exports.queryCategory`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.updateCategory = function (req, res) {
  DataLayer.update(CategoryModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to update category'
      logger.serverLog(message, `${TAG}: exports.updateCategory`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.deleteCategory = function (req, res) {
  DataLayer.delete(CategoryModel, req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      const message = err || 'Failed to delete category'
      logger.serverLog(message, `${TAG}: exports.deleteCategory`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

// // // // // // // =======================Poll Template ENDPOINTS============================ // // // // //

exports.indexPollTemplate = function (req, res) {
  DataLayer.findAllObjects(PollTemplateModel)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all poll templates'
      logger.serverLog(message, `${TAG}: exports.indexPollTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.createPollTemplate = function (req, res) {
  DataLayer.createOnePollTemplateObject(PollTemplateModel, req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      const message = err || 'Failed to create poll template'
      logger.serverLog(message, `${TAG}: exports.createPollTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.queryPollTemplate = function (req, res) {
  DataLayer.findUsingQuery(PollTemplateModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find poll templates'
      logger.serverLog(message, `${TAG}: exports.queryPollTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.updatePollTemplate = function (req, res) {
  DataLayer.update(PollTemplateModel, req.body)
    .then(foundObjects => {
      console.log(foundObjects)
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to update poll template'
      logger.serverLog(message, `${TAG}: exports.updatePollTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.deletePollTemplate = function (req, res) {
  DataLayer.delete(PollTemplateModel, req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      const message = err || 'Failed to deletePollTemplate'
      logger.serverLog(message, `${TAG}: exports.deletePollTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

// // // // // // // =======================Survey Question Template ENDPOINTS============================ // // // // //

exports.indexSurveyQuestionTemplate = function (req, res) {
  DataLayer.findAllObjects(SurveyQuestionModel)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all survey question templates'
      logger.serverLog(message, `${TAG}: exports.indexSurveyQuestionTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.createSurveyQuestionTemplate = function (req, res) {
  DataLayer.createOneSurveyQuestionTemplateObject(SurveyQuestionModel, req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      const message = err || 'Failed to create survey question template'
      logger.serverLog(message, `${TAG}: exports.createSurveyQuestionTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.querySurveyQuestionTemplate = function (req, res) {
  DataLayer.findUsingQuery(SurveyQuestionModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find survey question templates'
      logger.serverLog(message, `${TAG}: exports.querySurveyQuestionTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.updateSurveyQuestionTemplate = function (req, res) {
  DataLayer.update(SurveyQuestionModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to update survey question template'
      logger.serverLog(message, `${TAG}: exports.updateSurveyQuestionTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.deleteSurveyQuestionTemplate = function (req, res) {
  DataLayer.delete(SurveyQuestionModel, req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      const message = err || 'Failed to delete survey question template'
      logger.serverLog(message, `${TAG}: exports.deleteSurveyQuestionTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

// // // // // // // =======================Survey Template ENDPOINTS============================ // // // // //

exports.indexSurveyTemplate = function (req, res) {
  DataLayer.findAllObjects(SurveyTemplateModel)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all survey templates'
      logger.serverLog(message, `${TAG}: exports.indexSurveyTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.createSurveyTemplate = function (req, res) {
  DataLayer.createOneSurveyTemplateObject(SurveyTemplateModel, req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      const message = err || 'Failed to create survey template'
      logger.serverLog(message, `${TAG}: exports.createSurveyTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.querySurveyTemplate = function (req, res) {
  DataLayer.findUsingQuery(SurveyTemplateModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find survey templates'
      logger.serverLog(message, `${TAG}: exports.querySurveyTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.updateSurveyTemplate = function (req, res) {
  DataLayer.update(SurveyTemplateModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to update survey template'
      logger.serverLog(message, `${TAG}: exports.updateSurveyTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.deleteSurveyTemplate = function (req, res) {
  DataLayer.delete(SurveyTemplateModel, req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      const message = err || 'Failed to delete survey template'
      logger.serverLog(message, `${TAG}: exports.deleteSurveyTemplate`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}
