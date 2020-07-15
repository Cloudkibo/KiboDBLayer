/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const ResponsesModel = require('./cannedResponses.model')

exports.find = (criteria = {}) => {
  return ResponsesModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return ResponsesModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return ResponsesModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return ResponsesModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return ResponsesModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return ResponsesModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new ResponsesModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return ResponsesModel.aggregate(query)
    .exec()
}
