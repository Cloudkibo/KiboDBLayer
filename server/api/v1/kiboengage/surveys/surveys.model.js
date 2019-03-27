const mongoose = require('mongoose')

const Schema = mongoose.Schema

const surveySchema = new Schema({
  title: String, // title of survey
  description: String, // description of survey
  image: String, // image url
  userId: { type: String },
  companyId: { type: String },
  datetime: { type: Date, default: Date.now },
  isSegmented: { type: Boolean, default: false },
  segmentationPageIds: [String],
  segmentationLocale: [String],
  segmentationGender: [String],
  segmentationTimeZone: String,
  segmentationTags: [String],
  segmentationSurvey: [String],
  isList: { type: Boolean, default: false },
  segmentationList: [String],
  isresponded: { type: Number, default: 0 },
  fbMessageTag: String,
  sent: Number,
  messageCreativeId: String,
  broadcastFbId: String,
  APIName: {type: String, default: 'send_api'}
})

module.exports = mongoose.model('surveys', surveySchema)
