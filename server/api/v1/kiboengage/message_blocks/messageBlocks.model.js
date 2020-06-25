let mongoose = require('mongoose')
let Schema = mongoose.Schema

let messageBlocksSchema = new Schema({
  module: Schema.Types.Mixed,
  uniqueId: String,
  payload: Schema.Types.Mixed,
  userId: String,
  companyId: String,
  title: String,
  triggers: [String],
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('messageBlocks', messageBlocksSchema)
