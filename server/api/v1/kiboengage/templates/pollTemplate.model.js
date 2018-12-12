
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pollSchema = new Schema({
  title: String,
  statement: String,
  options: [String],
  category: [String],
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('pollTemplate', pollSchema)
