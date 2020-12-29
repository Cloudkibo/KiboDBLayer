let mongoose = require('mongoose')

let Schema = mongoose.Schema

let messageAlerts = new Schema({
  platform: String,
  companyId: String,
  type: String, // talk_to_agent, pending_session, unresolved_session
  enabled: Boolean, // userId, PSID, number, email ID
  interval: Number,
  intervalUnit: String
})

module.exports = mongoose.model('messageAlerts', messageAlerts)
