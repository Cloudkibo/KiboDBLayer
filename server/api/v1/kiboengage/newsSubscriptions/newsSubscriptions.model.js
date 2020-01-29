const mongoose = require('mongoose')

const Schema = mongoose.Schema

const newsSubscriptionsSchema = new Schema({
  newsSectionId: {type: Schema.ObjectId, ref: 'newsSections'},
  subscriberId: Schema.Types.Mixed,
  subscription: Boolean,
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('newsSubscriptions', newsSubscriptionsSchema)
