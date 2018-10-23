/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const SurveyResponseModel = require('./response.model')

exports.find = (criteria = {}) => {
  return SurveyResponseModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return SurveyResponseModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return SurveyResponseModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return SurveyResponseModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return SurveyResponseModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return SurveyResponseModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new SurveyResponseModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return SurveyResponseModel.aggregate(query)
    .exec()
}
