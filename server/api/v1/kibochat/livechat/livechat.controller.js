// Web layer of this API node
const logger = require('../../../../components/logger')
const DataLayer = require('./livechat.datalayer')
const TAG = '/api/v1/kibochat/livechat/livechat.controller.js'

const util = require('util')

exports.index = function (req, res) {
  logger.serverLog(TAG, `Index endpoint is hit:`)
  DataLayer.findAllLiveChatObjects()
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.create = function (req, res) {
  console.log('Create endpoint is hit:', req.body)

  DataLayer.createOneLiveChatObject(req.body)
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

  DataLayer.findLiveChatUsingQuery(req.body)
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

  DataLayer.updateLiveChat(req.body)
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

  DataLayer.deleteLiveChat(req.body)
    .then(result => {
      res.status(200).json({status: 'success', payload: result})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Delete Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}
