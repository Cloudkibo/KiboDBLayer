let mongoose = require('mongoose')

let Schema = mongoose.Schema

let broadcastSchema = new Schema({
  platform: { type: String, default: 'Twilio' },
  payload: Schema.Types.Mixed,
  title: String,
  segmentation: Schema.Types.Mixed,
  userId: String,
  companyId: String,
  datetime: { type: Date, default: Date.now },
  sent: {type: Number, default: 0},
  delivered: {type: Number, default: 0},
  phoneNumber: {type: String},
  followUp: Boolean
})

module.exports = mongoose.model('smsBroadcasts', broadcastSchema)
