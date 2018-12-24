let mongoose = require('mongoose')
let Schema = mongoose.Schema

const surveyResponseSchema = new Schema({
  response: String, // response submitted by subscriber
  surveyId: { type: Schema.ObjectId, ref: 'surveys' },
  questionId: { type: Schema.ObjectId, ref: 'surveyquestions' },
  subscriberId: { type: String },
  datetime: { type: Date, default: Date.now }
  //  pageId: String, [discuss with sojharo, will we keep it or not]
})

module.exports = mongoose.model('surveyresponse', surveyResponseSchema)
