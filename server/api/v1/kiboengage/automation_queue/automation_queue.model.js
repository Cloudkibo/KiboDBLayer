let mongoose = require('mongoose')
let Schema = mongoose.Schema

let automationQueueSchema = new Schema({
  automatedMessageId: String,
  subscriberId: { type: String },
  companyId: { type: String },
  type: String, // can be poll, survey, autoposting-fb, autoposting-twitter, autoposting-wordpress
  scheduledTime: {type: Date}
})

module.exports = mongoose.model('automation_queue', automationQueueSchema)
