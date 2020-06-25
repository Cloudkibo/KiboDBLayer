const ChatbotModel = require('../../kibochat/chatbot/chatbot.model')

const async = require('async')
const logger = require('../../../../components/logger')
const TAG = '/api/v1/scripts/chatbot/controller.js'
const { callApi } = require('../apiCaller')

exports.normalizeTriggers = function (req, res) {
  ChatbotModel.aggregate([
    {$skip: req.body.skip},
    {$limit: req.body.limit}
  ]).exec()
    .then(bots => {
      if (bots.length > 0) {
        async.each(bots, function (bot, cb) {
          callApi('messageBlocks', 'put', {purpose: 'updateOne', match: {_id: bot.startingBlockId}, updated: {triggers: bot.triggers}}, 'kiboengage')
            .then(updated => {
              cb()
            })
            .catch(err => {
              logger.serverLog(TAG, err, 'error')
              cb(err)
            })
        }, function (err) {
          if (err) {
            logger.serverLog(TAG, err, 'error')
            return res.status(500).json({status: 'failed', description: 'Failed to normalize chatbot triggers'})
          } else {
            return res.status(200).json({status: 'success'})
          }
        })
      } else {
        return res.status(200).json({status: 'success', description: 'No chatbot found'})
      }
    })
    .catch(err => {
      logger.serverLog(TAG, err, 'error')
      return res.status(500).json({status: 'failed', description: 'Failed to fetch chatbot'})
    })
}
