/*
This file will contain the functions for logic layer.
By separating it from controller, we are separating the concerns.
Thus we can use it from other non express callers like cron etc
*/
const mongoose = require('mongoose')

exports.validateCreateCategoryPayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = ['name', 'userId', 'companyId']
  let arrayOfKeys = Object.keys(body)

  arrayOfRequiredFields.forEach((field, index) => {
    if (!arrayOfKeys.includes(field)) {
      bool = false
    }
  })

  return bool
}

exports.validateCreateBotTemplatePayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = ['title', 'category', 'payload', 'userId', 'companyId']
  let arrayOfKeys = Object.keys(body)

  arrayOfRequiredFields.forEach((field, index) => {
    if (!arrayOfKeys.includes(field)) {
      bool = false
    }
  })

  return bool
}

exports.validateCreateBroadcastTemplatePayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = ['title', 'category', 'payload', 'userId', 'companyId']
  let arrayOfKeys = Object.keys(body)

  arrayOfRequiredFields.forEach((field, index) => {
    if (!arrayOfKeys.includes(field)) {
      bool = false
    }
  })

  return bool
}

exports.validateCreatePollTemplatePayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = ['title', 'statement', 'options', 'category']
  let arrayOfKeys = Object.keys(body)

  arrayOfRequiredFields.forEach((field, index) => {
    if (!arrayOfKeys.includes(field)) {
      bool = false
    }
  })

  return bool
}

exports.validateCreateSurveyQuestionTemplatePayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = ['statement', 'surveyId', 'options']
  let arrayOfKeys = Object.keys(body)

  arrayOfRequiredFields.forEach((field, index) => {
    if (!arrayOfKeys.includes(field)) {
      bool = false
    }
  })

  return bool
}

exports.validateCreateSurveyTemplatePayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = ['title', 'description', 'category']
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
    if (body.match.datetime) {
      if (body.match.datetime.$gte) {
        body.match.datetime.$gte = new Date(body.match.datetime.$gte)
      }
      if (body.match.datetime.$lt) {
        body.match.datetime.$lt = new Date(body.match.datetime.$lt)
      }
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

  if (body.skip) query.push({$skip: body.skip})
  if (body.sort) query.push({$sort: body.sort})
  if (body.limit) query.push({$limit: body.limit})

  return query
}
