const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pollSchema = new Schema({
  pageId: String,
  userId: { type: String },
  companyId: { type: String },
  pollId: { type: Schema.ObjectId, ref: 'polls' }, // Will be updated when broadcasts will be added
  subscriberId: String,
  datetime: { type: Date, default: Date.now },
  seen: {type: Boolean}
})

module.exports = mongoose.model('page_polls', pollSchema)
