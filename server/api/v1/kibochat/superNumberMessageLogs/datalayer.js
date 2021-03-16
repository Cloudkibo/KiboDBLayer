const LogicLayer = require('./logiclayer')
const MongoInterface = require('./interface_mongo')

exports.findAll = () => {
  return MongoInterface.find()
}

exports.createOne = (body) => {
  return MongoInterface.create(body)
}

exports.update = (body) => {
  if (body.purpose) {
    let query = body.match
    let updated = body.updated
    let options = {}
    if (body.upsert) options.upsert = body.upsert
    if (body.new) options.new = body.new
    if (body.purpose === 'updateOne') {
      return MongoInterface.findOneAndUpdate(query, updated, options)
    } else if (body.purpose === 'updateAll') {
      return MongoInterface.updateMany(query, updated, options)
    } else {
      return new Promise((resolve, reject) => { reject(new Error('Correct Purpose Not Found')) })
    }
  } else {
    return new Promise((resolve, reject) => { reject(new Error('Purpose Not Found')) })
  }
}

exports.findUsingQuery = (body) => {
  if (body.purpose) {
    if (body.purpose === 'aggregate') {
      let aggregateQuery = LogicLayer.prepareMongoAggregateQuery(body)
      if (typeof aggregateQuery === 'string') return new Promise((resolve, reject) => { reject(new Error(aggregateQuery)) })
      else return MongoInterface.aggregate(aggregateQuery)
    } else if (body.purpose === 'findOne') {
      if (!body.match) return new Promise((resolve, reject) => { reject(new Error('Match Criteria Not Found')) })
      else return MongoInterface.findOne(body.match)
    } else if (body.purpose === 'findAll') {
      if (!body.match) return new Promise((resolve, reject) => { reject(new Error('Match Criteria Not Found')) })
      else return MongoInterface.find(body.match)
    } else {
      return new Promise((resolve, reject) => { reject(new Error('Correct Purpose Not Found')) })
    }
  } else {
    return new Promise((resolve, reject) => { reject(new Error('Purpose Not Found')) })
  }
}

exports.delete = (body) => {
  if (body.purpose) {
    let query = body.match
    if (body.purpose === 'deleteOne') {
      return MongoInterface.deleteOne(query)
    } else if (body.purpose === 'deleteMany') {
      return MongoInterface.deleteMany(query)
    } else {
      return new Promise((resolve, reject) => { reject(new Error('Correct Purpose Not Found')) })
    }
  } else {
    return new Promise((resolve, reject) => { reject(new Error('Purpose Not Found')) })
  }
}
