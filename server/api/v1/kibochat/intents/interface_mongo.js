/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const IntentsModel = require('./intents.model')

exports.find = (criteria = {}) => {
  return IntentsModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return IntentsModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return IntentsModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return IntentsModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return IntentsModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return IntentsModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new IntentsModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return IntentsModel.aggregate(query)
    .exec()
}
