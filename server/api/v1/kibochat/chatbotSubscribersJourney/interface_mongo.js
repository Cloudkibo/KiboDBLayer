/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const ChatBotSubscribersJourney = require('./chatbot_subscribers_journey.model.js')

exports.find = (criteria = {}) => {
  return ChatBotSubscribersJourney.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return ChatBotSubscribersJourney.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return ChatBotSubscribersJourney.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return ChatBotSubscribersJourney.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return ChatBotSubscribersJourney.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return ChatBotSubscribersJourney.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new ChatBotSubscribersJourney(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return ChatBotSubscribersJourney.aggregate(query)
    .exec()
}
