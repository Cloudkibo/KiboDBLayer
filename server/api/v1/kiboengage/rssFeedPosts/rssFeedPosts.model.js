const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rssFeedPostsSchema = new Schema({
  rssFeedId: {type: Schema.ObjectId, ref: 'rssFeeds'},
  companyId: String,
  pageId: String,
  sent: Number,
  seen: Number,
  clicked: Number,
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('rssFeedPosts', rssFeedPostsSchema)
