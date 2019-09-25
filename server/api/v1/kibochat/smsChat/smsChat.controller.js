const logger = require('../../../../components/logger')
const DataLayer = require('./smsChat.datalayer')
const TAG = '/api/v1/kibochat/smsChat/smsChat.controller.js'
const { sendSuccessResponse, sendErrorResponse } = require('../../global/response')
const util = require('util')

exports.create = function (req, res) {
  console.log('Create endpoint is hit:', req.body)

  DataLayer.createOneLiveChatObject(req.body)
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

  DataLayer.findLiveChatUsingQuery(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}
exports.update = function (req, res) {
  logger.serverLog(TAG, `Update endpoint is hit:`)

  DataLayer.updateLiveChat(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}
