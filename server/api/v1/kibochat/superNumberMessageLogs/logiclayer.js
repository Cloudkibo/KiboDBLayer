exports.prepareMongoAggregateQuery = (body) => {
  let query = []
  if (body.project) {
    query.push({$project: body.project})
  }
  if (body.match) {
    if (body.match.datetime && body.match.datetime.$gte && body.match.datetime.$lt) {
      body.match.datetime.$gte = new Date(body.match.datetime.$gte)
      body.match.datetime.$lt = new Date(body.match.datetime.$lt)
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
