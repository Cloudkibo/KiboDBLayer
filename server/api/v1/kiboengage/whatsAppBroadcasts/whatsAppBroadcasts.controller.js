const logger = require('../../../../components/logger')
const DataLayer = require('./whatsAppBroadcasts.datalayer')
const TAG = '/api/v1/kiboengage/whatsAppBroadcasts/whatsAppBroadcasts.controller.js'
const { sendSuccessResponse, sendErrorResponse } = require('../../../../global/response')

exports.create = function (req, res) {
  DataLayer.createOneBroadcastObject(req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      const message = err || 'Failed to create whatsAppBroadcasts'
      logger.serverLog(message, `${TAG}: exports.create`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}
exports.query = function (req, res) {
  DataLayer.findBroadcastUsingQuery(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find whatsAppBroadcasts'
      logger.serverLog(message, `${TAG}: exports.query`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}
exports.update = function (req, res) {
  DataLayer.updateBroadcast(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to update whatsAppBroadcasts'
      logger.serverLog(message, `${TAG}: exports.update`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}
exports.delete = function (req, res) {
  DataLayer.deleteBroadcast(req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      const message = err || 'Failed to delete whatsAppBroadcasts'
      logger.serverLog(message, `${TAG}: exports.delete`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}
