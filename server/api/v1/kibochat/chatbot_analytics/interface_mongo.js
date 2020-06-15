/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const ChatBotAnalyticsModel = require('./chatbot_analytics.model')

exports.find = (criteria = {}) => {
  return ChatBotAnalyticsModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return ChatBotAnalyticsModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return ChatBotAnalyticsModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return ChatBotAnalyticsModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return ChatBotAnalyticsModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return ChatBotAnalyticsModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new ChatBotAnalyticsModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return ChatBotAnalyticsModel.aggregate(query)
    .exec()
}
