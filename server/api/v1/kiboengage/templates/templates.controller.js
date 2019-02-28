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

const util = require('util')

// // // // // // // =======================Bot template ENDPOINTS============================ // // // // //

exports.indexBotTemplate = function (req, res) {
  logger.serverLog(TAG, `Index bot template endpoint is hit:`)
  DataLayer.findAllObjects(BotTemplateModel)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.createBotTemplate = function (req, res) {
  logger.serverLog(TAG, `Create bot template endpoint is hit:`)

  DataLayer.createOneBotTemplateObject(BotTemplateModel, req.body)
    .then(createdObject => {
      res.status(200).json({status: 'success', payload: createdObject})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.queryBotTemplate = function (req, res) {
  logger.serverLog(TAG, `Query bot template endpoint is hit:`)

  DataLayer.findUsingQuery(BotTemplateModel, req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.updateBotTemplate = function (req, res) {
  logger.serverLog(TAG, `Update bot template endpoint is hit:`)

  DataLayer.update(BotTemplateModel, req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.deleteBotTemplate = function (req, res) {
  logger.serverLog(TAG, `Delete bot template endpoint is hit:`)

  DataLayer.delete(BotTemplateModel, req.body)
    .then(result => {
      res.status(200).json({status: 'success', payload: result})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

// // // // // // // =======================Broadcast template ENDPOINTS============================ // // // // //

exports.indexBroadcastTemplate = function (req, res) {
  logger.serverLog(TAG, `Index BroadcastTemplate endpoint is hit:`)
  DataLayer.findAllObjects(BroadcastTemplateModel)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.createBroadcastTemplate = function (req, res) {
  logger.serverLog(TAG, `Create BroadcastTemplate endpoint is hit:`)

  DataLayer.createOneBroadcastTemplateObject(BroadcastTemplateModel, req.body)
    .then(createdObject => {
      res.status(200).json({status: 'success', payload: createdObject})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.queryBroadcastTemplate = function (req, res) {
  logger.serverLog(TAG, `Query BroadcastTemplate endpoint is hit:`)
  DataLayer.findUsingQuery(BroadcastTemplateModel, req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.updateBroadcastTemplate = function (req, res) {
  logger.serverLog(TAG, `Update BroadcastTemplate endpoint is hit:`)

  DataLayer.update(BroadcastTemplateModel, req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.deleteBroadcastTemplate = function (req, res) {
  logger.serverLog(TAG, `Delete BroadcastTemplate endpoint is hit:`)

  DataLayer.delete(BroadcastTemplateModel, req.body)
    .then(result => {
      res.status(200).json({status: 'success', payload: result})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

// // // // // // // =======================category ENDPOINTS============================ // // // // //

exports.indexCategory = function (req, res) {
  logger.serverLog(TAG, `Index Category endpoint is hit:`)
  DataLayer.findAllObjects(CategoryModel)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.createCategory = function (req, res) {
  logger.serverLog(TAG, `Create Category endpoint is hit:`)

  DataLayer.createOneCategoryObject(CategoryModel, req.body)
    .then(createdObject => {
      res.status(200).json({status: 'success', payload: createdObject})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.queryCategory = function (req, res) {
  logger.serverLog(TAG, `Query Category endpoint is hit:`)

  DataLayer.findUsingQuery(CategoryModel, req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.updateCategory = function (req, res) {
  logger.serverLog(TAG, `Update Category endpoint is hit:`)

  DataLayer.update(CategoryModel, req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.deleteCategory = function (req, res) {
  logger.serverLog(TAG, `Delete Category endpoint is hit:`)

  DataLayer.delete(CategoryModel, req.body)
    .then(result => {
      res.status(200).json({status: 'success', payload: result})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

// // // // // // // =======================Poll Template ENDPOINTS============================ // // // // //

exports.indexPollTemplate = function (req, res) {
  logger.serverLog(TAG, `Index PollTemplate endpoint is hit:`)
  DataLayer.findAllObjects(PollTemplateModel)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.createPollTemplate = function (req, res) {
  logger.serverLog(TAG, `Create PollTemplate endpoint is hit:`)

  DataLayer.createOnePollTemplateObject(PollTemplateModel, req.body)
    .then(createdObject => {
      res.status(200).json({status: 'success', payload: createdObject})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.queryPollTemplate = function (req, res) {
  logger.serverLog(TAG, `Query PollTemplate endpoint is hit:`)

  DataLayer.findUsingQuery(PollTemplateModel, req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.updatePollTemplate = function (req, res) {
  logger.serverLog(TAG, `Update PollTemplate endpoint is hit:`)

  DataLayer.update(PollTemplateModel, req.body)
    .then(foundObjects => {
      console.log(foundObjects)
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.deletePollTemplate = function (req, res) {
  logger.serverLog(TAG, `Delete PollTemplate endpoint is hit:`)

  DataLayer.delete(PollTemplateModel, req.body)
    .then(result => {
      res.status(200).json({status: 'success', payload: result})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

// // // // // // // =======================Survey Question Template ENDPOINTS============================ // // // // //

exports.indexSurveyQuestionTemplate = function (req, res) {
  logger.serverLog(TAG, `Index SurveyQuestionTemplate endpoint is hit:`)
  DataLayer.findAllObjects(SurveyQuestionModel)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.createSurveyQuestionTemplate = function (req, res) {
  logger.serverLog(TAG, `Create SurveyQuestionTemplate endpoint is hit:`)

  DataLayer.createOneSurveyQuestionTemplateObject(SurveyQuestionModel, req.body)
    .then(createdObject => {
      res.status(200).json({status: 'success', payload: createdObject})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.querySurveyQuestionTemplate = function (req, res) {
  logger.serverLog(TAG, `Query SurveyQuestionTemplate endpoint is hit:`)

  DataLayer.findUsingQuery(SurveyQuestionModel, req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.updateSurveyQuestionTemplate = function (req, res) {
  logger.serverLog(TAG, `Update SurveyQuestionTemplate endpoint is hit:`)

  DataLayer.update(SurveyQuestionModel, req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.deleteSurveyQuestionTemplate = function (req, res) {
  logger.serverLog(TAG, `Delete SurveyQuestionTemplate endpoint is hit:`)

  DataLayer.delete(SurveyQuestionModel, req.body)
    .then(result => {
      res.status(200).json({status: 'success', payload: result})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

// // // // // // // =======================Survey Template ENDPOINTS============================ // // // // //

exports.indexSurveyTemplate = function (req, res) {
  logger.serverLog(TAG, `Index SurveyTemplate endpoint is hit:`)
  DataLayer.findAllObjects(SurveyTemplateModel)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.createSurveyTemplate = function (req, res) {
  logger.serverLog(TAG, `Create SurveyTemplate endpoint is hit:`)

  DataLayer.createOneSurveyTemplateObject(SurveyTemplateModel, req.body)
    .then(createdObject => {
      res.status(200).json({status: 'success', payload: createdObject})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.querySurveyTemplate = function (req, res) {
  logger.serverLog(TAG, `Query SurveyTemplate endpoint is hit:`)

  DataLayer.findUsingQuery(SurveyTemplateModel, req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.updateSurveyTemplate = function (req, res) {
  logger.serverLog(TAG, `Update SurveyTemplate endpoint is hit:`)

  DataLayer.update(SurveyTemplateModel, req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.deleteSurveyTemplate = function (req, res) {
  logger.serverLog(TAG, `Delete SurveyTemplate endpoint is hit:`)

  DataLayer.delete(SurveyTemplateModel, req.body)
    .then(result => {
      res.status(200).json({status: 'success', payload: result})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}
