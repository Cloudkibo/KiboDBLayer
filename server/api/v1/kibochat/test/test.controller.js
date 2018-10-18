// Web layer of this API node
const logger = require('../../../../components/logger')
const DataLayer = require('./test.datalayer')
const TAG = '/api/v1/kibochat/test/index.js'

const util = require('util')

exports.index = function (req, res) {
  logger.serverLog(TAG, `Query object is : ${util.inspect(req.body)}`)
  DataLayer.CreateOneTestObject(req.body.message)
    .then(createdMessage => {
      res.status(200).json({status: 'success', payload: createdMessage})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found Index Controller : ${util.inspect(err)}`)
    })
}
