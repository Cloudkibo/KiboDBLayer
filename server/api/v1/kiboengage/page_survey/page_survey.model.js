const mongoose = require('mongoose')

const Schema = mongoose.Schema

const surveySchema = new Schema({
  pageId: String,
  userId: { type: String },
  companyId: { type: String },
  surveyId: { type: Schema.ObjectId, ref: 'surveys' }, // Will be updated when broadcasts will be added
  subscriberId: String,
  datetime: { type: Date, default: Date.now },
  seen: {type: Boolean}
})

module.exports = mongoose.model('page_surveys', surveySchema)
