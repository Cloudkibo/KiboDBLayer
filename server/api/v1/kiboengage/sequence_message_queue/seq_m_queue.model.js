let mongoose = require('mongoose')
let Schema = mongoose.Schema

const sequenceMessageQueueSchema = new Schema({
  sequenceId: {type: Schema.ObjectId, ref: 'sequences'},
  subscriberId: {type: String},
  companyId: { type: String },
  sequenceMessageId: { type: Schema.ObjectId, ref: 'sequenceMessages' },
  queueScheduledTime: {type: Date},
  isActive: { type: Boolean, default: false }
})

module.exports = mongoose.model('sequenceMessageQueue', sequenceMessageQueueSchema)
