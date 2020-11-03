const logger = require('../../../../components/logger')
const DataLayer = require('./whatsAppChat.datalayer')
const TAG = '/api/v1/kibochat/whatsAppChat/whatsAppChat.controller.js'
const { sendSuccessResponse, sendErrorResponse } = require('../../../../global/response')
// const util = require('util')

exports.create = function (req, res) {
  DataLayer.createOneLiveChatObject(req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      const message = err || 'Failed to create whatsAppChat'
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
      const message = err || 'Failed to find all whatsAppChat'
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
      const message = err || 'Failed to update whatsAppChat'
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
        const message = err || 'Failed to search whatsAppChat'
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
exports.delete = function (req, res) {
  DataLayer.deleteLiveChat(req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      const message = err || 'Failed to delete whatsAppChat'
      logger.serverLog(message, `${TAG}: exports.delete`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}
