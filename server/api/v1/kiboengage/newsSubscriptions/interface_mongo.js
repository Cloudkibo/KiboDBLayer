/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const RssSubscriptionsModel = require('./newsSubscriptions.model')

exports.find = (criteria = {}) => {
  return RssSubscriptionsModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return RssSubscriptionsModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return RssSubscriptionsModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return RssSubscriptionsModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return RssSubscriptionsModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return RssSubscriptionsModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new RssSubscriptionsModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return RssSubscriptionsModel.aggregate(query)
    .exec()
}
