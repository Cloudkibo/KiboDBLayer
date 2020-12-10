/*
This file will contain the functions for logic layer.
By separating it from controller, we are separating the concerns.
Thus we can use it from other non express callers like cron etc
*/
const mongoose = require('mongoose')

exports.validateCreatePayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = [
    'sender_id',
    'recipient_id',
    'sender_fb_id',
    'recipient_fb_id',
    'subscriber_id',
    'company_id',
    'status',
    'payload'
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
    if (Object.keys(body.match).includes('session_id')) {
      body.match.session_id = mongoose.Types.ObjectId(body.match.session_id)
    }
    if (Object.keys(body.match).includes('_id') && body.match._id.$lt) {
      body.match._id.$lt = mongoose.Types.ObjectId(body.match._id.$lt)
    }
    if (body.match.datetime) {
      if (body.match.datetime.$gte) {
        console.log('inside if')
        body.match.datetime.$gte = new Date(body.match.datetime.$gte)
      }
      if (body.match.datetime.$lt) {
        body.match.datetime.$lt = new Date(body.match.datetime.$lt)
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

  if (body.skip) query.push({$skip: body.skip})
  if (body.sort) query.push({$sort: body.sort})
  if (body.limit) query.push({$limit: body.limit})

  return query
}

const _convertIntoObjectId = (field) => {
  if (typeof field === 'string') {
    return mongoose.Types.ObjectId(field)
  } else if (typeof field === 'object') {
    if (field.$lt) field.$lt = mongoose.Types.ObjectId(field.$lt)
    else if (field.$gt) field.$gt = mongoose.Types.ObjectId(field.$gt)
    return field
  }
}

const _convertIntoDatetime = (field) => {
  if (typeof field === 'string') {
    return new Date(field)
  } else if (typeof field === 'object') {
    if (field.$lt) field.$lt = new Date(field.$lt)
    else if (field.$gt) field.$gt = new Date(field.$gt)
    return field
  }
}

exports.validateAndConvert = (body) => {
  let query = body
  body.forEach((item, i) => {
    if (item.$match && typeof item.$match === 'object' && Object.keys(item.$match).length > 0) {
      if (item.$match._id) query[i].$match._id = _convertIntoObjectId(item.$match._id)
      if (item.$match.datetime) query[i].$match.datetime = _convertIntoDatetime(item.$match.datetime)
      if (item.$match.$and) {
        item.$match.$and.forEach((elem, j) => {
          if (elem._id) query[i].$match.$and[j]._id = _convertIntoObjectId(elem._id)
        })
      }
      if (item.$match.$or) {
        item.$match.$or.forEach((elem, j) => {
          if (elem._id) query[i].$match.$or[j]._id = _convertIntoObjectId(elem._id)
        })
      }
    } else if (item.$group && typeof item.$group === 'object' && Object.keys(item.$group).length > 0) {
      if (!Object.keys(item.$group).includes('_id')) return '_id is missing in Group Criteria'
    }
  })
  return query
}
