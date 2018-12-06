/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const AutomationQueue = require('./automation_queue.model')

exports.find = (criteria = {}) => {
  return AutomationQueue.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return AutomationQueue.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return AutomationQueue.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return AutomationQueue.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return AutomationQueue.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return AutomationQueue.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new AutomationQueue(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return AutomationQueue.aggregate(query)
    .exec()
}
