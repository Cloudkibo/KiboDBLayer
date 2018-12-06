let mongoose = require('mongoose')
let Schema = mongoose.Schema

const surveyResponseSchema = new Schema({
  response: String, // response submitted by subscriber
  surveyId: { type: String }, // Will be updated
  questionId: { type: String }, // will be updated
  subscriberId: { type: String },
  datetime: { type: Date, default: Date.now }
  //  pageId: String, [discuss with sojharo, will we keep it or not]
})

module.exports = mongoose.model('surveyresponse', surveyResponseSchema)
