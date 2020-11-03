const logger = require('../../../../components/logger')
const DataLayer = require('./smsChat.datalayer')
const TAG = '/api/v1/kibochat/smsChat/smsChat.controller.js'
const { sendSuccessResponse, sendErrorResponse } = require('../../../../global/response')
const util = require('util')

exports.create = function (req, res) {
  DataLayer.createOneLiveChatObject(req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      const message = err || 'Failed to create sms chat'
      logger.serverLog(message, `${TAG}: exports.create`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.query = function (req, res) {
  DataLayer.findLiveChatUsingQuery(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all smsChat'
      logger.serverLog(message, `${TAG}: exports.query`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}
exports.update = function (req, res) {
  DataLayer.updateLiveChat(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to update smsChat'
      logger.serverLog(message, `${TAG}: exports.update`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.search = function (req, res) {
  DataLayer.countSearchTerms(req.body).then((count) => {
    DataLayer.searchLiveChat(req.body)
      .then(foundObjects => {
        let result = {
          count: count,
          messages: foundObjects
        }
        sendSuccessResponse(res, 200, result)
      })
      .catch(err => {
        const message = err || 'Failed to search smsChat'
        logger.serverLog(message, `${TAG}: exports.search`, req.body, {}, 'error')
        sendErrorResponse(res, 500, err.toString())
      })
  })
    .catch(err => {
      const message = err || 'Failed to count search terms'
      logger.serverLog(message, `${TAG}: exports.search`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}
