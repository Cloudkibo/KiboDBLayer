/*
This file will contain the functions for logic layer.
By separating it from controller, we are separating the concerns.
Thus we can use it from other non express callers like cron etc
*/
exports.validateCreateBotPayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = [
    'pageId',
    'userId',
    'companyId',
    'botName',
    'gcpPojectId',
    'dialogFlowAgentId',
    'hitCount',
    'missCount'
  ]
  let arrayOfKeys = Object.keys(body)

  arrayOfRequiredFields.forEach((field, index) => {
    if (!arrayOfKeys.includes(field)) {
      bool = false
    }
  })

  return bool
}

exports.validateCreateAnswerPayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = [
    'botId',
    'intentId',
    'questions',
    'answer']
  let arrayOfKeys = Object.keys(body)

  arrayOfRequiredFields.forEach((field, index) => {
    if (!arrayOfKeys.includes(field)) {
      bool = false
    }
  })

  return bool
}

exports.validateCreateUnansweredPayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = [
    'botId',
    'Question']
  let arrayOfKeys = Object.keys(body)

  arrayOfRequiredFields.forEach((field, index) => {
    if (!arrayOfKeys.includes(field)) {
      bool = false
    }
  })

  return bool
}

exports.validateCreateWaitingPayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = [
    'botId',
    'subscriberId',
    'pageId',
    'intentId',
    'question'
  ]
  let arrayOfKeys = Object.keys(body)

  arrayOfRequiredFields.forEach((field, index) => {
    if (!arrayOfKeys.includes(field)) {
      bool = false
    }
  })

  return bool
}

exports.prepareMongoAggregateQuery = (body, requester) => {
  let query = []

  if (requester.waitingSubscribers) {
    query = body.match
  } else {
    if (body.match) {
      if (body.match.datetime) {
        if (body.match.datetime.$gte) {
          body.match.datetime.$gte = new Date(body.match.datetime.$gte)
        }
        if (body.match.datetime.$lt) {
          body.match.datetime.$lt = new Date(body.match.datetime.$lt)
        }
      }
      query.push({$match: body.match})
    } else return 'Match Criteria Not Found'

    if (body.group) {
      if (!Object.keys(body.group).includes('_id')) return '_id is missing in Group Criteria'
      else query.push({$group: body.group})
    }

    if (body.skip) query.push({$skip: body.skip})
    if (body.sort) query.push({$sort: body.sort})
    if (body.limit) query.push({$limit: body.limit})
  }

  return query
}
