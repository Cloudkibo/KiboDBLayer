/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const RssFeedPostsModel = require('./newsPosts.model')

exports.find = (criteria = {}) => {
  return RssFeedPostsModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return RssFeedPostsModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return RssFeedPostsModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return RssFeedPostsModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return RssFeedPostsModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return RssFeedPostsModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new RssFeedPostsModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return RssFeedPostsModel.aggregate(query)
    .exec()
}
