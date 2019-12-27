const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rssSubscriptionsSchema = new Schema({
  rssFeedId: {type: Schema.ObjectId, ref: 'rssFeeds'},
  subscriberId: String,
  subscription: Boolean,
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('rssSubscriptions', rssSubscriptionsSchema)
