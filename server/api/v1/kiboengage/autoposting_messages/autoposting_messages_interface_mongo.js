/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const AutopostingMessagesModel = require('./autoposting_messages.model')

exports.find = (criteria = {}) => {
  return AutopostingMessagesModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return AutopostingMessagesModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return AutopostingMessagesModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return AutopostingMessagesModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return AutopostingMessagesModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return AutopostingMessagesModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new AutopostingMessagesModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return AutopostingMessagesModel.aggregate(query)
    .exec()
}
