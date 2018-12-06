/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const PageAdminSubscriptionModel = require('./pageadminsubscriptions.model')

exports.find = (criteria = {}) => {
  return PageAdminSubscriptionModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return PageAdminSubscriptionModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return PageAdminSubscriptionModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return PageAdminSubscriptionModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return PageAdminSubscriptionModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return PageAdminSubscriptionModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new PageAdminSubscriptionModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return PageAdminSubscriptionModel.aggregate(query)
    .exec()
}
