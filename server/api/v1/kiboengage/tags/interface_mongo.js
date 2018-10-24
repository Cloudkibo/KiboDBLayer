/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const TagsModel = require('./tags.model')

exports.find = (criteria = {}) => {
  return TagsModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return TagsModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return TagsModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return TagsModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return TagsModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return TagsModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new TagsModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return TagsModel.aggregate(query)
    .exec()
}
