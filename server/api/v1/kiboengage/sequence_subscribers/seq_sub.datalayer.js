/*
This file will contain the functions for data layer.
By separating it from controller, we are separating the concerns.
Thus we can use it from other non express callers like cron etc
*/
const LogicLayer = require('./seq_sub.logiclayer')
const MongoInterface = require('./seqsub_interface_mongo')
const logger = require('../../../../components/logger')
const TAG = '/api/v1/kiboengage/sequence_subscriber/seq_sub.datalayer.js'

const util = require('util')

exports.findAllSeqSubObjects = () => {
  return MongoInterface.find()
}

exports.createOneSequenceObject = (body) => {
  if (LogicLayer.validateCreatePayload(body)) return MongoInterface.create(body)
  else return new Promise((resolve, reject) => { reject(new Error('Payload is not valid')) })
}

exports.updateSeqSub = (body) => {
  if (body.purpose) {
    let query = body.match
    let updated = body.updated
    let options = {}
    if (body.upsert) options.upsert = body.upsert
    if (body.new) options.new = body.new
    // If purpose found, then proceed
    if (body.purpose === 'updateOne') {
      return MongoInterface.findOneAndUpdate(query, updated, options)
    } else if (body.purpose === 'updateAll') {
      // Can updated multiple record matching the query
      return MongoInterface.updateMany(query, updated, options)
    } else {
      return new Promise((resolve, reject) => { reject(new Error('Correct Purpose Not Found')) })
    }
  } else {
    // If purpose not found, then reject
    return new Promise((resolve, reject) => { reject(new Error('Purpose Not Found')) })
  }
}

exports.findSeqSubUsingQuery = (body) => {
  if (body.purpose) {
    // If purpose found, then proceed
    if (body.purpose === 'aggregate') {
      let aggregateQuery = LogicLayer.prepareMongoAggregateQuery(body)
      // If not validated
      if (typeof aggregateQuery === 'string') return new Promise((resolve, reject) => { reject(new Error(aggregateQuery)) })
      else return MongoInterface.aggregate(aggregateQuery)
    } else if (body.purpose === 'findOne') {
      // Reject if match criteria not found
      if (!body.match) return new Promise((resolve, reject) => { reject(new Error('Match Criteria Not Found')) })
      else return MongoInterface.findOne(body.match)
    } else if (body.purpose === 'findAll') {
      // Reject if match criteria not found
      if (!body.match) return new Promise((resolve, reject) => { reject(new Error('Match Criteria Not Found')) })
      else return MongoInterface.find(body.match)
    } else {
      return new Promise((resolve, reject) => { reject(new Error('Correct Purpose Not Found')) })
    }
  } else {
    // If purpose not found, then reject
    return new Promise((resolve, reject) => { reject(new Error('Purpose Not Found')) })
  }
}

exports.deleteSeqSub = (body) => {
  if (body.purpose) {
    let query = body.match
    // If purpose found, then proceed
    if (body.purpose === 'deleteOne') {
      return MongoInterface.deleteOne(query)
    } else if (body.purpose === 'deleteMany') {
      return MongoInterface.deleteMany(query)
    } else {
      return new Promise((resolve, reject) => { reject(new Error('Correct Purpose Not Found')) })
    }
  } else {
    // If purpose not found, then reject
    return new Promise((resolve, reject) => { reject(new Error('Purpose Not Found')) })
  }
}
