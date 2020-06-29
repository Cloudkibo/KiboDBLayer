let mongoose = require('mongoose')
let Schema = mongoose.Schema

let messageBlocksSchema = new Schema({
  module: Schema.Types.Mixed,
  uniqueId: String,
  payload: Schema.Types.Mixed,
  userId: String,
  companyId: String,
  title: String,
  datetime: { type: Date, default: Date.now },
  stats: {
    sentCount: { // How many times this message block was sent
      type: Number,
      default: 0
    },
    urlBtnClickedCount: { // How many times a url button was clicked here
      type: Number,
      default: 0
    }
  },
  triggers: [String],
  datetime: { type: Date, default: Date.now }
})

module.exports = mongoose.model('messageBlocks', messageBlocksSchema)
