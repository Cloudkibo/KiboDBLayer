/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const TagSubscriberModel = require('./tags_subscriber.model')

exports.find = (criteria = {}) => {
  return TagSubscriberModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return TagSubscriberModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return TagSubscriberModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return TagSubscriberModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return TagSubscriberModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return TagSubscriberModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new TagSubscriberModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return TagSubscriberModel.aggregate(query)
    .exec()
}
