let mongoose = require('mongoose')
let Schema = mongoose.Schema

const sequenceMessageQueueSchema = new Schema({
  sequenceId: {type: String}, // will be updated
  subscriberId: {type: String},
  companyId: { type: String },
  sequenceMessageId: { type: String }, // will be updated
  queueScheduledTime: {type: Date},
  isActive: { type: Boolean, default: false }
})

module.exports = mongoose.model('sequenceMessageQueue', sequenceMessageQueueSchema)
