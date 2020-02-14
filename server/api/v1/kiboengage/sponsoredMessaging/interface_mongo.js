/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const SponsoredMessagingModel = require('./sponsoredMessaging.model')

exports.find = (criteria = {}) => {
  return SponsoredMessagingModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return SponsoredMessagingModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return SponsoredMessagingModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return SponsoredMessagingModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return SponsoredMessagingModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return SponsoredMessagingModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new SponsoredMessagingModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return SponsoredMessagingModel.aggregate(query)
    .exec()
}
