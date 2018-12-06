const mongoose = require('mongoose')

const Schema = mongoose.Schema

let AutopostingMessagesSchema = new Schema({
  pageId: String, // this is the page id
  page_fb_id: String, // this is the facebook page id
  companyId: String, // this is the company id
  autoposting_type: String, // facebook or twitter or youtube
  message_id: String, // this where message id will go
  autopostingId: String, // unique name for autoposting account
  sent: Number, // sent count
  seen: Number, // seen count
  clicked: Number, // clicked count
  datetime: {type: Date, default: Date.now}
})

module.exports = mongoose.model('autoposting_messages', AutopostingMessagesSchema)
