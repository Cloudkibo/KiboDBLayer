const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rssFeedsSchema = new Schema({
  pageIds: [String],
  companyId: String,
  userId: String,
  feedUrl: String,
  title: String,
  subscriptions: Number,
  storiesCount: Number,
  defaultFeed: Boolean,
  timeInterval: {type: Number, default: 24}, // default 24,
  scheduledTime: Date, // default time 8AM
  isActive: Boolean,
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('rssFeeds', rssFeedsSchema)
