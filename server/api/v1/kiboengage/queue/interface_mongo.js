const QueueModel = require('./queue.model')

exports.find = (criteria = {}) => {
  return QueueModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return QueueModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return QueueModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return QueueModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return QueueModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return QueueModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new QueueModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return QueueModel.aggregate(query)
    .exec()
}
