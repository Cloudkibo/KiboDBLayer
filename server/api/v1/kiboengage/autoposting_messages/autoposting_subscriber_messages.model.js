let mongoose = require('mongoose')
let Schema = mongoose.Schema

const subscriberMessagesSchema = new Schema({
  pageId: String, // facebook page id
  companyId: String,
  autopostingId: { type: Schema.ObjectId, ref: 'autopostings' },
  autoposting_messages_id: { type: Schema.ObjectId, ref: 'autoposting_messages' },
  subscriberId: String, // facebook id of subscribers
  datetime: { type: Date, default: Date.now },
  seen: {type: Boolean, default: false}
})

module.exports = mongoose.model('autoposting_subscriber_messages', subscriberMessagesSchema)
