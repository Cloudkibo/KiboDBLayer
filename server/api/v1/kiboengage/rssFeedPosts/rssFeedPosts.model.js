const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rssFeedPostsSchema = new Schema({
  rssFeedId: {type: Schema.ObjectId, ref: 'rssFeeds'},
  companyId: String,
  pageId: String,
  clicked: {type: Number, default: 0},
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('rssFeedPosts', rssFeedPostsSchema)
