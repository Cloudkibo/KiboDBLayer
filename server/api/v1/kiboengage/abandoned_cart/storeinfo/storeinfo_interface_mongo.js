/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const StoreInfoModel = require('./storeinfo.model')

exports.find = (criteria = {}) => {
  return StoreInfoModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return StoreInfoModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  console.log('query in update', query)
  console.log('updated in update', updated)
  return StoreInfoModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return StoreInfoModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return StoreInfoModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return StoreInfoModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new StoreInfoModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return StoreInfoModel.aggregate(query)
    .exec()
}
