// Web layer of this API node
const logger = require('../../../../components/logger')
const DataLayer = require('./smart_replies.datalayer')
const SmartRepliesModel = require('./smart_replies.model')
const AnswerModel = require('./answers.model')
const UnansweredModel = require('./unanswered.model')
const WaitingModel = require('./waiting_sub.model')
const TAG = '/api/v1/kiboengage/page_poll/page_poll.controller.js'
const { sendSuccessResponse, sendErrorResponse } = require('../../global/response')
const util = require('util')

// // // // // // // =======================BOT ENDPOINTS============================ // // // // //

exports.indexBot = function (req, res) {
  logger.serverLog(TAG, `Index bot endpoint is hit:`)
  DataLayer.findAllObjects(SmartRepliesModel)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.createBot = function (req, res) {
  logger.serverLog(TAG, `Create bot endpoint is hit:`)

  DataLayer.createOneSmartReplyObject(SmartRepliesModel, req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.queryBot = function (req, res) {
  logger.serverLog(TAG, `Query bot endpoint is hit:`)

  DataLayer.findUsingQuery(SmartRepliesModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.updateBot = function (req, res) {
  logger.serverLog(TAG, `Update bot endpoint is hit:`)

  DataLayer.update(SmartRepliesModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.deleteBot = function (req, res) {
  logger.serverLog(TAG, `Delete bot endpoint is hit:`)

  DataLayer.delete(SmartRepliesModel, req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

// // // // // // // =======================ANSWER ENDPOINTS============================ // // // // //

exports.indexAnswer = function (req, res) {
  logger.serverLog(TAG, `Index answer endpoint is hit:`)
  DataLayer.findAllObjects(AnswerModel)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.createAnswer = function (req, res) {
  logger.serverLog(TAG, `Create answer endpoint is hit:`)

  DataLayer.createOneAnswerObject(AnswerModel, req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.queryAnswer = function (req, res) {
  logger.serverLog(TAG, `Query answer endpoint is hit:`)

  DataLayer.findUsingQuery(AnswerModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.updateAnswer = function (req, res) {
  logger.serverLog(TAG, `Update answer endpoint is hit:`)

  DataLayer.update(AnswerModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.deleteAnswer = function (req, res) {
  logger.serverLog(TAG, `Delete answer endpoint is hit:`)

  DataLayer.delete(AnswerModel, req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

// // // // // // // =======================UNANSWERED ENDPOINTS============================ // // // // //

exports.indexUnanswered = function (req, res) {
  logger.serverLog(TAG, `Index Unanswered endpoint is hit:`)
  DataLayer.findAllObjects(UnansweredModel)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.createUnanswered = function (req, res) {
  logger.serverLog(TAG, `Create Unanswered endpoint is hit:`)

  DataLayer.createOneUnansweredObject(UnansweredModel, req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.queryUnanswered = function (req, res) {
  logger.serverLog(TAG, `Query Unanswered endpoint is hit:`)

  DataLayer.findUsingQuery(UnansweredModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 20, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.updateUnanswered = function (req, res) {
  logger.serverLog(TAG, `Update Unanswered endpoint is hit:`)

  DataLayer.update(UnansweredModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.deleteUnanswered = function (req, res) {
  logger.serverLog(TAG, `Delete Unanswered endpoint is hit:`)

  DataLayer.delete(UnansweredModel, req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

// // // // // // // =======================WAITING ENDPOINTS============================ // // // // //

exports.indexWaiting = function (req, res) {
  logger.serverLog(TAG, `Index Waiting endpoint is hit:`)
  DataLayer.findAllObjects(WaitingModel)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.createWaiting = function (req, res) {
  logger.serverLog(TAG, `Create Waiting endpoint is hit:`)

  DataLayer.createOneWaitingSubscriberObject(WaitingModel, req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.queryWaiting = function (req, res) {
  logger.serverLog(TAG, `Query Waiting endpoint is hit:`)

  DataLayer.findUsingQuery(WaitingModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.updateWaiting = function (req, res) {
  logger.serverLog(TAG, `Update Waiting endpoint is hit:`)

  DataLayer.update(WaitingModel, req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.deleteWaiting = function (req, res) {
  logger.serverLog(TAG, `Delete Waiting endpoint is hit:`)

  DataLayer.delete(WaitingModel, req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}
