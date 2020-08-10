/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const WhatsAppMessageBlockModel = require('./whatsAppMessageBlock.model')

exports.find = (criteria = {}) => {
  return WhatsAppMessageBlockModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return WhatsAppMessageBlockModel.findOne(criteria)
    .exec()
}

exports.create = (payload) => {
  let obj = new WhatsAppMessageBlockModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return WhatsAppMessageBlockModel.aggregate(query)
    .exec()
}
exports.findOneAndUpdate = (query, updated, options) => {
  return WhatsAppMessageBlockModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return WhatsAppMessageBlockModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return WhatsAppMessageBlockModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return WhatsAppMessageBlockModel.deleteMany(query)
    .exec()
}
