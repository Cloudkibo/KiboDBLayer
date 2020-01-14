const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rssFeedPostSubscribersSchema = new Schema({
  rssFeedId: {type: Schema.ObjectId, ref: 'rssFeeds'},
  rssFeedPostId: {type: Schema.ObjectId, ref: 'rssFeedPosts'},
  companyId: String,
  pageId: String,
  subscriberId: String,
  sent: Boolean,
  seen: Boolean,
  clicked: Boolean,
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('rssFeedPostSubscribers', rssFeedPostSubscribersSchema)
