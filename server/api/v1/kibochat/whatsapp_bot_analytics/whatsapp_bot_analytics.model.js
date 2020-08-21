let mongoose = require('mongoose')
let Schema = mongoose.Schema
let moment = require('moment')

let chatbotSchema = new Schema({
  chatbotId: String,
  companyId: String,
  dateToday: { type: Date, default: moment(new Date()).format('YYYY-MM-DD') },
  triggerWordsMatched: { type: Number, default: 0 },
  sentCount: { type: Number, default: 0 },
  newSubscribersCount: { type: Number, default: 0 },
  returningSubscribers: { type: Number, default: 0 }
})

module.exports = mongoose.model('whatsappbotsanalytics', chatbotSchema)
