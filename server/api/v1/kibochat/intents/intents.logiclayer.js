/*
This file will contain the functions for logic layer.
By separating it from controller, we are separating the concerns.
Thus we can use it from other non express callers like cron etc
*/
const mongoose = require('mongoose')

exports.validateCreatePayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = ['botId', 'name']
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

  if (body.match) {
    if (body.match.datetime && body.match.datetime.$gte && body.match.datetime.$lt) {
      body.match.datetime.$gte = new Date(body.match.datetime.$gte)
      body.match.datetime.$lt = new Date(body.match.datetime.$lt)
      query.push({$match: body.match})
    } else if (body.match.botId && !body.match.botId.$exists) {
      body.match.botId = mongoose.Types.ObjectId(body.match.botId)
    } else query.push({$match: body.match})
  } else return 'Match Criteria Not Found'

  if (body.group) {
    if (!Object.keys(body.group).includes('_id')) return '_id is missing in Group Criteria'
    else query.push({$group: body.group})
  }

  if (body.skip) query.push({$skip: body.skip})
  if (body.sort) query.push({$sort: body.sort})
  if (body.limit) query.push({$limit: body.limit})

  return query
}
