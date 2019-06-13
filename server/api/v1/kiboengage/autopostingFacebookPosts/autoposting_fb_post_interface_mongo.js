/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const AutopostingFbPostModel = require('./autoposting_fb_post.model')

exports.find = (criteria = {}) => {
  return AutopostingFbPostModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return AutopostingFbPostModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return AutopostingFbPostModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return AutopostingFbPostModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return AutopostingFbPostModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return AutopostingFbPostModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new AutopostingFbPostModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return AutopostingFbPostModel.aggregate(query)
    .exec()
}
