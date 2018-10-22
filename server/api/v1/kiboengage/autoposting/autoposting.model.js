let mongoose = require('mongoose')
let Schema = mongoose.Schema

let autoPostingSchema = new Schema({
  userId: { type: String },
  companyId: { type: String },
  accountTitle: String,
  subscriptionUrl: String,
  subscriptionType: String,
  accountUniqueName: String,
  payload: Schema.Types.Mixed,
  isActive: { type: Boolean, default: true },
  isSegmented: { type: Boolean, default: false },
  segmentationPageIds: [String],
  segmentationLocale: [String],
  segmentationGender: [String],
  segmentationTimeZone: String,
  segmentationTags: [String]
})

module.exports = mongoose.model('autopostings', autoPostingSchema)
