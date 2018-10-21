/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const PollResponseModel = require('./response.model')

exports.find = (criteria = {}) => {
  return PollResponseModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return PollResponseModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return PollResponseModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return PollResponseModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return PollResponseModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return PollResponseModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new PollResponseModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return PollResponseModel.aggregate(query)
    .exec()
}
