/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const CheckOutInfoModel = require('./checkoutinfo.model')

exports.find = (criteria = {}) => {
  return CheckOutInfoModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return CheckOutInfoModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return CheckOutInfoModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return CheckOutInfoModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return CheckOutInfoModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return CheckOutInfoModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new CheckOutInfoModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return CheckOutInfoModel.aggregate(query)
    .exec()
}
