const SuperNumberWidgetAnalyticsModel = require('./model')

exports.find = (criteria = {}) => {
  return SuperNumberWidgetAnalyticsModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return SuperNumberWidgetAnalyticsModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return SuperNumberWidgetAnalyticsModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return SuperNumberWidgetAnalyticsModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return SuperNumberWidgetAnalyticsModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return SuperNumberWidgetAnalyticsModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new SuperNumberWidgetAnalyticsModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return SuperNumberWidgetAnalyticsModel.aggregate(query)
    .exec()
}
