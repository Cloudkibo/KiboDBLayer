const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rssFeedPostSubscribersSchema = new Schema({
  rssFeedId: {type: Schema.ObjectId, ref: 'rssFeeds'},
  cl: {type: Schema.ObjectId, ref: 'rssFeedPosts'},
  companyId: String,
  pageId: String,
  subscriberId: String,
  sent: {type: Boolean, default: false},
  seen: {type: Boolean, default: false},
  clicked: {type: Boolean, default: false},
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('rssFeedPostSubscribers', rssFeedPostSubscribersSchema)
