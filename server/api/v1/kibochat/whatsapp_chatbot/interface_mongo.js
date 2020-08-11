/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const WhatsAppChatbotModel = require('./whatsAppChatbot.model')

exports.find = (criteria = {}) => {
  return WhatsAppChatbotModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return WhatsAppChatbotModel.findOne(criteria)
    .exec()
}

exports.create = (payload) => {
  let obj = new WhatsAppChatbotModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return WhatsAppChatbotModel.aggregate(query)
    .exec()
}
exports.findOneAndUpdate = (query, updated, options) => {
  return WhatsAppChatbotModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return WhatsAppChatbotModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return WhatsAppChatbotModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return WhatsAppChatbotModel.deleteMany(query)
    .exec()
}
