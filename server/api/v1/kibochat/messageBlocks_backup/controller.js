// Web layer of this API node
const logger = require('../../../../components/logger')
const DataLayer = require('./datalayer')
const TAG = '/api/v1/kibochat/messageBlocks_backup/controller.js'

const util = require('util')

exports.index = function (req, res) {
  DataLayer.findAllObjects()
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      const message = err || 'Failed to find all messageBlocks_backup'
      logger.serverLog(message, `${TAG}: exports.index`, req.body, {}, 'error')
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.create = function (req, res) {
  DataLayer.createOneObject(req.body)
    .then(createdObject => {
      res.status(200).json({status: 'success', payload: createdObject})
    })
    .catch(err => {
      const message = err || 'Failed to create messageBlocks_backup'
      logger.serverLog(message, `${TAG}: exports.create`, req.body, {}, 'error')
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.query = function (req, res) {
  DataLayer.findUsingQuery(req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      const message = err || 'Failed to find all messageBlocks_backup'
      logger.serverLog(message, `${TAG}: exports.query`, req.body, {}, 'error')
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.update = function (req, res) {
  DataLayer.update(req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      const message = err || 'Failed to update messageBlocks_backup'
      logger.serverLog(message, `${TAG}: exports.update`, req.body, {}, 'error')
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.delete = function (req, res) {
  DataLayer.delete(req.body)
    .then(result => {
      res.status(200).json({status: 'success', payload: result})
    })
    .catch(err => {
      const message = err || 'Failed to delete messageBlocks_backup'
      logger.serverLog(message, `${TAG}: exports.delete`, req.body, {}, 'error')
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}
