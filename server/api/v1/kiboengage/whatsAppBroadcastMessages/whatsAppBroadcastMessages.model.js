let mongoose = require('mongoose')

let Schema = mongoose.Schema

let whatsAppBroadcastMessagesSchema = new Schema({
  userId: { type: String },
  companyId: { type: String },
  subscriberNumber: String,
  broadcastId: { type: Schema.ObjectId, ref: 'whatsAppBroadcasts' },
  datetime: { type: Date, default: Date.now },
  delivered: {type: Boolean, default: false},
  seen: {type: Boolean, default: false},
  messageId: String
})

module.exports = mongoose.model('whatsAppBroadcastMessages', whatsAppBroadcastMessagesSchema)
