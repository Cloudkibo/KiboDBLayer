/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const SequenceSubscriberModel = require('./seq_sub.model')

exports.find = (criteria = {}) => {
  return SequenceSubscriberModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return SequenceSubscriberModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return SequenceSubscriberModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return SequenceSubscriberModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return SequenceSubscriberModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return SequenceSubscriberModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new SequenceSubscriberModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return SequenceSubscriberModel.aggregate(query)
    .exec()
}
