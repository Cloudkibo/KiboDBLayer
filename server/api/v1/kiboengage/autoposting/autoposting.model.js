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
  actionType: { type: String, default: 'messenger' },
  filterTweets: { type: Boolean, default: false },
  filterTags: [String],
  moderateTweets: { type: Boolean, default: false },
  approvalChannel: Schema.Types.Mixed,
  isSegmented: { type: Boolean, default: false },
  segmentationPageIds: [String],
  segmentationLocale: [String],
  segmentationGender: [String],
  segmentationTimeZone: String,
  segmentationTags: [String],
  tweetsForwarded: {type: Number, default: 0},
  tweetsIgnored: {type: Number, default: 0},
  datetime: {type: Date, default: Date.now}
})

module.exports = mongoose.model('autopostings', autoPostingSchema)
