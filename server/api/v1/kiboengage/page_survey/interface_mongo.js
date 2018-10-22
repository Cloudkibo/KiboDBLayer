/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const PageSurveyModel = require('./page_survey.model')

exports.find = (criteria = {}) => {
  return PageSurveyModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return PageSurveyModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return PageSurveyModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return PageSurveyModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return PageSurveyModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return PageSurveyModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new PageSurveyModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return PageSurveyModel.aggregate(query)
    .exec()
}
