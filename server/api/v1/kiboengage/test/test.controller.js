// Web layer of this API node
const logger = require('../../../../components/logger')
const DataLayer = require('./test.datalayer')
const TAG = '/api/v1/kiboengage/test/index.js'

exports.index = function (req, res) {
  DataLayer.CreateOneTestObject(req.body.message)
    .then(createdMessage => {
      res.status(200).json({status: 'success', payload: createdMessage})
    })
    .catch(err => {
      const message = err || 'Failed to find test object'
      logger.serverLog(message, `${TAG}: exports.index`, req.body, {}, 'error')
    })
}
