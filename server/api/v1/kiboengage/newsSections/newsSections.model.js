const mongoose = require('mongoose')

const Schema = mongoose.Schema

const newsSectionsSchema = new Schema({
  pageIds: [String],
  companyId: String,
  userId: String,
  feedUrl: String,
  title: String,
  subscriptions: Number,
  storiesCount: Number,
  defaultFeed: Boolean,
  timeInterval: {type: String, default: '24 hours'}, // default 24,
  scheduledTime: Date, // default time 8AM
  isActive: Boolean,
  datetime: { type: Date, default: Date.now },
  integrationType: String,
  stories: [String]
})

module.exports = mongoose.model('newsSections', newsSectionsSchema)
