/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const WhatsAppBotAnalyticsModel = require('./whatsapp_bot_analytics.model')

exports.find = (criteria = {}) => {
  return WhatsAppBotAnalyticsModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return WhatsAppBotAnalyticsModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return WhatsAppBotAnalyticsModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return WhatsAppBotAnalyticsModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return WhatsAppBotAnalyticsModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return WhatsAppBotAnalyticsModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new WhatsAppBotAnalyticsModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return WhatsAppBotAnalyticsModel.aggregate(query)
    .exec()
}
