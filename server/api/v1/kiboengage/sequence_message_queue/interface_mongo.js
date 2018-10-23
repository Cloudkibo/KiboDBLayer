/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const SequenceMessageQueueModel = require('./seq_m_queue.model')

exports.find = (criteria = {}) => {
  return SequenceMessageQueueModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return SequenceMessageQueueModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return SequenceMessageQueueModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return SequenceMessageQueueModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return SequenceMessageQueueModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return SequenceMessageQueueModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new SequenceMessageQueueModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return SequenceMessageQueueModel.aggregate(query)
    .exec()
}
