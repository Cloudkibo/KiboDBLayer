/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const MessageModel = require('./message.model')

exports.find = (criteria = {}) => {
  return MessageModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return MessageModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return MessageModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return MessageModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return MessageModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return MessageModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new MessageModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return MessageModel.aggregate(query)
    .exec()
}
