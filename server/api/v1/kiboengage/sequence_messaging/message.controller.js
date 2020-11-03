// Web layer of this API node
const logger = require('../../../../components/logger')
const DataLayer = require('./message.datalayer')
const TAG = '/api/v1/kiboengage/sequence/message.controller.js'
const { sendSuccessResponse, sendErrorResponse } = require('../../../../global/response')

exports.index = function (req, res) {
  DataLayer.findAllMessageObjects()
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find all seq messages'
      logger.serverLog(message, `${TAG}: exports.index`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.create = function (req, res) {
  DataLayer.createOneMessageObject(req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      const message = err || 'Failed to create seq message'
      logger.serverLog(message, `${TAG}: exports.create`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.query = function (req, res) {
  DataLayer.findMessageUsingQuery(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to find seq messages'
      logger.serverLog(message, `${TAG}: exports.query`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.update = function (req, res) {
  DataLayer.updateMessage(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      const message = err || 'Failed to update seq message'
      logger.serverLog(message, `${TAG}: exports.update`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.delete = function (req, res) {
  DataLayer.deleteMessage(req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      const message = err || 'Failed to delete seq message'
      logger.serverLog(message, `${TAG}: exports.delete`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err.toString())
    })
}
