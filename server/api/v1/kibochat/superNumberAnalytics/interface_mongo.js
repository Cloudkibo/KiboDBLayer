const SuperNumberAnalyticsModel = require('./model')

exports.find = (criteria = {}) => {
  return SuperNumberAnalyticsModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return SuperNumberAnalyticsModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return SuperNumberAnalyticsModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return SuperNumberAnalyticsModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return SuperNumberAnalyticsModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return SuperNumberAnalyticsModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new SuperNumberAnalyticsModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return SuperNumberAnalyticsModel.aggregate(query)
    .exec()
}
