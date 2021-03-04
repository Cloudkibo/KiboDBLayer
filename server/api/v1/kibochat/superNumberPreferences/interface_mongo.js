/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const SuperNumberPreferencesModel = require('./superNumberPreferences.model')

exports.find = (criteria = {}) => {
  return SuperNumberPreferencesModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return SuperNumberPreferencesModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return SuperNumberPreferencesModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return SuperNumberPreferencesModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return SuperNumberPreferencesModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return SuperNumberPreferencesModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new SuperNumberPreferencesModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return SuperNumberPreferencesModel.aggregate(query)
    .exec()
}
