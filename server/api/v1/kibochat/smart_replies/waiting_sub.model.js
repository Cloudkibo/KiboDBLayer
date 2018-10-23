let mongoose = require('mongoose')
let Schema = mongoose.Schema

const waitingSubscribers = new Schema({
  botId: {type: String}, // will be updated later
  subscriberId: {type: String},
  pageId: {type: String},
  intentId: String, // This will represent each unique intent
  Question: String,
  datetime: {type: Date, default: Date.now}
})

module.exports = mongoose.model('waitingSubscribers', waitingSubscribers)
