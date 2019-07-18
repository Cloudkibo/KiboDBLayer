const logger = require('../../../../components/logger')
const DataLayer = require('./whatsAppBroadcasts.datalayer')
const TAG = '/api/v1/kiboengage/whatsAppBroadcasts/whatsAppBroadcasts.controller.js'
const { sendSuccessResponse, sendErrorResponse } = require('../../global/response')
const util = require('util')

exports.create = function (req, res) {
  logger.serverLog(TAG, `Create endpoint is hit:`)

  DataLayer.createOneBroadcastObject(req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}
exports.query = function (req, res) {
  logger.serverLog(TAG, `Query endpoint is hit:`)

  DataLayer.findBroadcastUsingQuery(req.body)
    .then(foundObjects => {
      console.log('foundObjects', foundObjects)
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}
exports.update = function (req, res) {
  logger.serverLog(TAG, `Update endpoint is hit:`)

  DataLayer.updateBroadcast(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}
