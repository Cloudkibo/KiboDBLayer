/*
This file will contain the functions for data layer.
By separating it from controller, we are separating the concerns.
Thus we can use it from other non express callers like cron etc
*/
const LogicLayer = require('./smart_replies.logiclayer')
const MongoInterface = require('./interface_mongo')
const logger = require('../../../../components/logger')
const TAG = '/api/v1/kiboengage/smart_replies/smart_replies.datalayer.js'

const util = require('util')

exports.findAllObjects = (Model) => {
  return MongoInterface.find(Model)
}

exports.createOneSmartReplyObject = (Model, body) => {
  if (LogicLayer.validateCreateBotPayload(body)) return MongoInterface.create(Model, body)
  else return new Promise((resolve, reject) => { reject(new Error('Payload is not valid')) })
}

exports.createOneAnswerObject = (Model, body) => {
  if (LogicLayer.validateCreateAnswerPayload(body)) return MongoInterface.create(Model, body)
  else return new Promise((resolve, reject) => { reject(new Error('Payload is not valid')) })
}

exports.createOneUnansweredObject = (Model, body) => {
  if (LogicLayer.validateCreateUnansweredPayload(body)) return MongoInterface.create(Model, body)
  else return new Promise((resolve, reject) => { reject(new Error('Payload is not valid')) })
}

exports.createOneWaitingSubscriberObject = (Model, body) => {
  if (LogicLayer.validateCreateWaitingPayload(body)) return MongoInterface.create(Model, body)
  else return new Promise((resolve, reject) => { reject(new Error('Payload is not valid')) })
}

exports.update = (Model, body) => {
  if (body.purpose) {
    let query = body.match
    let updated = body.updated
    let options = {}
    if (body.upsert) options.upsert = body.upsert
    if (body.new) options.new = body.new
    // If purpose found, then proceed
    if (body.purpose === 'updateOne') {
      return MongoInterface.findOneAndUpdate(Model, query, updated, options)
    } else if (body.purpose === 'updateAll') {
      // Can updated multiple record matching the query
      return MongoInterface.updateMany(Model, query, updated, options)
    } else {
      return new Promise((resolve, reject) => { reject(new Error('Correct Purpose Not Found')) })
    }
  } else {
    // If purpose not found, then reject
    return new Promise((resolve, reject) => { reject(new Error('Purpose Not Found')) })
  }
}

exports.findUsingQuery = (Model, body, requester) => {
  if (body.purpose) {
    // If purpose found, then proceed
    if (body.purpose === 'aggregate') {
      let aggregateQuery = LogicLayer.prepareMongoAggregateQuery(body, requester)
      // If not validated
      logger.serverLog(TAG, `Inside Aggregate: ${util.inspect(aggregateQuery)}`)
      if (typeof aggregateQuery === 'string') return new Promise((resolve, reject) => { reject(new Error(aggregateQuery)) })
      else return MongoInterface.aggregate(Model, aggregateQuery)
    } else if (body.purpose === 'findOne') {
      // Reject if match criteria not found
      if (!body.match) return new Promise((resolve, reject) => { reject(new Error('Match Criteria Not Found')) })
      else return MongoInterface.findOne(Model, body.match)
    } else if (body.purpose === 'findAll') {
      // Reject if match criteria not found
      if (!body.match) return new Promise((resolve, reject) => { reject(new Error('Match Criteria Not Found')) })
      else return MongoInterface.find(Model, body.match)
    } else {
      return new Promise((resolve, reject) => { reject(new Error('Correct Purpose Not Found')) })
    }
  } else {
    // If purpose not found, then reject
    return new Promise((resolve, reject) => { reject(new Error('Purpose Not Found')) })
  }
}

exports.delete = (Model, body) => {
  if (body.purpose) {
    let query = body.match
    // If purpose found, then proceed
    if (body.purpose === 'deleteOne') {
      return MongoInterface.deleteOne(Model, query)
    } else if (body.purpose === 'deleteMany') {
      return MongoInterface.deleteMany(Model, query)
    } else {
      return new Promise((resolve, reject) => { reject(new Error('Correct Purpose Not Found')) })
    }
  } else {
    // If purpose not found, then reject
    return new Promise((resolve, reject) => { reject(new Error('Purpose Not Found')) })
  }
}
