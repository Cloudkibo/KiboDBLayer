/*
This file will contain the functions for logic layer.
By separating it from controller, we are separating the concerns.
Thus we can use it from other non express callers like cron etc
*/
exports.validateCreatePayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = ['subscriber_id', 'page_id', 'company_id']
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
    if (body.match.request_time && body.match.request_time.$gte && body.match.request_time.$lt) {
      body.match.request_time.$gte = new Date(body.match.request_time.$gte)
      body.match.request_time.$lt = new Date(body.match.request_time.$lt)
      query.push({$match: body.match})
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
