// Web layer of this API node
const logger = require('../../../../components/logger')
const DataLayer = require('./autoposting_messages.datalayer')
const TAG = '/api/v1/kiboengage/autoposting_messages/autoposting_messages.controller.js'
const mongoose = require('mongoose')
const util = require('util')

exports.index = function (req, res) {
  logger.serverLog(TAG, `Index endpoint is hit:`)
  DataLayer.findAllAutopostingMessagesObjects()
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

  DataLayer.createOneAutopostingMessageObject(req.body)
    .then(createdObject => {
      res.status(200).json({status: 'success', payload: createdObject})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.query = function (req, res) {
  logger.serverLog(TAG, `Query endpoint is hit: ${req.body}`)
  console.log('autoposting_messages query', req.body)
  if (req.body._id) {
    if (req.body._id.$lt) {
      req.body._id.$lt = mongoose.Types.ObjectId(req.body._id.$lt)
    } else if (req.body._id.$gt) {
      req.body._id.$gt = mongoose.Types.ObjectId(req.body._id.$gt)
    }
  }
  DataLayer.findAutopostingMessagesUsingQuery(req.body)
    .then(foundObjects => {
      console.log('autoposting_messages foundObjects', foundObjects)
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Query Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.update = function (req, res) {
  logger.serverLog(TAG, `Update endpoint is hit:`)

  DataLayer.updateAutopostingMessage(req.body)
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

  DataLayer.deleteAutopostingMessage(req.body)
    .then(result => {
      res.status(200).json({status: 'success', payload: result})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}
