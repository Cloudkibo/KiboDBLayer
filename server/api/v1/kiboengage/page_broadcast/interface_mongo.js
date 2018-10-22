/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const PageBroadcastModel = require('./page_broadcast.model')

exports.find = (criteria = {}) => {
  return PageBroadcastModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return PageBroadcastModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return PageBroadcastModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return PageBroadcastModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return PageBroadcastModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return PageBroadcastModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new PageBroadcastModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return PageBroadcastModel.aggregate(query)
    .exec()
}
