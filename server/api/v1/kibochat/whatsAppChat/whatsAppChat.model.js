let mongoose = require('mongoose')

let Schema = mongoose.Schema

let LiveChatSchema = new Schema({
  format: {type: String, default: 'convos'},
  senderNumber: String,
  recipientNumber: String,
  contactId: String,
  companyId: String,
  payload: Schema.Types.Mixed,
  datetime: { type: Date, default: Date.now },
  status: {type: String, default: 'unseen'},
  repliedBy: Schema.Types.Mixed,
  seenDateTime: { type: Date },
  url_meta: Schema.Types.Mixed,
  seen: {type: Boolean, default: false},
  delivered: {type: Boolean, default: false},
  deliveryDateTime: {type: Date},
  messageId: {type: String}
})

module.exports = mongoose.model('whatsAppChat', LiveChatSchema)
