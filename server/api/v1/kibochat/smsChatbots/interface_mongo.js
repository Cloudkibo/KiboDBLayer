const SmsChatbotModel = require('./model')

exports.find = (criteria = {}) => {
  return SmsChatbotModel.find(criteria)
    .exec()
}

exports.findOne = (criteria) => {
  return SmsChatbotModel.findOne(criteria)
    .exec()
}

exports.findOneAndUpdate = (query, updated, options) => {
  return SmsChatbotModel.findOneAndUpdate(query, updated, options)
    .exec()
}

exports.updateMany = (query, updated, options) => {
  return SmsChatbotModel.updateMany(query, updated, options)
    .exec()
}

exports.deleteOne = (query) => {
  return SmsChatbotModel.deleteOne(query)
    .exec()
}

exports.deleteMany = (query) => {
  return SmsChatbotModel.deleteMany(query)
    .exec()
}

exports.create = (payload) => {
  let obj = new SmsChatbotModel(payload)
  return obj.save()
}

exports.aggregate = (query) => {
  return SmsChatbotModel.aggregate(query)
    .exec()
}
