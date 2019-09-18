let mongoose = require('mongoose')

let Schema = mongoose.Schema

let broadcastSchema = new Schema({
  platform: String, // TODO define this as enum with values, for now value is facebook
  payload: Schema.Types.Mixed,
  type: String, // TODO define this as enum with values ['text','attachment']
  title: String,
  text: String,
  fileurl: String,
  attachmentType: String,
  isSegmented: { type: Boolean, default: false },
  fbMessageTag: String,
  segmentationPageIds: [String],
  segmentationLocale: [String],
  segmentationGender: [String],
  segmentationTimeZone: String,
  segmentationTags: [String],
  isList: {type: Boolean, default: false},
  segmentationList: [String],
  userId: String,
  companyId: String,
  datetime: { type: Date, default: Date.now },
  clicks: {type: Number, default: 0},
  sent: Number,
  messageCreativeId: String,
  broadcastFbId: String,
  APIName: {type: String, default: 'batch_api'},
  messageType: {type: String}
})

module.exports = mongoose.model('broadcasts', broadcastSchema)
