const mongoose = require('mongoose')

const Schema = mongoose.Schema

const broadcastSchema = new Schema({
  pageId: String,
  userId: { type: String },
  companyId: { type: String },
  subscriberId: String,
  broadcastId: { type: Schema.ObjectId, ref: 'broadcasts' }, // Will be updated when broadcasts will be added
  datetime: { type: Date, default: Date.now },
  seen: {type: Boolean},
  clicked: {type: Boolean}
})

module.exports = mongoose.model('page_broadcasts', broadcastSchema)
