/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const AutopostingSubscriberMessagesModel = require('./autoposting_subscriber_messages.model')

exports.find = (criteria = {}) => {
  return AutopostingSubscriberMessagesModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return AutopostingSubscriberMessagesModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return AutopostingSubscriberMessagesModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return AutopostingSubscriberMessagesModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return AutopostingSubscriberMessagesModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return AutopostingSubscriberMessagesModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new AutopostingSubscriberMessagesModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return AutopostingSubscriberMessagesModel.aggregate(query)
    .exec()
}
