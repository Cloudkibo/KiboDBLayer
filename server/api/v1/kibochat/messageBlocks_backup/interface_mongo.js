/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const MessageBlocksBackupModel = require('./model')

exports.find = (criteria = {}) => {
  return MessageBlocksBackupModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return MessageBlocksBackupModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return MessageBlocksBackupModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return MessageBlocksBackupModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return MessageBlocksBackupModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return MessageBlocksBackupModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new MessageBlocksBackupModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return MessageBlocksBackupModel.aggregate(query)
    .exec()
}
