let mongoose = require('mongoose')
let Schema = mongoose.Schema

const waitingSubscribers = new Schema({
  botId: {type: Schema.ObjectId, ref: 'bots'},
  subscriberId: {type: String},
  pageId: {type: String},
  intentId: {type: Schema.ObjectId, ref: 'intents'}, // This will represent each unique intent
  question: String,
  datetime: {type: Date, default: Date.now}
})

module.exports = mongoose.model('waitingSubscribers', waitingSubscribers)
