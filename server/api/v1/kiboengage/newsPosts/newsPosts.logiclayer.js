/*
This file will contain the functions for logic layer.
By separating it from controller, we are separating the concerns.
Thus we can use it from other non express callers like cron etc
*/
const mongoose = require('mongoose')
const logger = require('../../../../components/logger')
const TAG = '/api/v1/kiboengage/newsPosts/newsPosts.datalayer.js'

exports.validateCreatePayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = ['newsSectionId', 'companyId', 'pageId']
  let arrayOfKeys = Object.keys(body)

  arrayOfRequiredFields.forEach((field, index) => {
    if (!arrayOfKeys.includes(field)) {
      bool = false
    }
  })

  return bool
}

exports.prepareMongoAggregateQuery = (body) => {
  let query = []
  if (body.project) query.push({$project: body.project})
  if (body.match) {
    if (body.match.datetime) {
      if (body.match.datetime.$gte) {
        body.match.datetime.$gte = new Date(body.match.datetime.$gte)
      }
      if (body.match.datetime.$lt) {
        body.match.datetime.$lt = new Date(body.match.datetime.$lt)
      }
    }
    if (body.match.newsSectionId) {
      body.match.newsSectionId = mongoose.Types.ObjectId(body.match.newsSectionId)
    }
    if (body.match.$and) {
      if (body.match.$and[1]._id) {
        if (body.match.$and[1]._id.$lt) {
          body.match.$and[1]._id.$lt = mongoose.Types.ObjectId(body.match.$and[1]._id.$lt)
        }
        if (body.match.$and[1]._id.$gt) {
          body.match.$and[1]._id.$gt = mongoose.Types.ObjectId(body.match.$and[1]._id.$gt)
        }
      }
    }
    if (body.match._id) {
      if (body.match._id.$lt) {
        body.match._id.$lt = mongoose.Types.ObjectId(body.match._id.$lt)
      }
      if (body.match._id.$gt) {
        body.match._id.$gt = mongoose.Types.ObjectId(body.match._id.$gt)
      }
    }
    query.push({$match: body.match})
  } else {
    return 'Match Criteria Not Found'
  }
  if (body.lookup) query.push({$lookup: body.lookup})
  if (body.unwind) query.push({$unwind: body.unwind})
  if (body.group) {
    if (!Object.keys(body.group).includes('_id')) return '_id is missing in Group Criteria'
    else query.push({$group: body.group})
  }

  if (body.sort) query.push({$sort: body.sort})
  if (body.skip) query.push({$skip: body.skip})
  if (body.limit) query.push({$limit: body.limit})
  if (body.lookup1) query.push({$lookup: body.lookup1})
  logger.serverLog(TAG, `final query: ${JSON.stringify(query)}`)
  return query
}
