// Web layer of this API node
const logger = require('./../../../../../components/logger')
const DataLayer = require('./abandoned_checkout.datalayer')
const TAG = '/api/v1/kiboengage/abandoned_cart/abandoned_checkout/abandoned_checkout.controller.js'

const util = require('util')

exports.index = function (req, res) {
  logger.serverLog(TAG, `Index endpoint is hit:`)
  DataLayer.findAllAbandonedCheckoutObjects()
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.create = function (req, res) {
  logger.serverLog(TAG, `Create endpoint is hit:`)

  DataLayer.createOneAbandonedCheckoutObject(req.body)
    .then(createdObject => {
      res.status(200).json({status: 'success', payload: createdObject})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.query = function (req, res) {
  logger.serverLog(TAG, `Query endpoint is hit:`)

  DataLayer.findAbandonedCheckoutUsingQuery(req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.update = function (req, res) {
  logger.serverLog(TAG, `Update endpoint is hit:`)

  DataLayer.updateAbandonedCheckout(req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Update Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.delete = function (req, res) {
  logger.serverLog(TAG, `Delete endpoint is hit:`)

  DataLayer.deleteAbandonedCheckout(req.body)
    .then(result => {
      res.status(200).json({status: 'success', payload: result})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}
