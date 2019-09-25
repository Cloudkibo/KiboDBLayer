/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const StoreAnalyticsModel = require('./storeanalytics.model')

exports.find = (criteria = {}) => {
  return StoreAnalyticsModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return StoreAnalyticsModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return StoreAnalyticsModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return StoreAnalyticsModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return StoreAnalyticsModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return StoreAnalyticsModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new StoreAnalyticsModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return StoreAnalyticsModel.aggregate(query)
    .exec()
}
