/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const SurveyModel = require('./surveys.model')

exports.find = (criteria = {}) => {
  return SurveyModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return SurveyModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return SurveyModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return SurveyModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return SurveyModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return SurveyModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new SurveyModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return SurveyModel.aggregate(query)
    .exec()
}
