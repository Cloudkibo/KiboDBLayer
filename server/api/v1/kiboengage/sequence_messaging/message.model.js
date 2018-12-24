
let mongoose = require('mongoose')
let Schema = mongoose.Schema

const messageSchema = new Schema({
  schedule: {type: Schema.Types.Mixed},
  sequenceId: {type: Schema.ObjectId, ref: 'sequences'},
  title: String,
  payload: Schema.Types.Mixed,
  trigger: { type: Schema.Types.Mixed, default: {event: 'none', value: null} },
  segmentation: { type: Schema.Types.Mixed, default: [] },
  segmentationCondition: {type: Schema.Types.String, default: 'or'}, // 'and' or 'or'
  isActive: { type: Boolean, default: false },
  sent: {type: Number, default: 0},
  seen: {type: Number, default: 0},
  clicks: {type: Number, default: 0},
  fbMessageTag: String
})

module.exports = mongoose.model('sequenceMessages', messageSchema)
