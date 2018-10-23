
let mongoose = require('mongoose')
let Schema = mongoose.Schema

const sequenceSubscribersMessages = new Schema({
  subscriberId: { type: String },
  messageId: { type: String }, // will be updated
  companyId: { type: String },
  datetime: { type: Date, default: Date.now },
  seen: {type: Boolean, default: false}
})

module.exports = mongoose.model('sequenceSubscribersMessages', sequenceSubscribersMessages)
