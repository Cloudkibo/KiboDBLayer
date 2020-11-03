// Web layer of this API node
const logger = require('../../../../components/logger')
const DataLayer = require('./smart_replies.datalayer')
const SmartRepliesModel = require('./smart_replies.model')
const AnswerModel = require('./answers.model')
const UnansweredModel = require('./unanswered.model')
const WaitingModel = require('./waiting_sub.model')
const TAG = '/api/v1/kiboengage/page_poll/page_poll.controller.js'
const { sendSuccessResponse, sendErrorResponse } = require('../../../../global/response')
// const util = require('util')

// // // // // // // =======================BOT ENDPOINTS============================ // // // // //

exports.indexBot = function (req, res) {
  DataLayer.findAllObjects(SmartRepliesModel)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all bots'
      logger.serverLog(message, `${TAG}: exports.indexBot`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.createBot = function (req, res) {
  DataLayer.createOneSmartReplyObject(SmartRepliesModel, req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      const message = err || 'Failed to create bot'
      logger.serverLog(message, `${TAG}: exports.createBot`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.queryBot = function (req, res) {
  DataLayer.findUsingQuery(SmartRepliesModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all bots'
      logger.serverLog(message, `${TAG}: exports.queryBot`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.updateBot = function (req, res) {
  DataLayer.update(SmartRepliesModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to update bot'
      logger.serverLog(message, `${TAG}: exports.updateBot`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.deleteBot = function (req, res) {
  DataLayer.delete(SmartRepliesModel, req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      const message = err || 'Failed to delete bot'
      logger.serverLog(message, `${TAG}: exports.deleteBot`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

// // // // // // // =======================ANSWER ENDPOINTS============================ // // // // //

exports.indexAnswer = function (req, res) {
  DataLayer.findAllObjects(AnswerModel)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all answers'
      logger.serverLog(message, `${TAG}: exports.indexAnswer`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.createAnswer = function (req, res) {
  DataLayer.createOneAnswerObject(AnswerModel, req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      const message = err || 'Failed to create answer'
      logger.serverLog(message, `${TAG}: exports.createAnswer`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.queryAnswer = function (req, res) {
  DataLayer.findUsingQuery(AnswerModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all answers'
      logger.serverLog(message, `${TAG}: exports.queryAnswer`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.updateAnswer = function (req, res) {
  DataLayer.update(AnswerModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to update answer'
      logger.serverLog(message, `${TAG}: exports.updateAnswer`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.deleteAnswer = function (req, res) {
  DataLayer.delete(AnswerModel, req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      const message = err || 'Failed to delete answer'
      logger.serverLog(message, `${TAG}: exports.deleteAnswer`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

// // // // // // // =======================UNANSWERED ENDPOINTS============================ // // // // //

exports.indexUnanswered = function (req, res) {
  DataLayer.findAllObjects(UnansweredModel)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all unanswered query'
      logger.serverLog(message, `${TAG}: exports.indexUnanswered`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.createUnanswered = function (req, res) {
  DataLayer.createOneUnansweredObject(UnansweredModel, req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      const message = err || 'Failed to create unanswered query'
      logger.serverLog(message, `${TAG}: exports.createUnanswered`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.queryUnanswered = function (req, res) {
  DataLayer.findUsingQuery(UnansweredModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all unanswered query'
      logger.serverLog(message, `${TAG}: exports.queryUnanswered`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.updateUnanswered = function (req, res) {
  DataLayer.update(UnansweredModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to update unanswered query'
      logger.serverLog(message, `${TAG}: exports.updateUnanswered`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.deleteUnanswered = function (req, res) {
  DataLayer.delete(UnansweredModel, req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      const message = err || 'Failed to delete unanswered query'
      logger.serverLog(message, `${TAG}: exports.deleteUnanswered`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

// // // // // // // =======================WAITING ENDPOINTS============================ // // // // //

exports.indexWaiting = function (req, res) {
  DataLayer.findAllObjects(WaitingModel)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all waitingSubscribers'
      logger.serverLog(message, `${TAG}: exports.indexWaiting`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.createWaiting = function (req, res) {
  DataLayer.createOneWaitingSubscriberObject(WaitingModel, req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      const message = err || 'Failed to create waitingSubscribers'
      logger.serverLog(message, `${TAG}: exports.createWaiting`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.queryWaiting = function (req, res) {
  DataLayer.findUsingQuery(WaitingModel, req.body, {waitingSubscribers: true})
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all waitingSubscribers'
      logger.serverLog(message, `${TAG}: exports.queryWaiting`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.updateWaiting = function (req, res) {
  DataLayer.update(WaitingModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to update waitingSubscribers'
      logger.serverLog(message, `${TAG}: exports.updateWaiting`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.deleteWaiting = function (req, res) {
  DataLayer.delete(WaitingModel, req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      const message = err || 'Failed to delete waitingSubscribers'
      logger.serverLog(message, `${TAG}: exports.deleteWaiting`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}
