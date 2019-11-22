
let mongoose = require('mongoose')
let Schema = mongoose.Schema

const botSchema = new Schema({
  pageId: {type: String},
  userId: {type: String},
  companyId: {type: String},
  botName: String,
  gcpPojectId: String,
  dialogFlowAgentId: String,
  isActive: {type: String, default: 'false'},
  hitCount: Number,
  missCount: Number,
  datetime: {type: Date, default: Date.now}
})

module.exports = mongoose.model('bots', botSchema)
