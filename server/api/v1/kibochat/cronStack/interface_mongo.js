/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const CronStack = require('./cronStack.model')

exports.find = (criteria = {}) => {
  return CronStack.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return CronStack.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return CronStack.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return CronStack.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return CronStack.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return CronStack.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new CronStack(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return CronStack.aggregate(query)
    .exec()
}
