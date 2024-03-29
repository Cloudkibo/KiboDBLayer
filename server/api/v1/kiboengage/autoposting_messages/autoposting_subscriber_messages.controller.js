// Web layer of this API node
const logger = require('../../../../components/logger')
const DataLayer = require('./autoposting_subscriber_messages.datalayer')
const TAG = '/api/v1/kiboengage/autoposting_messages/autoposting_subscriber_messages.controller.js'
const { sendSuccessResponse, sendErrorResponse } = require('../../../../global/response')
const util = require('util')

exports.index = function (req, res) {
  DataLayer.findAllAutopostingSubscriberMessagesObjects()
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.create = function (req, res) {
  DataLayer.createOneAutopostingSubscriberMessageObject(req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.query = function (req, res) {
  DataLayer.findAutopostingSubscriberMessagesUsingQuery(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.update = function (req, res) {
  DataLayer.updateAutopostingSubscriberMessages(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.delete = function (req, res) {
  DataLayer.deleteAutopostingSubscriberMessages(req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}
