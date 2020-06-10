let mongoose = require('mongoose')
let Schema = mongoose.Schema

let chatbotSchema = new Schema({
  chatbotId: String,
  companyId: String,
  userId: String,
  dateToday: { type: Date, default: Date.now },
  triggerWordsMatched: { type: Number, default: 0 },
  urlBtnClickedCount: { type: Number, default: 0 },
  sentCount: { type: Number, default: 0 },
  newSubscribersCount: { type: Number, default: 0 },
  returningSubscribers: { type: Number, default: 0 }
})

module.exports = mongoose.model('chatbotsanalytics', chatbotSchema)
