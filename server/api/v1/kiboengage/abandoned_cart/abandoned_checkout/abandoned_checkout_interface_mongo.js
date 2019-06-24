/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const AbandonedCheckoutModel = require('./abandonedcheckout.model')

exports.find = (criteria = {}) => {
  return AbandonedCheckoutModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return AbandonedCheckoutModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return AbandonedCheckoutModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return AbandonedCheckoutModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return AbandonedCheckoutModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return AbandonedCheckoutModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new AbandonedCheckoutModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return AbandonedCheckoutModel.aggregate(query)
    .exec()
}
