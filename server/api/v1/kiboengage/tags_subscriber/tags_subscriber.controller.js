// Web layer of this API node
const logger = require('../../../../components/logger')
const DataLayer = require('./tags_subscriber.datalayer')
const TAG = '/api/v1/kiboengage/tags_subscriber/tags_subscriber.controller.js'

exports.index = function (req, res) {
  DataLayer.findAllTagSubscriberObjects()
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      const message = err || 'Failed to find all tag subs'
      logger.serverLog(message, `${TAG}: exports.index`, req.body, {}, 'error')
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.create = function (req, res) {
  DataLayer.createOneTagSubscriberObject(req.body)
    .then(createdObject => {
      res.status(200).json({status: 'success', payload: createdObject})
    })
    .catch(err => {
      const message = err || 'Failed to create tag sub'
      logger.serverLog(message, `${TAG}: exports.create`, req.body, {}, 'error')
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.query = function (req, res) {
  DataLayer.findTagSubscriberUsingQuery(req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      const message = err || 'Failed to find tag subs'
      logger.serverLog(message, `${TAG}: exports.query`, req.body, {}, 'error')
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.update = function (req, res) {
  DataLayer.updateTagSubscriber(req.body)
    .then(foundObjects => {
      res.status(200).json({status: 'success', payload: foundObjects})
    })
    .catch(err => {
      const message = err || 'Failed to update tag sub'
      logger.serverLog(message, `${TAG}: exports.update`, req.body, {}, 'error')
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}

exports.delete = function (req, res) {
  DataLayer.deleteTagSubscriber(req.body)
    .then(result => {
      res.status(200).json({status: 'success', payload: result})
    })
    .catch(err => {
      const message = err || 'Failed to delete tag sub'
      logger.serverLog(message, `${TAG}: exports.delete`, req.body, {}, 'error')
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}
