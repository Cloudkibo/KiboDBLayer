const mongoose = require('mongoose')

const Schema = mongoose.Schema

const botsTemplateSchema = new Schema({
  title: String,
  category: [String],
  payload: [
    {
      questions: [String],
      answer: String,
      intent_name: String
    }],
  userId: { type: String },
  companyId: { type: String },
  createdBySuperUser: {type: Boolean, default: false},
  datetime: { type: Date, default: Date.now }

})

module.exports = mongoose.model('botsTemplate', botsTemplateSchema)
