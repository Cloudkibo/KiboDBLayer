/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const CartInfoModel = require('./cartinfo.model')

exports.find = (criteria = {}) => {
  return CartInfoModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return CartInfoModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return CartInfoModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return CartInfoModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return CartInfoModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return CartInfoModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new CartInfoModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return CartInfoModel.aggregate(query)
    .exec()
}
