// Web layer of this API node
const logger = require('../../../../components/logger')
const DataLayer = require('./test.datalayer')
const TAG = '/api/v1/kibochat/test/index.js'

// const util = require('util')

exports.index = function (req, res) {
  DataLayer.CreateOneTestObject(req.body.message)
    .then(createdMessage => {
      res.status(200).json({status: 'success', payload: createdMessage})
    })
    .catch(err => {
      const message = err || 'Failed to find all test'
      logger.serverLog(message, `${TAG}: exports.index`, req.body, {}, 'error')
    })
}
