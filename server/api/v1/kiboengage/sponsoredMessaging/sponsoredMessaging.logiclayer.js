/*
This file will contain the functions for logic layer.
By separating it from controller, we are separating the concerns.
Thus we can use it from other non express callers like cron etc
*/
const mongoose = require('mongoose')

exports.validateCreatePayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = ['userId', 'companyId', 'pageId', 'adName', 'status']
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
      if (body.match._id.$ne) {
        body.match._id.$ne = mongoose.Types.ObjectId(body.match._id.$ne)
      }
    }
    query.push({$match: body.match})
  } else return 'Match Criteria Not Found'

  if (body.group) {
    if (!Object.keys(body.group).includes('_id')) return '_id is missing in Group Criteria'
    else query.push({$group: body.group})
  }

  if (body.lookup) query.push({$lookup: body.lookup})
  if (body.skip) query.push({$skip: body.skip})
  if (body.sort) query.push({$sort: body.sort})
  if (body.limit) query.push({$limit: body.limit})
  if (body.project) query.push({$project: body.project})
  if (body.projectAgain) query.push({$project: body.projectAgain})
  return query
}
