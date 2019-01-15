/*
This file will contain the functions for MongoDB interface.
By separating it from data layer, we are separating the concerns.
Thus Our web layer is agnostic of database
*/

exports.find = (Model, criteria = {}) => {
  return Model.find(criteria)
    .populate('botId')
    .exec()
}

exports.findOne = (Model, criteria) => {
  return Model.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (Model, query, updated, options) => {
  return Model.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (Model, query, updated, options) => {
  return Model.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (Model, query) => {
  return Model.deleteOne(query)
    .exec()
}

exports.deleteMany = (Model, query) => {
  return Model.deleteMany(query)
    .exec()
}

exports.create = (Model, payload) => {
  let obj = new Model(payload)
  return obj.save()
}

exports.aggregate = (Model, query) => {
  return Model.aggregate(query)
    .exec()
}
