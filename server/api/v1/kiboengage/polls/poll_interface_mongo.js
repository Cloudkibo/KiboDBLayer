/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const PollModel = require('./polls.model')

exports.find = (criteria = {}) => {
  return PollModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return PollModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return PollModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return PollModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return PollModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return PollModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new PollModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return PollModel.aggregate(query)
    .exec()
}
