let mongoose = require('mongoose')

let Schema = mongoose.Schema

let LiveChatSchema = new Schema({
  format: {type: String, default: 'kibopush'},
  senderNumber: String,
  recipientNumber: String,
  contactId: String,
  companyId: String,
  payload: Schema.Types.Mixed,
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('smsChat', LiveChatSchema)
