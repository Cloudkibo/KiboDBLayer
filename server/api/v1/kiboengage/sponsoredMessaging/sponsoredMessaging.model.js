let mongoose = require('mongoose')
let timestamps = require('mongoose-timestamp')
let Schema = mongoose.Schema

let sponsoredMessagesSchema = new Schema({
  payload: Schema.Types.Mixed,
  messageCreativeId: String,
  currency: String,
  adAccountId: String,
  adSetId: String,
  adId: String,
  adName: String,
  campaignId: String,
  status: String,
  scheduleDateTime: Date,
  scheduleTimeZone: String,
  statusFbPayload: Schema.Types.Mixed, // to store actual error or rejection messages from facebook team
  companyId: String,
  userId: String,
  pageId: String,
  clicks: {type: Number, default: 0},
  statsFromUs: Schema.Types.Mixed
})

sponsoredMessagesSchema.plugin(timestamps)

module.exports = mongoose.model('sponsoredMessages', sponsoredMessagesSchema)
