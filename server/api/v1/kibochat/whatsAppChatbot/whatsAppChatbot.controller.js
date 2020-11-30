const logger = require('../../../../components/logger')
const DataLayer = require('./whatsAppChatbot.datalayer')
const TAG = '/api/v1/kibochat/whatsAppChatbot/whatsAppChatbot.controller.js'
const { sendSuccessResponse, sendErrorResponse } = require('../../../../global/response')

exports.create = function (req, res) {
  DataLayer.createOneWhatsAppChatbotObject(req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      const message = err || 'Failed to create all bots'
      logger.serverLog(message, `${TAG}: exports.create`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.query = function (req, res) {
  DataLayer.findWhatsAppChatbotUsingQuery(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all bots'
      logger.serverLog(message, `${TAG}: exports.query`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.update = function (req, res) {
  DataLayer.updateWhatsAppChatbot(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to update bot'
      logger.serverLog(message, `${TAG}: exports.update`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.delete = function (req, res) {
  DataLayer.deleteWhatsAppChatbot(req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      const message = err || 'Failed to delete bot'
      logger.serverLog(message, `${TAG}: exports.delete`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}
