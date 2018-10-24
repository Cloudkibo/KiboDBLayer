
let mongoose = require('mongoose')
let Schema = mongoose.Schema

const botSchema = new Schema({
  pageId: {type: String},
  userId: {type: String},
  companyId: {type: String},
  botName: String,
  witAppId: String,
  witToken: String,
  witAppName: String,
  isActive: String,
  payload: [
    {
      questions: [String],
      answer: String,
      intent_name: String,
      videoLink: String
    }],
  hitCount: Number,
  missCount: Number,
  datetime: {type: Date, default: Date.now},
  blockedSubscribers: [String]
})

module.exports = mongoose.model('bots', botSchema)
