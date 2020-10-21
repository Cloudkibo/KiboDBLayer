const ChatbotModel = require('../../kibochat/chatbot/chatbot.model')
const MessageBlocksModel = require('../../kiboengage/message_blocks/messageBlocks.model')

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

exports.normalizeStartingBlockIds = function (req, res) {
  ChatbotModel.aggregate([
    {$skip: req.body.skip},
    {$limit: req.body.limit}
  ]).exec()
    .then(bots => {
      if (bots.length > 0) {
        async.each(bots, _updateStartingBlockId, (err) => {
          if (err) {
            logger.serverLog(TAG, err, 'error')
            return res.status(500).json({status: 'failed', description: 'Failed to normalize startingBlockIds'})
          } else {
            return res.status(200).json({status: 'success', description: 'StartingBlockIds normalized successfully'})
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

const _updateStartingBlockId = (bot, cb) => {
  callApi('messageBlocks/query', 'post', {purpose: 'findAll', match: {'module.type': 'chatbot', 'module.id': bot._id}}, 'kiboengage')
    .then(messageBlocks => {
      if (messageBlocks.length > 0) {
        if (messageBlocks[0]._id !== bot.startingBlockId) {
          ChatbotModel.update({_id: bot._id}, {startingBlockId: messageBlocks[0]._id}).exec()
            .then(updated => cb())
            .catch(err => {
              logger.serverLog(TAG, err, 'error')
              cb(err)
            })
        } else {
          cb()
        }
      } else {
        cb()
      }
    })
    .catch(err => {
      logger.serverLog(TAG, err, 'error')
      cb(err)
    })
}

exports.updateTypeOfChatbotsToManual = function (req, res) {
  ChatbotModel.updateMany({}, {type: 'manual'}).exec()
    .then(updated => res.status(200).json({status: 'success', payload: updated}))
    .catch(err => {
      res.status(500).json({status: 'failed', payload: err})
    })
}

exports.normalizeParentBlockTitle = function (req, res) {
  MessageBlocksModel.find({'module.type': 'chatbot'}).exec()
    .then(messageBlocks => {
      if (messageBlocks.length > 0) {
        async.each(messageBlocks, function (messageBlock, cb) {
          if (messageBlock.payload.length > 0) {
            getDataToUpdate(messageBlock)
              .then(updatedMessageBlock => {
                MessageBlocksModel.update({_id: messageBlock._id}, {payload: updatedMessageBlock.payload}).exec()
                  .then(updated => {
                    console.log('updated', updated)
                    cb()
                  })
                  .catch(err => {
                    cb(err)
                  })
              })
              .catch((err) => {
                cb(err)
              })
          } else {
            cb()
          }
        }, function (err) {
          if (err) {
            return res.status(500).json({status: 'failed', description: 'Failed to normalize parent block title'})
          } else {
            return res.status(200).json({status: 'success'})
          }
        })
      } else {
        res.status(200).json({status: 'success', payload: 'normalized successfully'})
      }
    })
    .catch(err => {
      res.status(500).json({status: 'failed', payload: err})
    })
}

function getDataToUpdate (messageBlock) {
  return new Promise((resolve, reject) => {
    async.eachOf(messageBlock.payload, function (payload, key, cb) {
      console.log('payload got', payload)
      console.log('key got', key)
      if (payload.quickReplies && payload.quickReplies.length > 0) {
        getQuickReplyPayload(payload, messageBlock.title)
          .then(quickReplies => {
            console.log('quickReplies', quickReplies)
            messageBlock.payload[key] = payload
            cb()
          })
          .catch((err) => {
            cb(err)
          })
      } else {
        cb()
      }
    }, function (err) {
      if (err) {
        reject(err)
      } else {
        resolve(messageBlock)
      }
    })
  })
}

function getQuickReplyPayload (payload, title) {
  return new Promise((resolve, reject) => {
    async.eachOf(payload.quickReplies, function (quickReply, key, cb) {
      if (quickReply.payload) {
        let quickReplyPayload = JSON.parse(quickReply.payload)
        if (quickReplyPayload[0] && !quickReplyPayload[0].parentBlockTitle) {
          quickReplyPayload[0].parentBlockTitle = title
          payload.quickReplies[key].payload = JSON.stringify(quickReplyPayload)
          cb()
        } else {
          cb()
        }
      } else {
        cb()
      }
    }, function (err) {
      if (err) {
        reject(err)
      } else {
        resolve(payload)
      }
    })
  })
}
