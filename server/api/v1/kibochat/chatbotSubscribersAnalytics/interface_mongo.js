/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const ChatBotSubscribersAnalytics = require('./chatbot_subscribers_analytics.model.js')

exports.find = (criteria = {}) => {
  return ChatBotSubscribersAnalytics.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return ChatBotSubscribersAnalytics.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return ChatBotSubscribersAnalytics.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return ChatBotSubscribersAnalytics.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return ChatBotSubscribersAnalytics.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return ChatBotSubscribersAnalytics.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new ChatBotSubscribersAnalytics(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return ChatBotSubscribersAnalytics.aggregate(query)
    .exec()
}
