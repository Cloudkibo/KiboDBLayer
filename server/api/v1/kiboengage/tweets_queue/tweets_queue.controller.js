const Datalayer = require('./tweets_queue.datalayer')
const { sendSuccessResponse, sendErrorResponse } = require('../../../../global/response')
const TAG = '/api/v1/kiboengage/tweets_queue/tweets_queue.controller.js'
const logger = require('../../../../components/logger')

exports.index = function (req, res) {
  Datalayer.findAllQueueObjects()
    .then(foundObj => {
      sendSuccessResponse(res, 200, foundObj)
    })
    .catch(err => {
      const message = err || 'Failed to find all tweet queues'
      logger.serverLog(message, `${TAG}: exports.index`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err)
    })
}

exports.create = function (req, res) {
  Datalayer.createOneQueueObject(req.body)
    .then(resp => {
      sendSuccessResponse(res, 200, resp)
    })
    .catch(err => {
      const message = err || 'Failed to create tweet queue'
      logger.serverLog(message, `${TAG}: exports.create`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err)
    })
}

exports.delete = function (req, res) {
  Datalayer.deleteQueue(req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      const message = err || 'Failed to delete tweet queue'
      logger.serverLog(message, `${TAG}: exports.delete`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err)
    })
}

exports.query = function (req, res) {
  Datalayer.findQueueUsingQuery(req.body)
    .then(foundRes => {
      sendSuccessResponse(res, 200, foundRes)
    })
    .catch(err => {
      const message = err || 'Failed to find tweet queue'
      logger.serverLog(message, `${TAG}: exports.query`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err)
    })
}

exports.update = function (req, res) {
  Datalayer.updateQueue(req.body)
    .then(updatedPayload => {
      sendSuccessResponse(res, 200, updatedPayload)
    })
    .catch(err => {
      const message = err || 'Failed to update tweet queue'
      logger.serverLog(message, `${TAG}: exports.update`, req.body, {}, 'error')
      sendErrorResponse(res, 500, err)
    })
}
