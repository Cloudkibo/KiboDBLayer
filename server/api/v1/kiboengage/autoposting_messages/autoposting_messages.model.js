const mongoose = require('mongoose')

const Schema = mongoose.Schema

let AutopostingMessagesSchema = new Schema({
  pageId: String, // this is the page id
  page_fb_id: String, // this is the facebook page id
  companyId: String, // this is the company id
  autoposting_type: String, // facebook or twitter or youtube
  message_id: String, // this where message id will go
  autopostingId: {type: Schema.ObjectId, ref: 'autopostings'}, // unique name for autoposting account
  sent: Number, // sent count
  seen: Number, // seen count
  clicked: Number, // clicked count
  messageCreativeId: String,
  broadcastFbId: String,
  APIName: String,
  datetime: {type: Date, default: Date.now}
})

module.exports = mongoose.model('autoposting_messages', AutopostingMessagesSchema)
