/*
This file will contain the functions for logic layer.
By separating it from controller, we are separating the concerns.
Thus we can use it from other non express callers like cron etc
*/
const mongoose = require('mongoose')

exports.prepareMongoAggregateQuery = (body) => {
  let query = []

  if (body.match) {
    if (body.match.datetime) {
      if (body.match.datetime.$gte) {
        body.match.datetime.$gte = new Date(body.match.datetime.$gte)
      }
      if (body.match.datetime.$lt) {
        body.match.datetime.$lt = new Date(body.match.datetime.$lt)
      }
      if (body.match._id) {
        if (body.match._id.$lt) {
          body.match._id.$lt = mongoose.Types.ObjectId(body.match._id.$lt)
        }
        if (body.match._id.$gt) {
          body.match._id.$gt = mongoose.Types.ObjectId(body.match._id.$gt)
        }
      }
    }
    if (body.match.$and && body.match.$and[0]) {
      if (body.match.$and[0].datetime) {
        if (body.match.$and[0].datetime.$gte) {
          body.match.$and[0].datetime.$gte = new Date(body.match.$and[0].datetime.$gte)
        }
        if (body.match.$and[0].datetime.$lt) {
          body.match.$and[0].datetime.$lt = new Date(body.match.$and[0].datetime.$lt)
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
    if (body.match['response.text']) {
      if (body.match['response.text'].$in) {
        body.match['response.text'].$in.forEach((value, index) => {
          body.match['response.text'].$in[index] = new RegExp(value, 'i')
        })
      }
      if (body.match['response.text'].$nin) {
        body.match['response.text'].$nin.forEach((value, index) => {
          body.match['response.text'].$nin[index] = new RegExp(value, 'i')
        })
      }
    }
    query.push({$match: body.match})
  } else {
    return 'Match Criteria Not Found'
  }

  if (body.group) {
    if (!Object.keys(body.group).includes('_id')) return '_id is missing in Group Criteria'
    else query.push({$group: body.group})
  }

  if (body.sort) query.push({$sort: body.sort})
  if (body.skip) query.push({$skip: body.skip})
  if (body.limit) query.push({$limit: body.limit})
  if (body.lookup) query.push({$lookup: body.lookup})

  return query
}
