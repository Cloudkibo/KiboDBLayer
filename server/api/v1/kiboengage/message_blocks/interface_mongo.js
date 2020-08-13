/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const MessageBlocksModel = require('./messageBlocks.model')

exports.find = (criteria = {}) => {
  return MessageBlocksModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return MessageBlocksModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return MessageBlocksModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return MessageBlocksModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return MessageBlocksModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return MessageBlocksModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new MessageBlocksModel(payload)
  return obj.save()
}

exports.createBulk = (payload) => {
  return MessageBlocksModel.insertMany(payload)
}

exports.aggregate = (query) => {
  return MessageBlocksModel.aggregate(query)
    .exec()
}
