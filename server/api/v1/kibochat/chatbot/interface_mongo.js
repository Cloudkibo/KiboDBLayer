/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const ChatBotModel = require('./chatbot.model')

exports.find = (criteria = {}) => {
  return ChatBotModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return ChatBotModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return ChatBotModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return ChatBotModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return ChatBotModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return ChatBotModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new ChatBotModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return ChatBotModel.aggregate(query)
    .exec()
}
