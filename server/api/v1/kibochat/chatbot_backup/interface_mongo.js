/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const ChatbotBackupModel = require('./model')

exports.find = (criteria = {}) => {
  return ChatbotBackupModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return ChatbotBackupModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return ChatbotBackupModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return ChatbotBackupModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return ChatbotBackupModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return ChatbotBackupModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new ChatbotBackupModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return ChatbotBackupModel.aggregate(query)
    .exec()
}
