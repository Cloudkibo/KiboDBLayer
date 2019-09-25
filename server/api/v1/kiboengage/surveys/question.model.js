
let mongoose = require('mongoose')
let Schema = mongoose.Schema

const surveyQuestionSchema = new Schema({
  statement: String, // question statement
  options: { type: Array }, // array of question options
  actions: Schema.Types.Mixed,
  type: String, // type can be text/multichoice
  surveyId: { type: Schema.ObjectId, ref: 'surveys' },
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('surveyquestions', surveyQuestionSchema)
