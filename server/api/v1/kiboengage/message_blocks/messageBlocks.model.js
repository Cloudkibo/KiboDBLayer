let mongoose = require('mongoose')
let Schema = mongoose.Schema

let messageBlocksSchema = new Schema({
  module: {
    id: String,
    type: String
  },
  internalId: String,
  payload: Schema.Types.Mixed,
  userId: String,
  companyId: String,
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('messageBlocks', messageBlocksSchema)
