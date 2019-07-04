const mongoose = require('mongoose')

const Schema = mongoose.Schema

let AutopostingFacebookPostSchema = new Schema({
  pageId: String, // this is the page id
  companyId: String, // this is the company id
  autopostingType: {type: String, default: 'twitter'}, // facebook or twitter or youtube
  messageId: String, // this where message id will go
  post: {type: Schema.Types.Mixed},
  postId: {type: String},
  autopostingId: {type: Schema.ObjectId, ref: 'autopostings'}, // unique name for autoposting account
  likes: Number, // likes count
  comments: Number, // comments count
  datetime: {type: Date, default: Date.now}
})

module.exports = mongoose.model('autoposting_facebook_posts', AutopostingFacebookPostSchema)
