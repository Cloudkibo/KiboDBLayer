let mongoose = require('mongoose')
let Schema = mongoose.Schema

const sequenceSubscribers = new Schema({
  subscriberId: { type: String },
  sequenceId: { type: String }, // will be updated
  companyId: { type: String },
  status: String, // subscribed or unsubscribed
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('sequenceSubcribers', sequenceSubscribers)
