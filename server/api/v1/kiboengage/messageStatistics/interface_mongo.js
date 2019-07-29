/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const MessageStatisticsModel = require('./messageStatistics.model')

exports.find = (criteria = {}) => {
  return MessageStatisticsModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return MessageStatisticsModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return MessageStatisticsModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return MessageStatisticsModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return MessageStatisticsModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return MessageStatisticsModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new MessageStatisticsModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return MessageStatisticsModel.aggregate(query)
    .exec()
}
