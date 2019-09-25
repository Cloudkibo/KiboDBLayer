
/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const {tweets_queue} = require('./tweets_queue.model')

exports.find = (criteria = {}) => {
  return tweets_queue.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return tweets_queue.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return tweets_queue.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return tweets_queue.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return tweets_queue.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return tweets_queue.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new tweets_queue(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return tweets_queue.aggregate(query)
    .exec()
}
