/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const PagePollModel = require('./page_poll.model')

exports.find = (criteria = {}) => {
  return PagePollModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return PagePollModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return PagePollModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return PagePollModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return PagePollModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return PagePollModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new PagePollModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return PagePollModel.aggregate(query)
    .exec()
}
