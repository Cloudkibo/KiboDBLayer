/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const LiveChatModel = require('./livechat.model')

exports.find = (criteria = {}) => {
  return LiveChatModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return LiveChatModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return LiveChatModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return LiveChatModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return LiveChatModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return LiveChatModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new LiveChatModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return LiveChatModel.aggregate(query)
    .exec()
}
