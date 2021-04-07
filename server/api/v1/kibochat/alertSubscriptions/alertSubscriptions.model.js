let mongoose = require('mongoose')

let Schema = mongoose.Schema

let alertSubscriptions = new Schema({
  platform: {type: String, default: 'whatsApp'},
  companyId: String,
  alertChannel: String, // notification, messenger, whatsapp, email
  channelId: String, // userId, PSID, number, email ID
  userName: String,
  profilePic: String,
  pageId: String,
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('alertSubscriptions', alertSubscriptions)
