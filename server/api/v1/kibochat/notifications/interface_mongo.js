/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const NotificationsModel = require('./notifications.model')

exports.find = (criteria = {}) => {
  return NotificationsModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return NotificationsModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return NotificationsModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return NotificationsModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return NotificationsModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return NotificationsModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new NotificationsModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return NotificationsModel.aggregate(query)
    .exec()
}
