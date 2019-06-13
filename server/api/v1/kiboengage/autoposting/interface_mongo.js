/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const AutopostingModel = require('./autoposting.model')

exports.find = (criteria = {}) => {
  console.log('criteria in autoposting', criteria)
  return AutopostingModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return AutopostingModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return AutopostingModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return AutopostingModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return AutopostingModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return AutopostingModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new AutopostingModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return AutopostingModel.aggregate(query)
    .exec()
}
