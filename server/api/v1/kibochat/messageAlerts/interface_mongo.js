/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const Model = require('./messageAlerts.model')

exports.find = (criteria = {}) => {
  return Model.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return Model.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return Model.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return Model.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return Model.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return Model.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new Model(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return Model.aggregate(query)
    .exec()
}
