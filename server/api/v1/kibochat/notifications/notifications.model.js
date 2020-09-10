let mongoose = require('mongoose')

let Schema = mongoose.Schema

let NotificationsSchema = new Schema({
  message: String,
  category: Schema.Types.Mixed, // livechat or other
  seen: {type: Boolean, default: false},
  agentId: String,
  companyId: String,
  datetime: { type: Date, default: Date.now },
  platform: String
})

module.exports = mongoose.model('notifications', NotificationsSchema)
