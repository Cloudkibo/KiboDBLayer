// Web layer of this API node
const logger = require('../../../../components/logger')
const DataLayer = require('./page_broadcast.datalayer')
const TAG = '/api/v1/kiboengage/page_broadcast/page_broadcast.controller.js'
const { sendSuccessResponse, sendErrorResponse } = require('../../../../global/response')
const util = require('util')

exports.index = function (req, res) {
  logger.serverLog(TAG, `Index endpoint is hit:`)
  DataLayer.findAllPageBroadcastObjects()
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.tostr())
    })
}

exports.create = function (req, res) {
  logger.serverLog(TAG, `Create endpoint is hit:`)

  DataLayer.createOnePageBroadcastObject(req.body)
    .then(createdObject => {
      sendSuccessResponse(res, 200, createdObject)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.tostr())
    })
}

exports.query = function (req, res) {
  logger.serverLog(TAG, `Query endpoint is hit:`)
  DataLayer.findPageBroadcastUsingQuery(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.tostr())
    })
}

exports.update = function (req, res) {
  logger.serverLog(TAG, `Update endpoint is hit:`)

  DataLayer.updatePageBroadcast(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.tostr())
    })
}

exports.delete = function (req, res) {
  logger.serverLog(TAG, `Delete endpoint is hit:`)

  DataLayer.deletePageBroadcast(req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.tostr())
    })
}
