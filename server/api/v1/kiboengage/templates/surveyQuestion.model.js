let mongoose = require('mongoose')
let Schema = mongoose.Schema

const surveyQuestionSchema = new Schema({
  statement: String, // question statement
  options: { type: Array }, // array of question options
  surveyId: { type: Schema.ObjectId, ref: 'surveyTemplate' }
})

module.exports = mongoose.model('surveyQuestion', surveyQuestionSchema)
