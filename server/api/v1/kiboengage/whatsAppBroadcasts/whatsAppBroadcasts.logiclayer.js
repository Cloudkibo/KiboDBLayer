const mongoose = require('mongoose')

exports.validateCreatePayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = [
    'platform',
    'payload',
    'title',
    'userId',
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
  let query = []

  if (body.match) {
    console.log('body.match', JSON.stringify(body.match))
    if (body.match.datetime) {
      if (body.match.datetime.$gte) {
        body.match.datetime.$gte = new Date(body.match.datetime.$gte)
      }
      if (body.match.datetime.$lt) {
        body.match.datetime.$lt = new Date(body.match.datetime.$lt)
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
    if (body.match.title) {
      if (body.match.title.$regex) {
        body.match.title.$regex = new RegExp('.*' + body.match.title.$regex + '.*', 'i')
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

  return query
}
