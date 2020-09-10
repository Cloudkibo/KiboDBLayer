let mongoose = require('mongoose')
let Schema = mongoose.Schema

let chatbotSubscribersAnalyticsSchema = new Schema({
  chatbotId: String,
  companyId: String,
  subscriberId: String,
  time: { type: Date, default: Date.now },
  messageBlockId: String
})

module.exports = mongoose.model('chatbotsubscribersanalytics', chatbotSubscribersAnalyticsSchema)
