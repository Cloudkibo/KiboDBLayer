const logger = require('../../../../components/logger')
const DataLayer = require('./smsBroadcasts.datalayer')
const TAG = '/api/v1/kiboengage/smsBroadcasts/smsBroadcasts.controller.js'

const util = require('util')

exports.create = function (req, res) {
  logger.serverLog(TAG, `Create endpoint is hit:`)

  DataLayer.createOneBroadcastObject(req.body)
    .then(createdObject => {
      res.status(200).json({status: 'success', payload: createdObject})
    })
    .catch(err => {
      logger.serverLog(TAG, `Error found create Controller : ${util.inspect(err)}`)
      res.status(500).json({status: 'failed', payload: err.toString()})
    })
}
