/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const QuestionModel = require('./question.model')

exports.find = (criteria = {}) => {
  return QuestionModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return QuestionModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return QuestionModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return QuestionModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return QuestionModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return QuestionModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new QuestionModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return QuestionModel.aggregate(query)
    .exec()
}
