/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const RssFeedsModel = require('./newsSections.model')

exports.find = (criteria = {}) => {
  return RssFeedsModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return RssFeedsModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return RssFeedsModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return RssFeedsModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return RssFeedsModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return RssFeedsModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new RssFeedsModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return RssFeedsModel.aggregate(query)
    .exec()
}
