/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const BroadcastModel = require('./broadcasts.model')

exports.find = (criteria = {}) => {
  return BroadcastModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return BroadcastModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return BroadcastModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return BroadcastModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return BroadcastModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return BroadcastModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new BroadcastModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return BroadcastModel.aggregate(query)
    .exec()
}
