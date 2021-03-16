const SuperNumberMessageLogsModel = require('./model')

exports.find = (criteria = {}) => {
  return SuperNumberMessageLogsModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return SuperNumberMessageLogsModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return SuperNumberMessageLogsModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return SuperNumberMessageLogsModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return SuperNumberMessageLogsModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return SuperNumberMessageLogsModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new SuperNumberMessageLogsModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return SuperNumberMessageLogsModel.aggregate(query)
    .exec()
}
