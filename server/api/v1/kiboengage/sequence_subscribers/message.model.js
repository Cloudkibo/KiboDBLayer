
let mongoose = require('mongoose')
let Schema = mongoose.Schema

const sequenceSubscribersMessages = new Schema({
  subscriberId: { type: String },
  messageId: { type: Schema.ObjectId, ref: 'sequenceMessages' },
  companyId: { type: String },
  datetime: { type: Date, default: Date.now },
  seen: {type: Boolean, default: false},
  clicked: {type: Boolean, default: false},
  received: {type: Schema.Types.Mixed}
})

module.exports = mongoose.model('sequenceSubscribersMessages', sequenceSubscribersMessages)
