const mongoose = require('mongoose')

const Schema = mongoose.Schema

const broadcastSchema = new Schema({
  title: String,
  category: [String],
  payload: Schema.Types.Mixed,
  userId: { type: String },
  companyId: { type: String },
  createdBySuperUser: {type: Boolean, default: false},
  datetime: { type: Date, default: Date.now }

})

module.exports = mongoose.model('broadcastTemplate', broadcastSchema)
