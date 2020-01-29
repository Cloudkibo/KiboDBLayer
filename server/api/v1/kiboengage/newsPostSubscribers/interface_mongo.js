/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const RssFeedPostSubscribersModel = require('./newsPostSubscribers.model')

exports.find = (criteria = {}) => {
  return RssFeedPostSubscribersModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return RssFeedPostSubscribersModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return RssFeedPostSubscribersModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return RssFeedPostSubscribersModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return RssFeedPostSubscribersModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return RssFeedPostSubscribersModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new RssFeedPostSubscribersModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return RssFeedPostSubscribersModel.aggregate(query)
    .exec()
}
