/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const SequenceModel = require('./sequence.model')

exports.find = (criteria = {}) => {
  return SequenceModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return SequenceModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return SequenceModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return SequenceModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return SequenceModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return SequenceModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new SequenceModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return SequenceModel.aggregate(query)
    .exec()
}
