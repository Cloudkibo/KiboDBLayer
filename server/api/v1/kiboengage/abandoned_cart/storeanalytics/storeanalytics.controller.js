// Web layer of this API node
const logger = require('./../../../../../components/logger')
const DataLayer = require('./storeanalytics.datalayer')
const TAG = '/api/v1/kiboengage/abandoned_cart/storeanalytics/storeanalytics.controller.js'
const { sendSuccessResponse, sendErrorResponse } = require('../../../global/response')
const util = require('util')

exports.index = function (req, res) {
  logger.serverLog(TAG, `Index endpoint is hit:`)
  DataLayer.findAllStoreAnalyticsObjects()
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.create = function (req, res) {
  logger.serverLog(TAG, `Create endpoint is hit:`)

  DataLayer.createOneStoreAnalyticsObject(req.body)
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

  DataLayer.findStoreAnalyticsUsingQuery(req.body)
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

  DataLayer.updateStoreAnalytics(req.body)
    .then(foundObjects => {
      sendSuccessResponse(res, 200, foundObjects)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}

exports.delete = function (req, res) {
  logger.serverLog(TAG, `Delete endpoint is hit:`)

  DataLayer.deleteStoreAnalytics(req.body)
    .then(result => {
      sendSuccessResponse(res, 200, result)
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      sendErrorResponse(res, 500, err.toString())
    })
}
