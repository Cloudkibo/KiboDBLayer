let mongoose = require('mongoose')
let Schema = mongoose.Schema

const subscriberMessagesSchema = new Schema({
  pageId: String, // facebook page id
  companyId: String,
  autopostingId: String,
  autoposting_messages_id: String,
  subscriberId: String, // facebook id of subscribers
  datetime: { type: Date, default: Date.now },
  seen: {type: Boolean, default: false}
})

module.exports = mongoose.model('autoposting_subscriber_messages', subscriberMessagesSchema)
