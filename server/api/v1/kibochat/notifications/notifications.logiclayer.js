/*
This file will contain the functions for logic layer.
By separating it from controller, we are separating the concerns.
Thus we can use it from other non express callers like cron etc
*/
const mongoose = require('mongoose')

exports.validateCreatePayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = [
    'message',
    'agentId',
    'companyId'
  ]
  let arrayOfKeys = Object.keys(body)

  arrayOfRequiredFields.forEach((field, index) => {
    if (!arrayOfKeys.includes(field)) {
      bool = false
    }
  })

  return bool
}

exports.prepareMongoAggregateQuery = (body) => {
  let query = body.query

  for (let i = 0; i < query.length; i++) {
    if (query[i].$match) {
      if (query[i].$match._id && typeof query[i].$match._id === 'string') {
        query[i].$match._id = mongoose.Types.ObjectId(query[i].$match._id)
      } else if (query[i].$match._id && typeof query[i].$match._id === 'object') {
        if (query[i].$match._id.$lt) {
          query[i].$match._id.$lt = mongoose.Types.ObjectId(query[i].$match._id.$lt)
        }
        if (query[i].$match._id.$gt) {
          query[i].$match._id.$gt = mongoose.Types.ObjectId(query[i].$match._id.$gt)
        }
      }
    }
  }

  return query
}
