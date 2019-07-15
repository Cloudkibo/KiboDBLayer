/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const OrderInfoModel = require('./orderinfo.model')

exports.find = (criteria = {}) => {
  return OrderInfoModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return OrderInfoModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return OrderInfoModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return OrderInfoModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return OrderInfoModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return OrderInfoModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new OrderInfoModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return OrderInfoModel.aggregate(query)
    .exec()
}
