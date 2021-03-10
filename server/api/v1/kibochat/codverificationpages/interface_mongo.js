/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/
const CodVerificationPage = require('./codverificationpage.model')

exports.find = (criteria = {}) => {
  return CodVerificationPage.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return CodVerificationPage.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return CodVerificationPage.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return CodVerificationPage.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return CodVerificationPage.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return CodVerificationPage.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new CodVerificationPage(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return CodVerificationPage.aggregate(query)
    .exec()
}
